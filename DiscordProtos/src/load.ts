import puppeteer from "puppeteer";
import { writeFileSync, readFileSync } from "fs";
import { join } from "path";

// For the JS template, all we need to do is update the exports at the bottom
const JS_TEMPLATE = `import { MessageType } from "@protobuf-ts/runtime";

/**
 * Supports both node and web environments, replacement of previous Buffer.from() being node-only.
 * This is specific to this package's usage, and not a replacement of Buffer.from() altogether
 */
const compatBuffer = {
    from: function (input: string | Uint8Array, encoding?: string) {
        if (typeof input === "string" && encoding === "base64") {
            const encodedBytes = atob(input);
            const bytes = new Uint8Array(encodedBytes.length);
            for (let i = 0; i < encodedBytes.length; i++) {
                bytes[i] = encodedBytes.charCodeAt(i);
            }
            return bytes;
        } else if (!encoding && input instanceof Uint8Array) {
            return input;
        }
        throw new Error("Invalid input type.");
    },
    toBase64String: function (buffer: Uint8Array) {
        let encodedBytes = "";
        for (let i = 0; i < buffer.length; i++) {
            encodedBytes += String.fromCharCode(buffer[i]);
        }
        return btoa(encodedBytes);
    },
};

function deepConvertUintArrayToBuffer(obj: any): any {
	if (
		obj instanceof Uint8Array ||
		obj instanceof Uint16Array ||
		obj instanceof Uint32Array ||
		obj instanceof BigUint64Array
	) {
		return Buffer.from(obj.buffer);
	}

	if (Array.isArray(obj)) {
		return obj.map(deepConvertUintArrayToBuffer);
	}

	if (obj && typeof obj === 'object' && !Buffer.isBuffer(obj)) {
		const converted: Record<string, any> = {};
		for (const key in obj) {
			if (Object.prototype.hasOwnProperty.call(obj, key)) {
				converted[key] = deepConvertUintArrayToBuffer(obj[key]);
			}
		}
		return converted;
	}

	return obj;
}

function toBase64(this: MessageType<any>, data) {
    return compatBuffer.toBase64String(compatBuffer.from(this.toBinary(data)));
}

function fromBase64(this: MessageType<any>, base64: string) {
    return deepConvertUintArrayToBuffer(this.fromBinary(
		compatBuffer.from(base64, 'base64'),
	));
}

declare module "@protobuf-ts/runtime" {
    interface MessageType<T> {
        toBase64(data: T): string;
        fromBase64(base64: string): T;
    }
}

MessageType.prototype.fromBase64 = fromBase64;
MessageType.prototype.toBase64 = toBase64;

{{ protos_exports }}
`;


const PARSE_SCRIPT = readFileSync(join(__dirname, "parse.js"), "utf8");

async function main() {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    console.log("Navigating to Discord...");
    await page.goto("https://canary.discord.com/app", { waitUntil: "networkidle0" });
    console.log("Parsing protos...");
    const protos = await page.evaluate(`${PARSE_SCRIPT}; protos`);

    for (const [name, proto] of Object.entries(protos)) {
        console.log(`Writing ${name}.proto...`);
        writeFileSync(join(__dirname, "..", "discord_protos", name + ".proto"), proto.data);
    }
    await browser.close();

    const packageJson = JSON.parse(readFileSync(join(__dirname, "..", "package.json"), "utf8"));

    // This is very cursed
    // For protoc to parse any new protos, we have to edit the script in the package.json to include the filenames
    const js = packageJson.scripts.js.split(" ").filter((x) => !x.endsWith(".proto")).join(" ");
    packageJson.scripts.js = `${js} ${Object.keys(protos).map((x) => x + ".proto").join(" ")}`;
    writeFileSync(join(__dirname, "..", "package.json"), JSON.stringify(packageJson, null, 4));

    // Update the JS template
    const jsExports = Object.keys(protos).map((x) => `export * from "./proto/${x}";`).join("\n");
    writeFileSync(join(__dirname, "..", "src", "index.ts"), JS_TEMPLATE.replace("{{ protos_exports }}", jsExports));
}

main();
