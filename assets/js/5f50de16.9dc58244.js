"use strict";(self.webpackChunkcodeyourfuture_syllabus=self.webpackChunkcodeyourfuture_syllabus||[]).push([[5894],{3905:function(t,e,A){A.d(e,{Zo:function(){return g},kt:function(){return c}});var n=A(67294);function i(t,e,A){return e in t?Object.defineProperty(t,e,{value:A,enumerable:!0,configurable:!0,writable:!0}):t[e]=A,t}function a(t,e){var A=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),A.push.apply(A,n)}return A}function l(t){for(var e=1;e<arguments.length;e++){var A=null!=arguments[e]?arguments[e]:{};e%2?a(Object(A),!0).forEach((function(e){i(t,e,A[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(A)):a(Object(A)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(A,e))}))}return t}function r(t,e){if(null==t)return{};var A,n,i=function(t,e){if(null==t)return{};var A,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)A=a[n],e.indexOf(A)>=0||(i[A]=t[A]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)A=a[n],e.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(t,A)&&(i[A]=t[A])}return i}var o=n.createContext({}),u=function(t){var e=n.useContext(o),A=e;return t&&(A="function"==typeof t?t(e):l(l({},e),t)),A},g=function(t){var e=u(t.components);return n.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var A=t.components,i=t.mdxType,a=t.originalType,o=t.parentName,g=r(t,["components","mdxType","originalType","parentName"]),h=u(A),c=i,m=h["".concat(o,".").concat(c)]||h[c]||s[c]||a;return A?n.createElement(m,l(l({ref:e},g),{},{components:A})):n.createElement(m,l({ref:e},g))}));function c(t,e){var A=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=A.length,l=new Array(a);l[0]=h;var r={};for(var o in e)hasOwnProperty.call(e,o)&&(r[o]=e[o]);r.originalType=t,r.mdxType="string"==typeof t?t:i,l[1]=r;for(var u=2;u<a;u++)l[u]=A[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,A)}h.displayName="MDXCreateElement"},19113:function(t,e,A){A.r(e),A.d(e,{assets:function(){return g},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return s}});var n=A(87462),i=A(63366),a=(A(67294),A(3905)),l=["components"],r={id:"cheatsheet-cli",title:"From Github Desktop To CLI",sidebar_label:"Desktop to CLI Cheatsheet"},o=void 0,u={unversionedId:"git/desktop/cheatsheet-cli",id:"git/desktop/cheatsheet-cli",title:"From Github Desktop To CLI",description:"Everything that you're going to be doing using Git CLI you can also do using Github Desktop.",source:"@site/docs/git/desktop/from-desktop-to-cli-cheatsheet.md",sourceDirName:"git/desktop",slug:"/git/desktop/cheatsheet-cli",permalink:"/git/desktop/cheatsheet-cli",draft:!1,editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/git/desktop/from-desktop-to-cli-cheatsheet.md",tags:[],version:"current",frontMatter:{id:"cheatsheet-cli",title:"From Github Desktop To CLI",sidebar_label:"Desktop to CLI Cheatsheet"},sidebar:"Git",previous:{title:"Github Desktop Cheatsheet",permalink:"/git/desktop/cheatsheet"},next:{title:"Lesson",permalink:"/git/desktop/lesson"}},g={},s=[{value:"Viewing Changed Files",id:"viewing-changed-files",level:3},{value:"Including Files to Commit",id:"including-files-to-commit",level:3},{value:"Committing Changes",id:"committing-changes",level:3},{value:"Pushing Changes to Github",id:"pushing-changes-to-github",level:3},{value:"Fetching from Github",id:"fetching-from-github",level:3},{value:"Pulling from Github",id:"pulling-from-github",level:3}],h={toc:s};function c(t){var e=t.components,r=(0,i.Z)(t,l);return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Everything that you're going to be doing using Git CLI you can also do using Github Desktop."),(0,a.kt)("p",null,"In this page, you'll comparisons of how to complete command tasks on both Github Desktop and Git CLI."),(0,a.kt)("h3",{id:"viewing-changed-files"},"Viewing Changed Files"),(0,a.kt)("p",null,"To view the files that you have changed you can use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git status\n")),(0,a.kt)("p",null,"This will show a list of files that have changed since the last time that you committed."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Github Desktop"),(0,a.kt)("th",{parentName:"tr",align:null},"Git CLI"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"Viewing changed files in Github Desktop",src:A(64545).Z,width:"538",height:"407"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"Viewing changed files in Git CLI",src:A(17555).Z,width:"699",height:"392"}))))),(0,a.kt)("h3",{id:"including-files-to-commit"},"Including Files to Commit"),(0,a.kt)("p",null,"One key difference between Github Desktop and Git CLI is that you need to set which files will be committed to your repository. You can add files to be committed by using"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git add .\n")),(0,a.kt)("p",null,"This command will add ",(0,a.kt)("strong",{parentName:"p"},"every")," file you have changed to be ready to commit"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Github Desktop"),(0,a.kt)("th",{parentName:"tr",align:null},"Git CLI"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"Adding files to commit",src:A(90558).Z,width:"628",height:"351"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"Adding files to commit with cli",src:A(7670).Z,width:"700",height:"550"}))))),(0,a.kt)("h3",{id:"committing-changes"},"Committing Changes"),(0,a.kt)("p",null,"Committing changes to your repository can be done by using this command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'git commit -m "YOUR MESSAGE HERE"\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"-m")," means that after you are going to write your commit message. Make sure to put your commit message in quotes! You can press enter to add new lines in your message, too."),(0,a.kt)("p",null,"Some characters are treated specially in the terminal, and we can tell the terminal not to treat them specially by ",(0,a.kt)("em",{parentName:"p"},"escaping")," them with a backslash. For example, if you want to use a quote character inside your message, you need to escape it, otherwise the terminal will think your quote is the end of the message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'git commit -m "Use \\"s instead of \'s"\n')),(0,a.kt)("p",null,"Here's how committing on Github Desktop and Git CLI is different"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Github Desktop"),(0,a.kt)("th",{parentName:"tr",align:null},"Git CLI"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"Commiting Changing with Github Desktop",src:A(54259).Z,width:"539",height:"249"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"Commit files with Git CLI",src:A(86674).Z,width:"700",height:"550"}))))),(0,a.kt)("h3",{id:"pushing-changes-to-github"},"Pushing Changes to Github"),(0,a.kt)("p",null,"Finally, pushing your changes to Github can be completed by using"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git push\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Github Desktop"),(0,a.kt)("th",{parentName:"tr",align:null},"Git CLI"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"Pushing files to Github",src:A(25904).Z,width:"391",height:"146"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"Pushing files using Git CLI",src:A(87806).Z,width:"700",height:"550"}))))),(0,a.kt)("h3",{id:"fetching-from-github"},"Fetching from Github"),(0,a.kt)("p",null,"To check if there have been any changes on Github you can use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git fetch\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Github Desktop"),(0,a.kt)("th",{parentName:"tr",align:null},"Git CLI"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"Fetching on Github Desktop",src:A(30116).Z,width:"620",height:"166"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"Fetching on Git CLI",src:A(35381).Z,width:"264",height:"49"}))))),(0,a.kt)("h3",{id:"pulling-from-github"},"Pulling from Github"),(0,a.kt)("p",null,"To pull any changes from Github you can use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git pull\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Github Desktop"),(0,a.kt)("th",{parentName:"tr",align:null},"Git CLI"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"Pulling changes from Github",src:A(83076).Z,width:"390",height:"150"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"Fetching on Git CLI",src:A(90616).Z,width:"700",height:"550"}))))))}c.isMDXComponent=!0},7670:function(t,e,A){e.Z=A.p+"assets/images/addingfiles-cli-d578d3b65d584f7fe95f676cc02f6b9b.gif"},90558:function(t,e,A){e.Z=A.p+"assets/images/addingfiles-be34a76ac7cef0fe24ac65bc69c862a3.gif"},64545:function(t,e,A){e.Z=A.p+"assets/images/changed-dc8dd3144d08e18c4b27d5f76a54f7b4.png"},17555:function(t,e,A){e.Z=A.p+"assets/images/changing-cli-d6e9c2cdd0b837a7478892c0065371b0.png"},86674:function(t,e,A){e.Z=A.p+"assets/images/commit-cli-4efd35c38c666e49d657b4c574c3a272.gif"},54259:function(t,e,A){e.Z=A.p+"assets/images/commit-0c91850091a4b078be78e6e378e4df66.png"},35381:function(t,e){e.Z="data:image/png;base64,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"},30116:function(t,e){e.Z="data:image/png;base64,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"},90616:function(t,e,A){e.Z=A.p+"assets/images/pull-cli-cd0a0d5bb2e0a43d91bf0a780e592b86.gif"},83076:function(t,e){e.Z="data:image/png;base64,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"},87806:function(t,e,A){e.Z=A.p+"assets/images/push-cli-589c92439557ab4331e5f08a5daea6b8.gif"},25904:function(t,e){e.Z="data:image/png;base64,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"}}]);