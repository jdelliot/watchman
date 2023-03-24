"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[8214],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return p},MDXProvider:function(){return u},mdx:function(){return y},useMDXComponents:function(){return l},withMDXComponents:function(){return s}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){return function(n){var t=l(n.components);return r.createElement(e,o({},n,{components:t}))}},l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),s=l(t),u=a,f=s["".concat(i,".").concat(u)]||s[u]||d[u]||o;return t?r.createElement(f,c(c({ref:n},p),{},{components:t})):r.createElement(f,c({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var m in n)hasOwnProperty.call(n,m)&&(c[m]=n[m]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},83707:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),i=["components"],c={title:"name & iname",category:"Expression Terms"},m=void 0,p={unversionedId:"expr/name",id:"expr/name",title:"name & iname",description:"The name expression performs exact matches against file names. By default it",source:"@site/docs/expr/name.md",sourceDirName:"expr",slug:"/expr/name",permalink:"/watchman/docs/expr/name",draft:!1,editUrl:"https://github.com/facebook/watchman/tree/main/website/docs/expr/name.md",tags:[],version:"current",frontMatter:{title:"name & iname",category:"Expression Terms"},sidebar:"tutorialSidebar",previous:{title:"match & imatch",permalink:"/watchman/docs/expr/match"},next:{title:"not",permalink:"/watchman/docs/expr/not"}},s={},l=[],u={toc:l};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"name")," expression performs exact matches against file names. By default it\nis scoped to the basename of the file:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'["name", "Makefile"]\n')),(0,o.mdx)("p",null,"You may specify multiple names to match against by setting the second argument\nto an array:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'["name", ["foo.txt", "Makefile"]]\n')),(0,o.mdx)("p",null,"This second form can be accelerated and is preferred over an ",(0,o.mdx)("inlineCode",{parentName:"p"},"anyof"),"\nconstruction."),(0,o.mdx)("p",null,"You may change the scope of the match via the optional third argument:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'["name", "path/to/file.txt", "wholename"]\n["name", ["path/to/one", "path/to/two"], "wholename"]\n')),(0,o.mdx)("p",null,"Finally, you may specify case insensitive evaluation by using ",(0,o.mdx)("inlineCode",{parentName:"p"},"iname")," instead of\n",(0,o.mdx)("inlineCode",{parentName:"p"},"name"),"."),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Since 2.9.9.")),(0,o.mdx)("p",null,"Starting in version 2.9.9, on macOS systems where the watched root is a case\ninsensitive filesystem (this is the common case for macOS), ",(0,o.mdx)("inlineCode",{parentName:"p"},"name")," is equivalent\nto ",(0,o.mdx)("inlineCode",{parentName:"p"},"iname"),"."),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Since 4.7.")),(0,o.mdx)("p",null,"You can override the case sensitivity of all name matching operations used in\nthe query by setting the ",(0,o.mdx)("inlineCode",{parentName:"p"},"case_sensitive")," field in your query."))}d.isMDXComponent=!0}}]);