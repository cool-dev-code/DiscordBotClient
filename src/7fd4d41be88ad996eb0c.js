"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[70983],{469023:(e,n,r)=>{r.d(n,{Z:()=>R});var t=r(749131),a=r(665118),o=r(120491),s=r(436622),i=r(823975),l=r(132457),u=r(174144),c=r(489752),d=r(236563),f=r(143901),h=r(296047),m=r(660772),v=r(725060),g=r(777203),Z=r(544031),p=r(747890),b=r(730393),E=r(363582),y=r(183790),T=r(796938),x=r(787554),j=r(516909),S=r(890592),_=r(296916),N=r(2590);function R(e,n){switch(e.type){case N.d4z.DM:return t.Z;case N.d4z.GROUP_DM:return E.Z;case N.d4z.GUILD_ANNOUNCEMENT:return e.isNSFW()?p.Z:(0,_.Z)(e)?Z.Z:g.Z;case N.d4z.GUILD_TEXT:return e.id===(null==n?void 0:n.rulesChannelId)?o.Z:e.isNSFW()?l.Z:(0,_.Z)(e)?i.Z:s.Z;case N.d4z.GUILD_FORUM:var r=e.isMediaChannel();return e.isNSFW()?r?v.Z:d.Z:(0,_.Z)(e)?r?m.Z:c.Z:r?h.Z:u.Z;case N.d4z.GUILD_STAGE_VOICE:return j.Z;case N.d4z.GUILD_VOICE:return(0,_.Z)(e)?x.Z:T.Z;case N.d4z.ANNOUNCEMENT_THREAD:case N.d4z.PUBLIC_THREAD:return e.isNSFW()?b.Z:e.isForumPost()?f.Z:S.Z
;case N.d4z.PRIVATE_THREAD:return e.isNSFW()?b.Z:y.Z;case N.d4z.GUILD_DIRECTORY:return a.Z;default:return null}}},431611:(e,n,r)=>{r.d(n,{r7:()=>y,FO:()=>T,nA:()=>x,qQ:()=>j});var t=r(667294),a=r(496486),o=r.n(a),s=r(202351),i=r(372518),l=r(61209),u=r(682776),c=r(717091),d=r(72580),f=r(102921),h=r(536945),m=r(359067),v=r(487685),g=r(671293),Z=r(217973),p=r(488462);function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function E(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,o=[],s=!0,i=!1;try{for(r=r.call(e);!(s=(t=r.next()).done);s=!0){o.push(t.value);if(n&&o.length===n)break}}catch(e){i=!0;a=e}finally{try{s||null==r.return||r.return()}finally{if(i)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return b(e,n);var r=Object.prototype.toString.call(e).slice(8,-1)
;"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(){t.useEffect((function(){(0,Z.A_)()}),[])}function T(e){var n=function(e){var n=(0,s.Wu)([u.Z,h.Z,l.Z],(function(){return o()(h.Z.getThreadsForParent(e.guild_id,e.id)).values().map((function(e){var n=e.id;return l.Z.getChannel(n)})).filter(d.lm).filter((function(e){return u.Z.can(p.Pl.VIEW_CHANNEL,e)})).map((function(e){return e.id})).value()}),[]);return t.useMemo((function(){return o()(n).sort((function(e,n){return f.Z.compare(c.ZP.lastMessageId(e),c.ZP.lastMessageId(n))})).reverse().value()}),[n])}(e),r=E((0,s.e7)([v.Z],(function(){return o().partition(n,(function(e){return v.Z.hasJoined(e)}))}),[n],s.pF),2)
;return{joinedThreadIds:r[0],unjoinedThreadIds:r[1]}}function x(e){var n=(0,s.Wu)([u.Z,h.Z,l.Z],(function(){return o()(h.Z.getThreadsForGuild(e)).values().map((function(e){return o().values(e)})).flatten().map((function(e){var n=e.id;return l.Z.getChannel(n)})).filter(d.lm).filter((function(e){return u.Z.can(p.Pl.VIEW_CHANNEL,e)})).map((function(e){return e.id})).value()}),[]);return t.useMemo((function(){return o()(n).sort((function(e,n){return f.Z.compare(c.ZP.lastMessageId(e),c.ZP.lastMessageId(n))})).reverse().value()}),[n])}function j(e,n,r){var a=(0,s.cj)([m.Z],(function(){return{loading:m.Z.isLoading(e.id,n,r),isInitialLoad:m.Z.isInitialLoad,canLoadMore:m.Z.canLoadMore,nextOffset:m.Z.nextOffset}})),c=a.canLoadMore,d=a.loading,f=a.nextOffset,h=a.isInitialLoad,v=t.useCallback((function(){u.Z.can(p.Pl.READ_MESSAGE_HISTORY,e)&&g.Z.loadArchivedThreads(e.guild_id,e.id,n,r,f)}),[e,n,r,f]);t.useEffect((function(){h&&v()}),[e.id,n,r,h]);t.useEffect((function(){i.Z.resort(e.id)}),[e.id])
;return{threadIds:(0,s.Wu)([m.Z,l.Z,u.Z],(function(){return o()(m.Z.getThreads(e.id,n,r)).filter((function(e){var n=l.Z.getChannel(e);return null!=n&&u.Z.can(p.Pl.VIEW_CHANNEL,n)})).value()})),canLoadMore:c,loading:d||h,loadMore:v}}},270983:(e,n,r)=>{r.d(n,{Z:()=>z});var t=r(785893),a=r(667294),o=r(294184),s=r.n(o),i=r(202351),l=r(707961),u=r(682776),c=r(190186),d=r(189865),f=r(890592),h=r(671293),m=r(225386),v=r(217973),g=r(465637),Z=r(473708),p=r(661570),b=r.n(p);function E(e){var n=e.channel,r=e.header,a=e.startThread,o=(0,m.NE)(n),s=(0,m.Xu)(n);return(0,t.jsxs)("div",{className:b().container,children:[(0,t.jsxs)("div",{className:b().iconContainer,children:[(0,t.jsx)("div",{className:b().icon,children:(0,t.jsx)(f.Z,{width:36,height:36})}),(0,t.jsx)(g.Z,{className:b().stars})]}),(0,t.jsx)(l.X6q,{className:b().header,variant:"heading-xl/semibold",children:r}),(0,t.jsx)(l.xvT,{color:"header-secondary",variant:"text-md/normal",children:Z.Z.Messages.THREAD_BROWSER_EMPTY_STATE_SUBTEXT
}),o||s?(0,t.jsx)(l.zxk,{className:b().cta,onClick:a,children:Z.Z.Messages.CREATE_THREAD}):null]})}var y=r(661847),T=r(103738),x=r.n(T);function j(e){var n=e.channel,r=e.threadIds,o=e.startThread,i=e.goToThread,u=a.useCallback((function(e){return(0,t.jsx)(y.Z,{threadId:r[e.row],goToThread:i},"".concat(e.section,"-").concat(e.row))}),[r,i]);return 0===r.length?(0,t.jsx)(E,{channel:n,header:Z.Z.Messages.THREAD_BROWSER_EMPTY_STATE_HEADER,startThread:o}):(0,t.jsx)(l.aVo,{className:s()(x().list,x().activeThreadsList),fade:!0,sections:[r.length],sectionHeight:0,rowHeight:80,renderRow:u,renderSection:function(){return null},chunkSize:20})}var S=r(920883),_=r(431611),N=new Set;function R(e){var n=e.channel,r=e.startThread,o=e.goToThread,s=(0,_.FO)(n),i=s.joinedThreadIds,u=s.unjoinedThreadIds,c=(0,_.qQ)(n,S.z.LATEST_ACTIVITY,N),d=c.threadIds,f=c.canLoadMore,h=c.loading,m=c.loadMore,v=a.useRef(null);(0,_.r7)();var g=a.useCallback((function(e){var n=0===e.section?i:1===e.section?u:d;return(0,
t.jsx)(y.Z,{threadId:n[e.row],goToThread:o},"".concat(e.section,"-").concat(e.row))}),[d,i,u,o]),p=a.useCallback((function(e){return 0===e.section?(0,t.jsx)(A,{text:Z.Z.Messages.THREAD_BROWSER_JOINED_HEADER.format({count:i.length})},e.section):1===e.section?(0,t.jsx)(A,{text:Z.Z.Messages.THREAD_BROWSER_OTHER_HEADER.format({count:u.length})},e.section):(0,t.jsx)(A,{text:Z.Z.Messages.THREAD_BROWSER_ARCHIVED_HEADER},e.section)}),[i.length,u.length]),b=a.useCallback((function(e){return 1===e&&i.length>0||2===e&&(i.length>0||u.length>0)?64:32}),[i.length,u.length]),T=a.useCallback((function(){var e,n=null===(e=v.current)||void 0===e?void 0:e.getScrollerState();if(null!=n){var r=n.scrollTop+n.offsetHeight;n.scrollHeight-r<200&&m()}}),[m]);return 0===i.length&&0===u.length&&0===d.length?h?(0,t.jsx)("div",{className:x().list,children:(0,t.jsx)(l.$jN,{className:x().spinner})}):(0,t.jsx)("div",{className:x().list,children:(0,t.jsx)(E,{channel:n,
header:Z.Z.Messages.THREAD_BROWSER_EMPTY_STATE_HEADER,startThread:r})}):(0,t.jsx)(l.aVo,{ref:v,className:x().list,fade:!0,sections:[i.length,u.length,d.length],sectionHeight:b,rowHeight:80,renderRow:g,renderSection:p,chunkSize:20,onScroll:f?T:void 0})}function A(e){var n=e.text;return(0,t.jsx)(l.xvT,{color:"header-secondary",variant:"text-xs/bold",className:x().sectionHeader,children:n})}var w=r(367406),O=r(379364),I=r(2590),M=r(793191),C=r.n(M);function P(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function D(e,n,r,t,a,o,s){try{var i=e[o](s),l=i.value}catch(e){r(e);return}i.done?n(l):Promise.resolve(l).then(t,a)}function k(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r;return e}function H(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r)
;"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));t.forEach((function(n){k(e,n,r[n])}))}return e}function L(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,o=[],s=!0,i=!1;try{for(r=r.call(e);!(s=(t=r.next()).done);s=!0){o.push(t.value);if(n&&o.length===n)break}}catch(e){i=!0;a=e}finally{try{s||null==r.return||r.return()}finally{if(i)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return P(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(e,n)}(e,n)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var W=function(e,n){var r,t,a,o,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,t&&(a=2&o[0]?t.return:o[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,o[1])).done)return a;(t=0,a)&&(o=[2&o[0],a.value]);switch(o[0]){case 0:case 1:a=o;break;case 4:s.label++;return{value:o[1],done:!1};case 5:s.label++;t=o[1];o=[0];continue;case 7:o=s.ops.pop();s.trys.pop();continue;default:if(!(a=s.trys,a=a.length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){s.label=o[1];break}if(6===o[0]&&s.label<a[1]){
s.label=a[1];a=o;break}if(a&&s.label<a[2]){s.label=a[2];s.ops.push(o);break}a[2]&&s.ops.pop();s.trys.pop();continue}o=n.call(e,s)}catch(e){o=[6,e];t=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}};function z(e){var n,r,o,c,g,p,b,E,y,T,x,S,_,N,A,M,P,k,z=e.channel,B=e.className,U=e.onClose,G=(0,i.e7)([u.Z],(function(){return u.Z.can(I.Plq.READ_MESSAGE_HISTORY,z)})),V=(0,m.cD)(z),Y=function(){U();(0,w.R6)(z,void 0,"Thread Browser Empty State")},q=a.useCallback((function(e,n){U();(0,w.ok)(e,!n,O.on.BROWSER)}),[U]),X=(n=z.guild_id,r=z.id,o=L(a.useState(""),2),c=o[0],g=o[1],p=L(a.useState(!1),2),b=p[0],E=p[1],y=L(a.useState(!1),2),T=y[0],x=y[1],S=L(a.useState([]),2),_=S[0],N=S[1],A=(k=(P=function(){var e;return W(this,(function(t){switch(t.label){case 0:if(null==c||""===c)return[2];if(b)return[2];E(!0);t.label=1;case 1:t.trys.push([1,,3,4]);return[4,h.Z.searchThreads(n,r,c)];case 2:e=t.sent();x(!0);N(e);return[3,4];case 3:E(!1);return[7];case 4:
return[2]}}))},function(){var e=this,n=arguments;return new Promise((function(r,t){var a=P.apply(e,n);function o(e){D(a,r,t,o,s,"next",e)}function s(e){D(a,r,t,o,s,"throw",e)}o(void 0)}))}),function(){return k.apply(this,arguments)}),M=function(e){g(e);0===e.length&&x(!1)},{query:c,setQuery:M,isLoading:b,hasResults:T,submit:A,results:_});a.useEffect((function(){(0,v.A_)()}),[]);return(0,t.jsx)("div",{className:s()(B,C().container),children:(0,t.jsx)(l.y5t,{component:(0,t.jsxs)("div",{className:C().header,children:[(0,t.jsx)(f.Z,{className:C().threadIcon}),(0,t.jsx)(l.X6q,{variant:"heading-md/semibold",className:C().title,children:Z.Z.Messages.THREAD_BROWSER_TITLE}),G?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:C().divider}),(0,t.jsx)(F,H({},X))]}):null,(0,t.jsx)("div",{className:C().spacer}),V?(0,t.jsx)(l.zxk,{size:l.zxk.Sizes.MIN,className:C().createButton,onClick:function(){U();(0,w.R6)(z,void 0,"Thread Browser Toolbar")},children:Z.Z.Messages.CREATE}):null,(0,
t.jsx)(l.P3F,{className:C().closeIcon,onClick:U,"aria-label":Z.Z.Messages.CLOSE,children:(0,t.jsx)(d.Z,{})})]}),children:X.hasResults?(0,t.jsx)(j,{channel:z,startThread:Y,goToThread:q,threadIds:X.results}):(0,t.jsx)(R,{channel:z,startThread:Y,goToThread:q})})})}function F(e){var n=e.query,r=e.setQuery,a=e.submit,o=e.isLoading;return(0,t.jsx)(c.Z,{autoFocus:!0,className:C().searchBox,query:n,isLoading:o,onChange:function(e){return r(e)},onClear:function(){return r("")},onKeyDown:function(e){return"Enter"===e.key&&a()},placeholder:Z.Z.Messages.SEARCH_THREAD_NAMES,"aria-label":Z.Z.Messages.SEARCH_THREAD_NAMES})}},661847:(e,n,r)=>{r.d(n,{Z:()=>B});var t=r(785893),a=r(667294),o=r(202351),s=r(707961),i=r(971402),l=r(61209),u=r(984216),c=r(473903),d=r(96606),f=r(666613),h=r(385028),m=r(357088),v=r(469023),g=r(804808),Z=r(550131),p=r(21372),b=r(717091),E=r(840922),y=r(890592),T=r(763536),x=r(102921),j=r(749565),S=r(591684),_=r(217973),N=r(939198),R=r(473708),A=r(469076),w=r.n(A)
;function O(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r;return e}function I(e){return e.isActiveThread()?(0,t.jsx)(M,{channel:e}):(0,t.jsx)(D,{channel:e})}function M(e){var n=e.channel,r=(0,o.e7)([S.Z],(function(){return S.Z.getMostRecentMessage(n.id)}));return null==r?(0,t.jsx)(C,{channel:n}):(0,t.jsx)(P,{channel:n,message:r})}function C(e){var n=e.channel,r=(0,_.Ok)(n);return(0,t.jsxs)(s.xvT,{className:w().subtext,variant:"text-sm/normal",color:"header-secondary",children:[R.Z.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES,"  •  ",(0,_.Ye)(r)]})}function P(e){var n,r=e.channel,i=e.message;(0,m.$)(O({},r.guild_id,[i.author.id]));var l=(0,o.e7)([c.default],(function(){return null!==(n=c.default.getUser(i.author.id))&&void 0!==n?n:i.author})),u=(0,Z.ZP)(i),d=u.nick,f=u.colorString,v=(0,o.e7)([E.Z],(function(){return E.Z.isBlocked(i.author.id)})),p=a.useMemo((function(){var e=null!=i.content&&""!==i.content?(0,g.ZP)(i,{formatInline:!0
}).content:null,n=(0,T.f)(i,e,v,w().messageContent,{iconClass:w().messageContentIcon,iconSize:N.WW}),r=n.contentPlaceholder,a=n.renderedContent,o=n.icon;return(0,t.jsxs)(t.Fragment,{children:[null!=a?a:(0,t.jsx)("span",{children:r}),o]})}),[i,v]);return(0,t.jsxs)(s.xvT,{className:w().subtext,variant:"text-sm/normal",color:"header-secondary",children:[(0,t.jsx)(h.Z,{className:w().avatar,user:l,size:s.EFr.SIZE_16}),(0,t.jsxs)("span",{className:w().authorName,style:{color:f},children:[d,":"]})," ",p,"  •  ",(0,_.Ye)(x.Z.extractTimestamp(i.id))]})}function D(e){var n,r,a=e.channel,i=(0,o.e7)([b.ZP],(function(){return b.ZP.lastMessageId(a.id)})),l=null==i?new Date(null!==(r=null===(n=a.threadMetadata)||void 0===n?void 0:n.archiveTimestamp)&&void 0!==r?r:Date.now()).getTime():x.Z.extractTimestamp(i);(0,m.$)(O({},a.guild_id,[a.ownerId]));var u,d=(0,o.e7)([c.default],(function(){return c.default.getUser(a.ownerId)})),f=(0,o.e7)([p.ZP],(function(){return p.ZP.getMember(a.guild_id,a.ownerId)
})),g=null!==(u=(0,v.Z)(a))&&void 0!==u?u:y.Z;return(0,t.jsx)(s.xvT,{className:w().subtext,variant:"text-sm/normal",color:"header-secondary",children:null==d?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:w().noAvatarIcon,children:(0,t.jsx)(g,{width:10,height:10})}),R.Z.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({time:(0,_.Ye)(l)})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.Z,{className:w().avatar,user:d,size:s.EFr.SIZE_16}),R.Z.Messages.THREAD_BROWSER_STARTED_BY.format({authorHook:function(e,n){var r,a;return(0,t.jsx)(s.PUh,{className:w().startedByName,color:null!==(r=null==f?void 0:f.colorString)&&void 0!==r?r:void 0,name:null!==(a=null==f?void 0:f.nick)&&void 0!==a?a:j.ZP.getName(d)},n)}}),(0,t.jsx)("span",{className:w().bullet,children:"•"}),R.Z.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({time:(0,_.Ye)(l)})]})})}var k=r(379364);function H(e,n,r,t,a,o,s){try{var i=e[o](s),l=i.value}catch(e){r(e);return}i.done?n(l):Promise.resolve(l).then(t,a)}
function L(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var o=e.apply(n,r);function s(e){H(o,t,a,s,i,"next",e)}function i(e){H(o,t,a,s,i,"throw",e)}s(void 0)}))}}function W(e,n,r){n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r;return e}function z(e,n){n=null!=n?n:{};Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})));r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}));return e}var F=function(e,n){var r,t,a,o,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
;function i(o){return function(i){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,t&&(a=2&o[0]?t.return:o[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,o[1])).done)return a;(t=0,a)&&(o=[2&o[0],a.value]);switch(o[0]){case 0:case 1:a=o;break;case 4:s.label++;return{value:o[1],done:!1};case 5:s.label++;t=o[1];o=[0];continue;case 7:o=s.ops.pop();s.trys.pop();continue;default:if(!(a=s.trys,a=a.length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){s.label=o[1];break}if(6===o[0]&&s.label<a[1]){s.label=a[1];a=o;break}if(a&&s.label<a[2]){s.label=a[2];s.ops.push(o);break}a[2]&&s.ops.pop();s.trys.pop();continue}o=n.call(e,s)}catch(e){o=[6,e];t=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}};const B=a.memo((function(e){var n=e.threadId,a=e.goToThread,u=e.showChannelName,c=(0,o.e7)([l.Z],(function(){return l.Z.getChannel(n)})),d=(0,
o.e7)([l.Z],(function(){return l.Z.getChannel(c.parent_id)}));return(0,t.jsxs)(s.P3F,{className:w().container,onClick:function(e){return a(c,e.shiftKey)},onContextMenu:function(e){return(0,i.jW)(e,L((function(){var e,n;return F(this,(function(a){switch(a.label){case 0:return[4,Promise.all([r.e(40532),r.e(12916),r.e(28531),r.e(97815),r.e(13717),r.e(27499),r.e(32548),r.e(65472),r.e(10675),r.e(87903),r.e(58969),r.e(50029),r.e(6004),r.e(83538)]).then(r.bind(r,881580))];case 1:e=a.sent(),n=e.default;return[2,function(e){return(0,t.jsx)(n,z(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))));t.forEach((function(n){W(e,n,r[n])}))}return e}({},e),{channel:c}))}]}}))})))},children:[(0,t.jsxs)("div",{className:w().left,children:[(0,t.jsxs)(s.X6q,{
className:w().threadNameLine,variant:"heading-md/semibold",children:[(0,t.jsx)("span",{className:w().threadName,children:c.name}),u&&null!=d?(0,t.jsx)("span",{className:w().parentName,children:"#".concat(d.name)}):null]}),I(c)]}),(0,t.jsx)(U,{channel:c})]})}));function U(e){var n,r,s=e.channel,i=(0,o.e7)([f.Z],(function(){return null!==(n=f.Z.getMemberIdsPreview(s.id))&&void 0!==n?n:[]})),l=(0,o.e7)([f.Z],(function(){return null!==(r=f.Z.getMemberCount(s.id))&&void 0!==r?r:0})),h=(0,o.Wu)([c.default],(function(){return i.map((function(e){return c.default.getUser(e)}))}));a.useEffect((function(){i.filter((function(e,n){return null==h[n]})).forEach((function(e){u.Z.requestMember(s.guild_id,e)}))}),[]);return 0===i.length?null:(0,t.jsx)(d.Z,{className:w().facepile,showDefaultAvatarsForNullUsers:!0,guildId:s.guild_id,users:h,count:l,max:k.yX})}}}]);
//# sourceMappingURL=7fd4d41be88ad996eb0c.js.map