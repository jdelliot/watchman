"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[4195],{95789:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(67294);function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function l(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}var s=n(87190),c=n(20625),o=n.n(c),i=n(39960),h=n(52263),u="heroBanner_qdFl",m="logo_Ukns",f="buttons_AeoN",d="getStarted_D36F",g="introduction_mtGB",w=n.p+"assets/images/logo-9d8013e528457ec0ab7bc9ebfe37f796.png";function E(){var e=(0,h.default)().siteConfig;return a.createElement("header",{className:l("hero hero--primary",u)},a.createElement("div",{className:"container"},a.createElement("img",{src:w,alt:"Watchman logo",className:m}),a.createElement("h1",{className:"hero__title"},e.title),a.createElement("p",{className:"hero__subtitle"},e.tagline),a.createElement("p",null,"Watches files and records, or triggers actions, when they change."),a.createElement("div",{className:f},a.createElement(i.default,{className:l("button button--lg",d),to:"/docs/install"},"Get Started"))))}function b(){var e=(0,h.default)().siteConfig;return a.createElement(s.Z,{title:e.title+" - "+e.tagline,description:"Watches files and records, or triggers actions, when they change."},a.createElement(E,null),a.createElement("main",null,a.createElement("section",{className:g},a.createElement("p",null,"Watchman exists to watch files and record when they change. It can also trigger actions (such as rebuilding assets) when matching files change."),a.createElement("h2",null,"Concepts"),a.createElement("ul",null,a.createElement("li",null,"Watchman can recursively watch one or more directory trees (we call them roots)."),a.createElement("li",null,"Watchman does not follow symlinks. It knows they exist, but they show up the same as any other file in its reporting."),a.createElement("li",null,"Watchman waits for a root to settle down before it will start to trigger notifications or command execution."),a.createElement("li",null,"Watchman is conservative, preferring to err on the side of caution; it considers files to be freshly changed when you start to watch them or when it is unsure."),a.createElement("li",null,"You can query a root for file changes since you last checked, or the current state of the tree"),a.createElement("li",null,"You can subscribe to file changes that occur in a root")),a.createElement("h2",null,"Quickstart"),a.createElement("p",null,"These two lines establish a watch on a source directory and then set up a trigger named buildme that will run a tool named"," ",a.createElement("code",null,"minify-css"),"whenever a CSS file is changed. The tool will be passed a list of the changed filenames."),a.createElement(o(),{language:"bash"},"$ watchman watch ~/src\n# the single quotes around '*.css' are important!\n$ watchman -- trigger ~/src buildme '*.css' -- minify-css"),a.createElement("p",null,"The output for buildme will land in the Watchman log file unless you send it somewhere else."))))}}}]);