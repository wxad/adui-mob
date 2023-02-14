
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
整个项目使用 gulp 编译，编译完后将 dist 目录导入开发者开发者工具中，即可看到 demo。rpx 版本的导入 dist-rpx 目录。

---
## 使用

```bash
npm install adui-mob
```
adui-mob 目前已经发布到 npm 上了，可以直接使用 npm 包的方式，具体在小程序中如何使用 npm 包，可以参考小程序官方的[教程](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

---

## px 与 rpx 尺寸
组件目前支持 px 和 rpx 两种单位，npm 包里面会包含两个文件夹，一个是 components 和 components-rpx，分别对应 px 和 rpx 单位，可根据项目需要进行引用

---

## 样式重置

组件的元素盒模型都是用的 `border-box`，之前的做法是在组件里面引入重置代码，目前这部分代码已经移除，建议在项目中的 app.wxss 进行重置

```
page,view, button, scroll-view, input, text {
  box-sizing: border-box;
}
```

## 配套工具

除了组件外，我们还开发了配套的 vscode 插件和用于编译的 gulp 插件，具体如下

- ad-mob，vscode 插件，这个插件提供了 vscode 中开发时组件的标签补全，props 的提示和补全功能，整个插件的功能实现是参考 **minapp** 插件的，建议和**minapp**配套使用，因为其提供了代码高亮和基础组件补全的功能
- [gulp-ad-icon-shaking](https://www.npmjs.com/package/gulp-ad-icon-shaking)，这个插件提供了 icon 的 shaking 功能
- [gulp-adui-component](https://www.npmjs.com/package/gulp-adui-component-shaking)，这个插件提供了组价按需打包的功能

## 内部控制和外部控制
**adui-mob**中包含状态的组件基本上都有**内部控制**和**外部控制**两种设计，可以根据组件是否同时有`defaultValue`和`value`这两个Prop来区分。
`defaultValue`只在第一次渲染时生效，之后的状态由组件自身控制，而`value`只能通过外部的设置来改变组价的状态。

这样设计的好处是如果你只是需要设置一个初始值，并且只想要关心这个值的改变情况，比如 `<ad-switch defaultChecked onChange={xxx} />`，这样你就不需要单独地设置一个 data 保证组件 UI 状态的完整； 如果你想要存储这个值，那么你需要在变化时将这个值回传给组件：`<ad-switch checked={xxx} onChange={xxx} />`。

## 主题色和内置变量
adui-mob 和 adui 沿用同一套色系和主题色，同样使用的是 css 变量的方式来实现的，因此，如果你想改变整个组件库的主题色和灰色色系，可以在 `app.wxss` 文件中使用变量进行覆盖，具体如下：
```css
page {
  --primary-color: #07c160;
  --ad-green: #07c160;
  --ad-blue: #2b7bd6;
  --ad-orange: #EDA20C;
  --ad-red: #d9514c;
  --gray-50: #fafafa;
  --gray-100: #f2f2f2;
  --gray-200: #ebebeb;
  --gray-300: #e6e6e6;
  --gray-400: #e0e0e0;
  --gray-500: #d6d6d6;
  --gray-600: #c7c7c7;
  --gray-700: #a3a3a3;
  --gray-800: #6b6b6b;
  --gray-900: #1f1f1f;
  --transparent-gray-50: rgba(0, 0, 0, 0.02);
  --transparent-gray-100: rgba(0, 0, 0, 0.06);
  --transparent-gray-200: rgba(0, 0, 0, 0.08);
  --transparent-gray-300: rgba(0, 0, 0, 0.1);
  --transparent-gray-400: rgba(0, 0, 0, 0.12);
  --transparent-gray-500: rgba(0, 0, 0, 0.16);
  --transparent-gray-600: rgba(0, 0, 0, 0.22);
  --transparent-gray-700: rgba(0, 0, 0, 0.36);
  --transparent-gray-800: rgba(0, 0, 0, 0.58);
  --transparent-gray-900: rgba(0, 0, 0, 0.88);
  }
```

## 注意事项

由于这个组件库是跟着业务一步步迭代出来的，所以在早期的时候部分组件是用开发者直接创建的，后期建设的时候发现这部分组件的名字不符合整个组件库
的规范，所以新增的组件来替代他们，这部分组件会保留，但是不会再更新。

以下组件将会停止更新，请使用其他组件替代：
dropdown(可用 select 替换)、halfscreen(可用 sheet 替换)
