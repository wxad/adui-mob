(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{El9G:function(e,n,t){"use strict";t.r(n),t.d(n,"slots",(function(){return p})),t.d(n,"_frontmatter",(function(){return d})),t.d(n,"default",(function(){return s}));var l=t("Fcif"),a=t("dV/x"),c=(t("mXGw"),t("/FXl")),i=t("TjRS"),o=t("RtOL");t("aD51");const r=["components"],p=[{name:"rightElement",desc:"右边 slot，用于自定义右边内容"}];void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!Object.prototype.hasOwnProperty.call(p,"__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"slots",filename:"src/components/input/input.mdx"}});const d={};void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!Object.prototype.hasOwnProperty.call(d,"__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/input/input.mdx"}});const u={slots:p,_frontmatter:d},b=i.a;function s(e){let{components:n}=e,t=Object(a.a)(e,r);return Object(c.b)(b,Object(l.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"input"},"Input"),Object(c.b)("p",null,"通过键盘输入内容的控件。"),Object(c.b)("h3",{id:"常用示例"},"常用示例"),Object(c.b)("h4",{id:"基本用法"},"基本用法"),Object(c.b)("p",null,"input 常见的应用场景是在 cell 中使用，一般都是和 cell 组合使用"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'<ad-cell-group>\n  <ad-cell title="标题">\n    <ad-input align="left" slot="rightElement" placeholder="输入内容左对齐" />\n  </ad-cell>\n  <ad-cell title="标题">\n    <ad-input slot="rightElement" placeholder="输入内容右对齐" />\n  </ad-cell>\n</ad-cell-group>\n')),Object(c.b)("h4",{id:"格式输入"},"格式输入"),Object(c.b)("p",null,"input 除了支持原生的格式外，还另外支持手机号和千分号两种格式输入，通过 format 属性进行配置"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'<ad-cell-group>\n  <ad-cell title="手机号">\n    <ad-input\n      type="number"\n      format="phone"\n      align="left"\n      slot="rightElement"\n      placeholder="请输入手机号"\n      value="152 1234 1234"\n    />\n  </ad-cell>\n  <ad-cell title="数字">\n    <ad-input\n      type="number"\n      format="number"\n      align="left"\n      slot="rightElement"\n      placeholder="支持千分符"\n      value="{{1234}}"\n    />\n  </ad-cell>\n</ad-cell-group>\n')),Object(c.b)("h4",{id:"错误提示"},"错误提示"),Object(c.b)("p",null,"input 可以通过外部控制的方式来展示错误样式"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'<ad-cell-group>\n  <ad-cell title="标题">\n    <ad-input\n      align="left"\n      error\n      placeholder="在此输入内容"\n      slot="rightElement"\n    />\n  </ad-cell>\n  <ad-cell title="标题" innerStyle="align-items: flex-start;">\n    <ad-input\n      align="left"\n      error\n      errorText="输入内容错误"\n      slot="rightElement"\n      value="123"\n    />\n  </ad-cell>\n</ad-cell-group>\n')),Object(c.b)("h4",{id:"组合使用"},"组合使用"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript"},'<ad-cell-group noTopBorder noBottomBorder>\n  <ad-cell title="标题" leftIcon="credit-card-outlined">\n    <ad-input\n      align="left"\n      slot="rightElement"\n      placeholder="在此输入内容"\n      icon="view-outlined"\n    />\n  </ad-cell>\n  <ad-cell title="显示图标">\n    <ad-input\n      align="left"\n      slot="rightElement"\n      placeholder="在此输入内容"\n      icon="view-outlined"\n    />\n  </ad-cell>\n  <ad-cell title="显示计数器">\n    <ad-input\n      align="left"\n      slot="rightElement"\n      placeholder="在此输入内容"\n      value="{{inputValue}}"\n      bind:onChange="changeInput"\n      counter="{{20}}"\n    />\n  </ad-cell>\n  <ad-cell title="显示单位">\n    <ad-input\n      align="left"\n      slot="rightElement"\n      placeholder="在此输入内容"\n      unit="元"\n    />\n  </ad-cell>\n</ad-cell-group>\n')),Object(c.b)("h2",{id:"slot"},"Slot"),Object(c.b)(o.Table,{columnsResizable:!0,dataSource:p,columns:[{dataIndex:"name",title:"name"},{dataIndex:"desc",title:"描述"}],mdxType:"Table"}),Object(c.b)("h2",{id:"properties"},"Properties"))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!Object.prototype.hasOwnProperty.call(s,"__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/input/input.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-input-input-mdx-69b37123c6db327388b5.js.map