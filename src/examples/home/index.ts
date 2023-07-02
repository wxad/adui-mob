Page({
  data: {
    list1: [
      {
        title: '字体 Typography',
        link: 'font',
      },
      {
        title: '色彩 Color',
        link: 'color',
      },
      {
        title: '样式 Style',
        link: 'style',
      },
      {
        title: '图标 Icon',
        link: 'icon',
      },
      {
        title: '布局 Layout',
        link: 'layout',
      },
    ],
    list2: [
      {
        title: '导航 Navigation',
        link: 'navigation',
      },
      {
        title: '标签页 Tabs',
        link: 'tabs',
      },
      {
        title: '标签栏 Tabbar',
        link: 'tabbar',
      },
    ],
    list3: [
      {
        title: '头像 Avatar',
        link: 'avatar',
      },
      {
        title: '图片 Picture',
        link: 'picture',
      },
      {
        title: '上传 UploadImage',
        link: 'uploadImage',
      },
      {
        title: '按钮 Button',
        link: 'button',
      },
      {
        title: '单选 Radio',
        link: 'radio',
      },
      {
        title: '多选 Checkbox',
        link: 'checkbox',
      },
      {
        title: '标签 Tag',
        link: 'tag',
      },
      {
        title: '徽标 Badge',
        link: 'badge',
      },
      {
        title: '开关 Switch',
        link: 'switch',
      },
      {
        title: '步骤 Steps',
        link: 'steps',
      },
      {
        title: '输入 Input',
        link: 'input',
      },
      {
        title: '列表 Cell',
        link: 'cell',
      },
      {
        title: '卡片 Card',
        link: 'card',
      },
      {
        title: '步进器 Stepper',
        link: 'stepper',
      },
      {
        title: '搜索栏 SearchBar',
        link: 'searchBar',
      },
      {
        title: '折叠面板 Collapse',
        link: 'collapse',
      },
    ],
    list4: [
      {
        title: '对话框 Dialog',
        link: 'dialog',
      },
      {
        title: '半屏面板 Sheet',
        link: 'sheet',
      },
      {
        title: '行动面板 ActionSheet',
        link: 'actionSheet',
      },
      {
        title: '选择器 Select',
        link: 'select',
      },
      {
        title: '轻提示 Toast',
        link: 'toast',
      },
      {
        title: '气泡提示 Popover',
        link: 'popover',
      },
      {
        title: '全局提示 Message',
        link: 'message',
      },
      {
        title: '旋转加载 Spinner',
        link: 'spinner',
      },
      {
        title: '滑动条 Slider',
        link: 'slider',
      },
      {
        title: '页底提示 Loadmore',
        link: 'loadMore',
      },
      {
        title: '空状态 Emptystate',
        link: 'emptyState',
      },
    ],
    openItems: [],
  },

  onShow() {},
  click(event: WechatMiniprogram.BaseEvent) {
    const { link } = event.currentTarget.dataset
    wx.navigateTo({
      url: `../${link}/index`,
    })
  },
  open(event: WechatMiniprogram.BaseEvent) {
    const { value } = event.currentTarget.dataset
    let { openItems } = this.data
    if (openItems.includes(Number(value))) {
      openItems = openItems.filter((item) => item !== Number(value))
    } else {
      openItems.push(Number(value))
    }
    this.setData({
      openItems,
    })
  },
})
