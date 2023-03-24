"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[9485],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return s},MDXProvider:function(){return m},mdx:function(){return h},useMDXComponents:function(){return d},withMDXComponents:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){return function(t){var n=d(t.components);return r.createElement(e,o({},t,{components:n}))}},d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},62845:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),c=["components"],i={title:"watch-del",category:"Commands"},l=void 0,s={unversionedId:"cmd/watch-del",id:"cmd/watch-del",title:"watch-del",description:"Removes a watch and any associated triggers.",source:"@site/docs/cmd/watch-del.md",sourceDirName:"cmd",slug:"/cmd/watch-del",permalink:"/watchman/docs/cmd/watch-del",draft:!1,editUrl:"https://github.com/facebook/watchman/tree/main/website/docs/cmd/watch-del.md",tags:[],version:"current",frontMatter:{title:"watch-del",category:"Commands"},sidebar:"tutorialSidebar",previous:{title:"watch-del-all",permalink:"/watchman/docs/cmd/watch-del-all"},next:{title:"watch-list",permalink:"/watchman/docs/cmd/watch-list"}},u={},d=[],m={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.mdx)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Removes a watch and any associated triggers."),(0,o.mdx)("p",null,"From the command line:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"$ watchman watch-del /path/to/dir\n")),(0,o.mdx)("p",null,"JSON:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'["watch-del", "/path/to/dir"]\n')),(0,o.mdx)("p",null,"The removed watch and any associated triggers will be removed from the state\nfile and will not be automatically watched if/when watchman is restarted."),(0,o.mdx)("p",null,"However, if ",(0,o.mdx)("inlineCode",{parentName:"p"},"--no-save-state")," was used to start the watchman service, the watch\nand triggers will be deleted from the running process but no changes will be\nmade to the state file. If this same directory is listed in the state file, the\nwatch will be re-established if/when the service is restarted."))}p.isMDXComponent=!0}}]);