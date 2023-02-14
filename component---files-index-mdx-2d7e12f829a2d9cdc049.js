(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{sipD:function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",(function(){return i})),a.d(n,"default",(function(){return s}));var t=a("Fcif"),b=a("+I+c"),r=(a("mXGw"),a("/FXl")),p=a("TjRS"),c=(a("aD51"),["components"]),i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"files/index.mdx"}});var o={_frontmatter:i},l=p.a;function s(e){var n=e.components,a=Object(b.a)(e,c);return Object(r.b)(l,Object(t.a)({},o,a,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"组件库介绍"},"组件库介绍"),Object(r.b)("p",null,"这个项目是 adui 小程序版本的组件库，沿用与 adui 同一套设计语言，目前只支持小程序原生开发。可扫码体验"),Object(r.b)("div",{style:{marginTop:"60px"}},Object(r.b)("img",{src:"https://wxa.wxs.qq.com/images/paki/adui-for-mobile/adui-mob.jpg",height:"200",width:"200"})),Object(r.b)("h2",{id:"本地开发"},"本地开发"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm install\n\nnpm run dev\n")),Object(r.b)("p",null,"整个项目使用 gulp 编译，编译完后将 dist 目录导入开发者开发者工具中，即可看到 demo。rpx 版本的导入 dist-rpx 目录。"),Object(r.b)("h2",{id:"使用"},"使用"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm install adui-mob\n")),Object(r.b)("p",null,"adui-mob 目前已经发布到 npm 上了，可以直接使用 npm 包的方式，具体在小程序中如何使用 npm 包，可以参考小程序官方的",Object(r.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html"},"教程")),Object(r.b)("h2",{id:"px-与-rpx-尺寸"},"px 与 rpx 尺寸"),Object(r.b)("p",null,"组件目前支持 px 和 rpx 两种单位，npm 包里面会包含两个文件夹，一个是 components 和 components-rpx，分别对应 px 和 rpx 单位，可根据项目需要进行引用"),Object(r.b)("h2",{id:"样式重置"},"样式重置"),Object(r.b)("p",null,"组件的元素盒模型都是用的 ",Object(r.b)("inlineCode",{parentName:"p"},"border-box"),"，之前的做法是在组件里面引入重置代码，目前这部分代码已经移除，建议在项目中的 app.wxss 进行重置"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},"page,view, button, scroll-view, input, text {\n  box-sizing: border-box;\n}\n")),Object(r.b)("h2",{id:"配套工具"},"配套工具"),Object(r.b)("p",null,"除了组件外，我们还开发了配套的 vscode 提示补全插件和用于编译的 gulp 插件，具体如下:"),Object(r.b)("p",null,"1、",Object(r.b)("strong",{parentName:"p"},"ad-mob"),"，vscode 插件，这个插件提供了 vscode 中开发时组件的标签补全，props 的提示和补全功能，整个插件的功能实现是参考 ",Object(r.b)("strong",{parentName:"p"},"minapp")," 插件的，建议和",Object(r.b)("strong",{parentName:"p"},"minapp"),"配套使用，因为其提供了代码高亮和基础组件补全的功能"),Object(r.b)("p",null,"2、",Object(r.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/gulp-ad-icon-shaking"},Object(r.b)("strong",{parentName:"a"},"gulp-ad-icon-shaking")),"，这个插件提供了 icon 的 shaking 功能"),Object(r.b)("p",null,"3、",Object(r.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/gulp-adui-component-shaking"},Object(r.b)("strong",{parentName:"a"},"gulp-adui-component")),"，这个插件提供了组价按需打包的功能"),Object(r.b)("h2",{id:"内部控制和外部控制"},"内部控制和外部控制"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"adui-mob"),"中包含状态的组件基本上都有",Object(r.b)("strong",{parentName:"p"},"内部控制"),"和",Object(r.b)("strong",{parentName:"p"},"外部控制"),"两种设计，可以根据组件是否同时有",Object(r.b)("inlineCode",{parentName:"p"},"defaultValue"),"和",Object(r.b)("inlineCode",{parentName:"p"},"value"),"这两个Prop来区分。\n",Object(r.b)("inlineCode",{parentName:"p"},"defaultValue"),"只在第一次渲染时生效，之后的状态由组件自身控制，而",Object(r.b)("inlineCode",{parentName:"p"},"value"),"只能通过外部的设置来改变组价的状态。"),Object(r.b)("p",null,"这样设计的好处是如果你只是需要设置一个初始值，并且只想要关心这个值的改变情况，比如 ",Object(r.b)("inlineCode",{parentName:"p"},"<ad-switch defaultChecked onChange={xxx} />"),"，这样你就不需要单独地设置一个 data 保证组件 UI 状态的完整； 如果你想要存储这个值，那么你需要在变化时将这个值回传给组件：",Object(r.b)("inlineCode",{parentName:"p"},"<ad-switch checked={xxx} onChange={xxx} />"),"。"),Object(r.b)("h2",{id:"主题色和内置变量"},"主题色和内置变量"),Object(r.b)("p",null,"adui-mob 和 adui 沿用同一套色系和主题色，同样使用的是 css 变量的方式来实现的，因此，如果你想改变整个组件库的主题色和灰色色系，可以在 ",Object(r.b)("inlineCode",{parentName:"p"},"app.wxss")," 文件中使用变量进行覆盖，具体如下："),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css"},"page {\n  --primary-color: #07c160;\n  --ad-green: #07c160;\n  --ad-blue: #2b7bd6;\n  --ad-orange: #EDA20C;\n  --ad-red: #d9514c;\n  --gray-50: #fafafa;\n  --gray-100: #f2f2f2;\n  --gray-200: #ebebeb;\n  --gray-300: #e6e6e6;\n  --gray-400: #e0e0e0;\n  --gray-500: #d6d6d6;\n  --gray-600: #c7c7c7;\n  --gray-700: #a3a3a3;\n  --gray-800: #6b6b6b;\n  --gray-900: #1f1f1f;\n  --transparent-gray-50: rgba(0, 0, 0, 0.02);\n  --transparent-gray-100: rgba(0, 0, 0, 0.06);\n  --transparent-gray-200: rgba(0, 0, 0, 0.08);\n  --transparent-gray-300: rgba(0, 0, 0, 0.1);\n  --transparent-gray-400: rgba(0, 0, 0, 0.12);\n  --transparent-gray-500: rgba(0, 0, 0, 0.16);\n  --transparent-gray-600: rgba(0, 0, 0, 0.22);\n  --transparent-gray-700: rgba(0, 0, 0, 0.36);\n  --transparent-gray-800: rgba(0, 0, 0, 0.58);\n  --transparent-gray-900: rgba(0, 0, 0, 0.88);\n  }\n")),Object(r.b)("h2",{id:"注意事项"},"注意事项"),Object(r.b)("p",null,"由于这个组件库是跟着业务一步步迭代出来的，所以在早期的时候部分组件是用开发者直接创建的，后期建设的时候发现这部分组件的名字不符合整个组件库\n的规范，所以新增的组件来替代他们，这部分组件会保留，但是不会再更新。"),Object(r.b)("p",null,"以下组件将会停止更新，请使用其他组件替代：\ndropdown(可用 select 替换)、halfscreen(可用 sheet 替换)"))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"files/index.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---files-index-mdx-2d7e12f829a2d9cdc049.js.map