import { MessageType } from "@protobuf-ts/runtime";

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

export * from "./proto/PremiumMarketingComponentProperties";
export * from "./proto/FrecencyUserSettings";
export * from "./proto/PreloadedUserSettings";
