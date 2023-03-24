"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[3288],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return s},MDXProvider:function(){return m},mdx:function(){return b},useMDXComponents:function(){return u},withMDXComponents:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){return function(t){var n=u(t.components);return r.createElement(e,a({},t,{components:n}))}},u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},91305:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],c={title:"list-capabilities",category:"Commands"},l=void 0,s={unversionedId:"cmd/list-capabilities",id:"cmd/list-capabilities",title:"list-capabilities",description:"Since 3.8.",source:"@site/docs/cmd/list-capabilities.md",sourceDirName:"cmd",slug:"/cmd/list-capabilities",permalink:"/watchman/docs/cmd/list-capabilities",draft:!1,editUrl:"https://github.com/facebook/watchman/tree/main/website/docs/cmd/list-capabilities.md",tags:[],version:"current",frontMatter:{title:"list-capabilities",category:"Commands"},sidebar:"tutorialSidebar",previous:{title:"get-sockname",permalink:"/watchman/docs/cmd/get-sockname"},next:{title:"log-level",permalink:"/watchman/docs/cmd/log-level"}},p={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.mdx)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"Since 3.8.")),(0,a.mdx)("p",null,"This command returns the full list of supported ",(0,a.mdx)("a",{parentName:"p",href:"/watchman/docs/capabilities"},"capabilities"),"\noffered by the watchman server. The intention is that client applications will\nuse the ",(0,a.mdx)("a",{parentName:"p",href:"/watchman/docs/cmd/version"},"expanded version command")," to check compatibility rather\nthan interrogating the full list."),(0,a.mdx)("p",null,"Here's some example output. The actual capabilities list is in unspecified order\nand is much longer than is reproduced here:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},'$ watchman list-capabilities\n{\n    "version": "3.8.0",\n    "capabilities": [\n        "field-mode",\n        "term-allof",\n        "cmd-trigger"\n    ]\n}\n')))}d.isMDXComponent=!0}}]);