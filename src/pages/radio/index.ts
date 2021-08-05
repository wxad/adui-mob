Page({
  data: {
    lists: [
      { key: 0, label: '测试' },
      { key: 1, label: '测试' },
      { key: 2, label: '测试' },
      { key: 3, label: '测试', disabled: true },
    ],
    activeItem: 3,
    disabled: true,
    value1: '选中',
    value2: '选中',
    value3: '选中',
  },
  onShow() {},
  change(event: WechatMiniprogram.BaseEvent) {
    const { num, value } = event.currentTarget.dataset
    this.setData({
      [`value${num}`]: value,
    })
  },
  changeDisabled() {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  clickRadio(event: any) {
    console.log('paki', event)
    const { value } = event.currentTarget.dataset
    console.log('paki', value)
    this.setData({
      activeItem: value
    })
  }
})
