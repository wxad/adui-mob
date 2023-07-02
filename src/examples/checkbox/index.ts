Page({
  data: {
    lists: [
      { key: 0, label: '测试' },
      { key: 1, label: '测试' },
      { key: 2, label: '测试' },
      { key: 3, label: '测试' },
    ],
    activeItem1: [0, 1],
    activeItem2: [0],
    disabled: true,
    value1: ['选中'],
    value2: ['选中'],
  },
  onShow() {},
  change(event) {
    console.log('paki', event)
    const { value } = event.detail
    this.setData({
      value2: value,
    })
  },
})
