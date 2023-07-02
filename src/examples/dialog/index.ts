Page({
  data: {
    showDialog1: false,
    showDialog2: false,
    showDialog3: false,
    showDialog4: false,
    showDialog5: false,
    showDialog6: false,
    buttonList: [
      { value: 0, text: '选项一' },
      { value: 1, text: '选项二' },
      { value: 2, text: '选项三' },
    ],
  },
  onShow() {},
  open(event: WechatMiniprogram.BaseEvent) {
    const { num } = event.currentTarget.dataset
    console.log('paki', num)
    this.setData({
      [`showDialog${num}`]: true,
    })
  },
  close(event: WechatMiniprogram.BaseEvent) {
    console.log('paki', event)
    const { num } = event.currentTarget.dataset
    this.setData({
      [`showDialog${num}`]: false,
    })
  },
})
