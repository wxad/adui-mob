(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"1Z5Y":function(e,l,n){"use strict";n.r(l),n.d(l,"slots",(function(){return d})),n.d(l,"_frontmatter",(function(){return p})),n.d(l,"default",(function(){return u}));var t=n("Fcif"),a=n("+I+c"),c=(n("mXGw"),n("/FXl")),r=n("TjRS"),i=n("RtOL"),o=(n("aD51"),["components"]),d=[{name:"",desc:"默认 slot，用于承载 cell"}];void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"slots",filename:"src/components/cellGroup/cellGroup.mdx"}});var p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/cellGroup/cellGroup.mdx"}});var s={slots:d,_frontmatter:p},b=r.a;function u(e){var l=e.components,n=Object(a.a)(e,o);return Object(c.b)(b,Object(t.a)({},s,n,{components:l,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"cellgroup"},"CellGroup"),Object(c.b)("p",null,"单个连续模块垂直排列，显示当前内容、状态和可进行对操作。"),Object(c.b)(i.Alert,{title:"组件间关系",text:"cell 组件的祖先组件，使用的时候搭配 cell 组件",mdxType:"Alert"}),Object(c.b)("h3",{id:"常用示例"},"常用示例"),Object(c.b)("h4",{id:"基本用法"},"基本用法"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'<ad-cell-group>\n  <ad-cell title="标题" />\n  <ad-cell title="标题" placeholder="描述文字右对齐" />\n  <ad-cell\n    title="标题"\n    placeholder="描述文字左对齐"\n    rightStyle="justify-content: flex-start;"\n  />\n</ad-cell-group>\n')),Object(c.b)("h4",{id:"双标题"},"双标题"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'<ad-cell-group>\n  <ad-cell title="标题" desc="副标题尽量保持一行" />\n  <ad-cell title="标题" desc="副标题尽量保持一行" rightDesc="10:15" />\n</ad-cell-group>\n')),Object(c.b)("h4",{id:"带图片或者图标"},"带图片或者图标"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'<ad-cell-group>\n  <ad-cell\n    title="标题"\n    avatar="https://wxa.wxs.qq.com/images/paki/adui-for-mobile/avatar.png"\n  />\n  <ad-cell\n    title="小程序助手"\n    leftIcon="mini-program"\n    leftIconColor="#7587DB"\n    isLink\n  />\n</ad-cell-group>\n')),Object(c.b)("h4",{id:"可操作"},"可操作"),Object(c.b)("p",null,"一般情况下 cell 会和其他组件一起搭配使用，这时可以使用 slot 来进行组合"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'<ad-cell-group>\n  // 配置 isLink 属性后 cell 会带上跳转箭头，具有点击交互性\n  <ad-cell title="标题" isLink />\n  // 组合 switch 组件\n  <ad-cell title="标题">\n    <ad-switch slot="rightElement" defaultChecked></ad-switch>\n  </ad-cell>\n  // 组合步进器组件\n  <ad-cell title="标题">\n    <ad-stepper slot="rightElement" value="{{30}}" />\n  </ad-cell>\n</ad-cell-group>\n')),Object(c.b)("h4",{id:"分割线"},"分割线"),Object(c.b)("p",null,"默认情况下 cell 的分割线会在左右两端留出 20px 的空白，可以设置只有右边通栏和全部通栏"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'// 默认左右留出 20px 的空白\n<ad-cell-group>\n  <ad-cell title="默认" isLink />\n  <ad-cell title="默认" isLink />\n</ad-cell-group>\n\n// 右通栏\n<ad-cell-group>\n  <ad-cell\n    rightBanner\n    title="右通栏"\n    isLink\n  />\n  <ad-cell\n    rightBanner\n    title="右通栏"\n    isLink\n  />\n</ad-cell-group>\n\n// 左右通栏\n<ad-cell-group>\n  <ad-cell\n    banner\n    title="通栏"\n    isLink\n  />\n  <ad-cell\n    banner\n    title="通栏"\n    isLink\n  />\n</ad-cell-group>\n')),Object(c.b)("h2",{id:"slot"},"Slot"),Object(c.b)(i.Table,{columnsResizable:!0,dataSource:d,columns:[{dataIndex:"name",title:"name"},{dataIndex:"desc",title:"描述"}],mdxType:"Table"}),Object(c.b)("h2",{id:"properties"},"Properties"))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/cellGroup/cellGroup.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-cell-group-cell-group-mdx-d2c745fb3280bc46f09a.js.map