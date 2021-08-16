
## adui-mob

这个项目是 adui 小程序版本的组件库，沿用与 adui 同一套设计语言，目前只支持小程序原生开发。
开发者文档：[https://wxad.design/adui-mob/](https://wxad.design/adui-mob/)

## 扫码体验
<div>
  <img src="https://wxa.wxs.qq.com/images/paki/adui-for-mobile/adui-mob-1.jpg" width="200"/>
</div>

---
## 本地开发

```bash
npm install

npm run dev
```
整个项目使用 gulp 编译，编译完后将 dist 目录导入开发者开发者工具中，即可看到 demo

---
## 使用

```bash
npm install adui-mob
```
adui-mob 目前已经发布到 npm 上了，可以直接使用 npm 包的方式，具体在小程序中如何使用 npm 包，可以参考小程序官方的[教程](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

---

## 配套工具

除了组件外，我们还开发了配套的 vscode 插件和用于编译的 gulp 插件，具体如下

- ad-mob，vscode 插件，这个插件提供了 vscode 中开发时组件的标签补全，props 的提示和补全功能，整个插件的功能实现是参考 **minapp** 插件的，建议和**minapp**配套使用，因为其提供了代码高亮和基础组件补全的功能
- [gulp-ad-icon-shaking](https://www.npmjs.com/package/gulp-ad-icon-shaking)，这个插件提供了 icon 的 shaking 功能
- [gulp-adui-component](https://www.npmjs.com/package/gulp-adui-component-shaking)，这个插件提供了组价按需打包的功能

## 注意事项

由于这个组件库是跟着业务一步步迭代出来的，所以在早期的时候部分组件是用开发者直接创建的，后期建设的时候发现这部分组件的名字不符合整个组件库
的规范，所以新增的组件来替代他们，这部分组件会保留，但是不会再更新。

以下组件将会停止更新，请使用其他组件替代：
dropdown(可用 select 替换)、halfscreen(可用 sheet 替换)
