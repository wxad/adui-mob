Page({
  data: {
    showDrawer1: false,
    showDrawer2: false,
    showDrawer3: false,
    showDrawer4: false,
  },
  open(event: WechatMiniprogram.BaseEvent) {
    const { num } = event.currentTarget.dataset
    console.log('paki', num)
    this.setData({
      [`showDrawer${num}`]: true,
    })
  },
  close(event: WechatMiniprogram.BaseEvent) {
    console.log('paki', event)
    const { num } = event.currentTarget.dataset
    this.setData({
      [`showDrawer${num}`]: false,
    })
  },
})