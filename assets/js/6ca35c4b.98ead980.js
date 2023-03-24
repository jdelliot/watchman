"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[2452],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return d},MDXProvider:function(){return c},mdx:function(){return h},useMDXComponents:function(){return p},withMDXComponents:function(){return l}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),l=function(e){return function(n){var t=p(n.components);return r.createElement(e,s({},n,{components:t}))}},p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),l=p(t),c=i,f=l["".concat(a,".").concat(c)]||l[c]||m[c]||s;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=f;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var d=2;d<s;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},48846:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var r=t(83117),i=t(80102),s=(t(67294),t(3905)),a=["components"],o={title:"flush-subscriptions",category:"Commands"},u=void 0,d={unversionedId:"cmd/flush-subscriptions",id:"cmd/flush-subscriptions",title:"flush-subscriptions",description:"Since 4.8.",source:"@site/docs/cmd/flush-subscriptions.md",sourceDirName:"cmd",slug:"/cmd/flush-subscriptions",permalink:"/watchman/docs/cmd/flush-subscriptions",draft:!1,editUrl:"https://github.com/facebook/watchman/tree/main/website/docs/cmd/flush-subscriptions.md",tags:[],version:"current",frontMatter:{title:"flush-subscriptions",category:"Commands"},sidebar:"tutorialSidebar",previous:{title:"find",permalink:"/watchman/docs/cmd/find"},next:{title:"get-config",permalink:"/watchman/docs/cmd/get-config"}},l={},p=[{value:"Arguments",id:"arguments",level:3},{value:"Examples",id:"examples",level:3},{value:"Deferred and Dropped Updates",id:"deferred-and-dropped-updates",level:3},{value:"Notes",id:"notes",level:3}],c={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,s.mdx)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"Since 4.8.")),(0,s.mdx)("p",null,"Flushes buffered updates to subscriptions associated with the current session,\nguaranteeing that they are up-to-date as of the time Watchman received the\n",(0,s.mdx)("inlineCode",{parentName:"p"},"flush-subscriptions")," command."),(0,s.mdx)("p",null,"Subscription updates will be interleaved between the ",(0,s.mdx)("inlineCode",{parentName:"p"},"flush-subscriptions"),"\nrequest and its response. Once the response has been received, subscriptions are\nup-to-date."),(0,s.mdx)("p",null,"This command is designed to be used by interactive programs that have a\nbackground process or daemon maintaining a subscription to Watchman. The typical\npattern is for interactive commands to be forwarded to the process, which calls\n",(0,s.mdx)("inlineCode",{parentName:"p"},"flush-subscriptions")," and then processes any subscription updates it received.\nThis pattern eliminates races with files changed right before the interactive\ncommand."),(0,s.mdx)("h3",{id:"arguments"},"Arguments"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"sync_timeout"),": Required. The number of milliseconds to wait to observe a\nsynchronization cookie. The synchronization cookie is created at the start of\nthe ",(0,s.mdx)("inlineCode",{parentName:"li"},"flush-subscriptions")," call, and once the cookie is observed, means that\nthe OS has sent watchman all the updates till at least the start of the\n",(0,s.mdx)("inlineCode",{parentName:"li"},"flush-subscriptions")," call."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"subscriptions"),": Optional. Which subscriptions to flush. By default this\nflushes all subscriptions associated with this project on this session.")),(0,s.mdx)("h3",{id:"examples"},"Examples"),(0,s.mdx)("p",null,"Assuming subscriptions ",(0,s.mdx)("inlineCode",{parentName:"p"},"sub1"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"sub2")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"sub3")," have been established on this\nsession, if ",(0,s.mdx)("inlineCode",{parentName:"p"},"sub1")," has updates pending, ",(0,s.mdx)("inlineCode",{parentName:"p"},"sub2")," is up-to-date and ",(0,s.mdx)("inlineCode",{parentName:"p"},"sub3")," is\ncurrently dropping updates:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'["flush-subscriptions", "/path/to/root", {"sync_timeout": 1000}]\n')),(0,s.mdx)("p",null,"In response, Watchman will first emit a unilateral subscription PDU for ",(0,s.mdx)("inlineCode",{parentName:"p"},"sub1"),",\nthen respond with"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "clock": "c:1446410081:18462:7:135",\n  "synced": ["sub1"],\n  "no_sync_needed": ["sub2"],\n  "dropped": ["sub3"]\n}\n')),(0,s.mdx)("p",null,"To flush updates for some but not all subscriptions associated with this\nsession:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'["flush-subscriptions", "/path/to/root",\n  {\n    "sync_timeout": 1000,\n    "subscriptions": ["sub1", "sub2"]\n  }\n]\n')),(0,s.mdx)("h3",{id:"deferred-and-dropped-updates"},"Deferred and Dropped Updates"),(0,s.mdx)("p",null,"Subscriptions will typically buffer individual updates until a ",(0,s.mdx)("em",{parentName:"p"},"settle")," period\nhas expired. ",(0,s.mdx)("inlineCode",{parentName:"p"},"flush-subscriptions")," will force those updates through immediately."),(0,s.mdx)("p",null,"Subscriptions currently deferring updates because of ",(0,s.mdx)("inlineCode",{parentName:"p"},"defer")," or ",(0,s.mdx)("inlineCode",{parentName:"p"},"defer_vcs")," are\nupdated immediately, without waiting for the ",(0,s.mdx)("inlineCode",{parentName:"p"},"defer")," or ",(0,s.mdx)("inlineCode",{parentName:"p"},"defer_vcs")," to end."),(0,s.mdx)("p",null,"Subscriptions currently dropping updates with a ",(0,s.mdx)("inlineCode",{parentName:"p"},"drop")," state will not get any\nupdates. Their names will be returned in the ",(0,s.mdx)("inlineCode",{parentName:"p"},"dropped")," field."),(0,s.mdx)("h3",{id:"notes"},"Notes"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("inlineCode",{parentName:"li"},"flush-subscriptions")," can only be used to flush subscriptions associated with\nthe current session."),(0,s.mdx)("li",{parentName:"ul"},"A single session can be subscribed to updates from multiple projects at the\nsame time. However, ",(0,s.mdx)("inlineCode",{parentName:"li"},"flush-subscriptions")," can only flush updates for one\nproject at a time.")))}m.isMDXComponent=!0}}]);