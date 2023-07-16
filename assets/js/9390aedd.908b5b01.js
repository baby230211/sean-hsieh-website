"use strict";(self.webpackChunkseanhsieh_website=self.webpackChunkseanhsieh_website||[]).push([[696],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,m=u["".concat(p,".").concat(d)]||u[d]||h[d]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6128:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(1163),a=(t(9496),t(9613));const i={sidebar_position:1},o="Manage Type in Typescript",s={unversionedId:"typescript/manage-union-type",id:"typescript/manage-union-type",title:"Manage Type in Typescript",description:"Use As Const",source:"@site/docs/typescript/manage-union-type.md",sourceDirName:"typescript",slug:"/typescript/manage-union-type",permalink:"/sean-hsieh-website/typescript/manage-union-type",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/sean-hsieh-website/tutorial-extras/translate-your-site"}},p={},l=[{value:"Use As Const",id:"use-as-const",level:2},{value:"Workaround on this type error",id:"workaround-on-this-type-error",level:2},{value:"Exhaustiveness checking",id:"exhaustiveness-checking",level:2}],c={toc:l},u="wrapper";function h(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"manage-type-in-typescript"},"Manage Type in Typescript"),(0,a.kt)("h2",{id:"use-as-const"},"Use As Const"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="manageUnion.ts"',title:'"manageUnion.ts"'},'declare function handleRequest(url: string, method: "GET" | "POST"): void;\n\n\nconst req = { url: "https://example.com", method: "GET"};\nhandleRequest(req.url, req.method);\n// This will error\nArgument of type \'string\' is not assignable to parameter of type \'"GET" | "POST"\'.\n')),(0,a.kt)("h2",{id:"workaround-on-this-type-error"},"Workaround on this type error"),(0,a.kt)("p",null,"The example above req.method inferred to be ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", not ",(0,a.kt)("inlineCode",{parentName:"p"},"GET"),". Because code can be evaluated between the creation of req and the call of ",(0,a.kt)("inlineCode",{parentName:"p"},"handleRequest")," which could assign a new string like ",(0,a.kt)("inlineCode",{parentName:"p"},"GUESS")," to req.method.\nYou can update your code in two ways."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You can change the inference by adding a type assertion in either location:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// Change 1:\nconst req = { url: "https://example.com", method: "GET" as "GET" };\n// Change 2\nhandleRequest(req.url, req.method as "GET");\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"You can use as const to convert the entire object to be type literals")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const req = { url: "https://example.com", method: "GET" } as const;\nhandleRequest(req.url, req.method);\n')),(0,a.kt)("h2",{id:"exhaustiveness-checking"},"Exhaustiveness checking"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"never")," type is assignable to every type; however, no type is assignable to ",(0,a.kt)("inlineCode",{parentName:"p"},"never")," (except ",(0,a.kt)("inlineCode",{parentName:"p"},"never")," itself). This means you can use narrowing and rely on ",(0,a.kt)("inlineCode",{parentName:"p"},"never")," turning up to do exhaustive checking in a ",(0,a.kt)("inlineCode",{parentName:"p"},"switch")," statement"),(0,a.kt)("p",null,"For example, adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," to our ",(0,a.kt)("inlineCode",{parentName:"p"},"getArea")," function which tries to assign the shape to ",(0,a.kt)("inlineCode",{parentName:"p"},"never")," will not raise error when every possible case has been handled."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'type Shape = Circle | Square;\n\nfunction getArea(shape: Shape) {\n  switch (shape.kind) {\n    case "circle":\n      return Math.PI * shape.radius **2;\n    case "square":\n      return shape.sideLength **2;\n    default:\n      const _exhaustiveCheck: never = shape;\n      return _exhaustiveCheck\n  }\n}\n')),(0,a.kt)("p",null,"When Adding a new member to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Shape")," union, will cause Typescript error, if you forget to handle the case in ",(0,a.kt)("inlineCode",{parentName:"p"},"getArea")," function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'interface Triangle {\n  kind: "triangle";\n  sideLength: number;\n}\n \ntype Shape = Circle | Square | Triangle;\n \nfunction getArea(shape: Shape) {\n  switch (shape.kind) {\n    case "circle":\n      return Math.PI * shape.radius ** 2;\n    case "square":\n      return shape.sideLength ** 2;\n    default:\n      const _exhaustiveCheck: never = shape;\n// This will error\nType \'Triangle\' is not assignable to type \'never\'.\n      return _exhaustiveCheck;\n  }\n}\n')))}h.isMDXComponent=!0}}]);