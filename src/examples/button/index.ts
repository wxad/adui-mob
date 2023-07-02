Page({
  data: {
    theme: [
      '标准',
      '轻量',
      '描边',
      '文字',
    ],
    intent: [
      {
        name: '主题',
        intent: 'primary',
      },
      {
        name: '成功',
        intent: 'success',
      },
      {
        name: '警告',
        intent: 'warning',
      },
      {
        name: '危险',
        intent: 'danger',
      },
    ],
  },
  onShow() {
  },
})
