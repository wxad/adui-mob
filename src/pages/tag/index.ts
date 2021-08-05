Page({
  data: {
    intents: [
      { name: '主题', intent: 'primary' },
      { name: '成功', intent: 'success' },
      { name: '警告', intent: 'warning' },
      { name: '危险', intent: 'danger' },
      { name: '自定义', intent: 'normal' },
    ],
    active: 0,
  },
  onShow() {},
  change(e: any) {
    const { value } = e.detail
    this.setData({
      active: value,
    })
  },
})
