"use strict";(self.webpackChunkcodeyourfuture_syllabus=self.webpackChunkcodeyourfuture_syllabus||[]).push([[5020],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(t),p=r,f=h["".concat(l,".").concat(p)]||h[p]||d[p]||a;return t?o.createElement(f,i(i({ref:n},u),{},{components:t})):o.createElement(f,i({ref:n},u))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},39092:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return d},default:function(){return p}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),i=["components"],s={id:"this-keyword",title:"The 'this' Keyword",sidebar_label:"The 'this' Keyword"},l=void 0,c={unversionedId:"js-core-3/other/this-keyword",id:"js-core-3/other/this-keyword",title:"The 'this' Keyword",description:"One aspect of JavaScript that often leads to confusion is the keyword this. Its value depends on where it is used and how that function is called.",source:"@site/docs/js-core-3/other/this-keyword.md",sourceDirName:"js-core-3/other",slug:"/js-core-3/other/this-keyword",permalink:"/js-core-3/other/this-keyword",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/js-core-3/other/this-keyword.md",tags:[],version:"current",frontMatter:{id:"this-keyword",title:"The 'this' Keyword",sidebar_label:"The 'this' Keyword"},sidebar:"JavaScriptCore3",previous:{title:"JavaScript Classes",permalink:"/js-core-3/other/javascript-classes"}},u={},d=[{value:"<code>this</code> in a constructor",id:"this-in-a-constructor",level:3},{value:"<code>this</code> in a method",id:"this-in-a-method",level:3},{value:"<code>this</code> in a function",id:"this-in-a-function",level:3},{value:"methods called as functions",id:"methods-called-as-functions",level:3},{value:"arrow functions to the rescue",id:"arrow-functions-to-the-rescue",level:3},{value:"Exercises",id:"exercises",level:3}],h={toc:d};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"One aspect of JavaScript that often leads to confusion is the keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"this"),". Its value depends on where it is used and how that function is called."),(0,a.kt)("h3",{id:"this-in-a-constructor"},(0,a.kt)("inlineCode",{parentName:"h3"},"this")," in a constructor"),(0,a.kt)("p",null,"We saw previously that a ",(0,a.kt)("inlineCode",{parentName:"p"},"constructor")," in a ",(0,a.kt)("inlineCode",{parentName:"p"},"class")," is a special method which is used to instantiate on a new object. When used inside a ",(0,a.kt)("inlineCode",{parentName:"p"},"constructor"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," refers to the new object being created."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'class Person {\n  constructor() {\n    console.log(this);\n    this.name = "Mike";\n  }\n}\n\nconst person = new Person();\n')),(0,a.kt)("h3",{id:"this-in-a-method"},(0,a.kt)("inlineCode",{parentName:"h3"},"this")," in a method"),(0,a.kt)("p",null,"A method is a function that belongs to an object. That object can be either be created as an object literal or using a class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'class Person {\n  constructor() {\n    this.name = "Mike";\n  }\n\n  sayHi() {\n    console.log(`Hi, ${this.name}`);\n  }\n}\n\nconst person = new Person();\nperson.sayHi();\n')),(0,a.kt)("p",null,"In both above example ",(0,a.kt)("inlineCode",{parentName:"p"},"sayHi")," is a method which belong to ",(0,a.kt)("inlineCode",{parentName:"p"},"person"),"."),(0,a.kt)("p",null,"When a method is called, the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," inside of that method will be the object that the method belongs to. In the example above that will be ",(0,a.kt)("inlineCode",{parentName:"p"},"person"),"."),(0,a.kt)("h3",{id:"this-in-a-function"},(0,a.kt)("inlineCode",{parentName:"h3"},"this")," in a function"),(0,a.kt)("p",null,"The value of ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," in a standalone function if it's executed in the browser will be the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," object. If it is executed in Node it will be the ",(0,a.kt)("inlineCode",{parentName:"p"},"global")," object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function sayHey() {\n  console.log(this);\n}\n\nsayHey();\n")),(0,a.kt)("h3",{id:"methods-called-as-functions"},"methods called as functions"),(0,a.kt)("p",null,"We can take a method and assign it to a variable. Essentially that turns it from being a method into a standalone function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class Person {\n  constructor() {\n    this.name = \"Mike\";\n  }\n\n  sayHi() {\n    console.log(`Hi, ${this.name}`);\n  }\n}\n\nconst person = new Person();\nconst sayHi = person.sayHi;\n\nsayHi(); // TypeError: Cannot read property 'name' of undefined\n")),(0,a.kt)("p",null,"In above example, we are executing ",(0,a.kt)("inlineCode",{parentName:"p"},"sayHi")," as a function, not method. As a result we no longer have access to the object the method belongs to. That results in the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," being lost and instead of being ",(0,a.kt)("inlineCode",{parentName:"p"},"person")," it is now ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,a.kt)("p",null,"That can be a problem. Fortunately we can fix it"),(0,a.kt)("h3",{id:"arrow-functions-to-the-rescue"},"arrow functions to the rescue"),(0,a.kt)("p",null,"Latest versions of JavaScript allow us to declare methods in classes using arrow functions. When an arrow function is used, the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," inside it is bound to the object it belongs to. That allows us to call methods as functions without losing the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," inside it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'class Person {\n  constructor() {\n    this.name = "Mike";\n  }\n\n  sayHi = () => {\n    console.log(`Hi, ${this.name}`);\n  };\n}\n\nconst person = new Person();\nconst sayHi = person.sayHi;\n\nsayHi(); // Hi, Mike\n')),(0,a.kt)("p",null,"This behaviour will become important in the near future, when we will need to start passing methods to be called other parts of our code."),(0,a.kt)("h3",{id:"exercises"},"Exercises"),(0,a.kt)("p",null,"In break out groups solve the following exercises. Only run code to verify answers. Try to understand what each line of code is doing and the effect it has."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Exercise 1\nclass Car {\n  goFaster() {\n    this.speed = 100; // what is the value of this code below is run\n  }\n}\n\nconst ferrari = new Car();\nferrari.goFaster();\n\n// Exercise 2\nclass Car {\n  goFaster() {\n    this.speed = 100; // what is the value of this code below is run\n  }\n}\n\nconst honda = new Car();\nconst quicker = honda.goFaster;\n\nquicker();\n\n// Exercise 3\n\n// How can we fix the bug above? Why do have a problem and how does your solution fix it?\n")))}p.isMDXComponent=!0}}]);