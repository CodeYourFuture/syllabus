"use strict";(self.webpackChunkcodeyourfuture_syllabus=self.webpackChunkcodeyourfuture_syllabus||[]).push([[9972],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||n;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<n;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84180:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return h}});var o=r(87462),a=r(63366),n=(r(67294),r(3905)),i=["components"],l={id:"readme",title:"TV Show Project",sidebar_label:"Overview"},s=void 0,u={unversionedId:"js-core-3/tv-show-dom-project/readme",id:"js-core-3/tv-show-dom-project/readme",title:"TV Show Project",description:"Overview",source:"@site/docs/js-core-3/tv-show-dom-project/readme.md",sourceDirName:"js-core-3/tv-show-dom-project",slug:"/js-core-3/tv-show-dom-project/",permalink:"/js-core-3/tv-show-dom-project/",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/js-core-3/tv-show-dom-project/readme.md",tags:[],version:"current",frontMatter:{id:"readme",title:"TV Show Project",sidebar_label:"Overview"},sidebar:"JavaScriptCore3",previous:{title:"Instructor Notes",permalink:"/js-core-3/week-3/instructors"},next:{title:"Getting Started",permalink:"/js-core-3/tv-show-dom-project/getting-started"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Where do I get the episode data from?",id:"where-do-i-get-the-episode-data-from",level:2},{value:"Rules about the episode data",id:"rules-about-the-episode-data",level:2},{value:"Rules about technology",id:"rules-about-technology",level:2},{value:"What are the requirements for the project?",id:"what-are-the-requirements-for-the-project",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"How to get a code review",id:"how-to-get-a-code-review",level:2}],d={toc:p};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"You must make a web app using HTML, CSS, and JavaScript which shows details of all of the episodes of a TV show."),(0,n.kt)("p",null,"The episode data is provided for you as an array of objects."),(0,n.kt)("p",null,"The page of episodes should be generated using JavaScript (which will read the properties of each episode object)."),(0,n.kt)("p",null,"There is an ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/playlist?list=PL_uDxFTCuec_mNi3BgoUSd_hZbb2NWUWA"},'"intro" video')," which shows ",(0,n.kt)("strong",{parentName:"p"},"roughly")," what you will build. However, note that these do ",(0,n.kt)("strong",{parentName:"p"},"not")," replace these documents you are now reading."),(0,n.kt)("h2",{id:"where-do-i-get-the-episode-data-from"},"Where do I get the episode data from?"),(0,n.kt)("p",null,"For the simple versions of this project, you will get the episode data by calling a provided function ",(0,n.kt)("inlineCode",{parentName:"p"},"getAllEpisodes()"),". This will return you an array of objects, each of which represents an episode."),(0,n.kt)("p",null,"(In later weeks you may be challenged to have your app dynamically ",(0,n.kt)("inlineCode",{parentName:"p"},"fetch")," the data from the TV Maze API.)"),(0,n.kt)("p",null,"In both cases, here's an example of one episode from the list:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'{\n    id: 4952,\n    url:\n      "http://www.tvmaze.com/episodes/4952/game-of-thrones-1x01-winter-is-coming",\n    name: "Winter is Coming",\n    season: 1,\n    number: 1,\n    airdate: "2011-04-17",\n    airtime: "21:00",\n    airstamp: "2011-04-18T01:00:00+00:00",\n    runtime: 60,\n    image: {\n      medium:\n        "http://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg",\n      original:\n        "http://static.tvmaze.com/uploads/images/original_untouched/1/2668.jpg"\n    },\n    summary:\n      "<p>Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King\'s Hand. Eddard reluctantly agrees after learning of a possible threat to the King\'s life. Eddard\'s bastard son Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father\'s throne, usurped by Robert, by selling his sister in marriage.</p>",\n    _links: {\n      self: {\n        href: "http://api.tvmaze.com/episodes/4952"\n      }\n    }\n  }\n')),(0,n.kt)("h2",{id:"rules-about-the-episode-data"},"Rules about the episode data"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You MUST NOT edit the static episode data. If you find that the data is unsuitable (e.g. fields are missing, or have unwanted characters), you should improve your own code so that it can deal with such issues when it ",(0,n.kt)("strong",{parentName:"li"},"runs"),".")),(0,n.kt)("h2",{id:"rules-about-technology"},"Rules about technology"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You should not use React, Vue, JQuery or other libraries. Why? This project is specifically for practicing the ",(0,n.kt)("strong",{parentName:"p"},"built-in")," DOM-manipulation functions you learned about in JS2.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can use bootstrap CSS but NOT bootstrap JS. (We recommend that you do NOT use bootstrap CSS.)"))),(0,n.kt)("h2",{id:"what-are-the-requirements-for-the-project"},"What are the requirements for the project?"),(0,n.kt)("p",null,"This project challenge is split into various levels of difficulty. You should challenge yourself to complete as many levels as possible, in order."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/js-core-3/tv-show-dom-project/level-100"},"level 100")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/js-core-3/tv-show-dom-project/level-200"},"level 200")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/js-core-3/tv-show-dom-project/level-300"},"level 300")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/js-core-3/tv-show-dom-project/level-350"},"level 350")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/js-core-3/tv-show-dom-project/level-400"},"level 400")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/js-core-3/tv-show-dom-project/level-500"},"level 500")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/js-core-3/tv-show-dom-project/level-999"},"level 999 (further work)"))),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("p",null,"Follow the instructions in ",(0,n.kt)("a",{parentName:"p",href:"/js-core-3/tv-show-dom-project/getting-started"},"getting-started.md")),(0,n.kt)("h2",{id:"how-to-get-a-code-review"},"How to get a code review"),(0,n.kt)("p",null,"You will be instructed when to ask for a code review. When it's time to do so, follow the instructions in ",(0,n.kt)("a",{parentName:"p",href:"/js-core-3/tv-show-dom-project/code-review"},"code-review.md")))}h.isMDXComponent=!0}}]);