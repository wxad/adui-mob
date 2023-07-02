Page({
  data: {
    bgcolor: '',
    color: '',
    icon: 'back',
    icons: ['', 'home', 'close', 'back'],
  },
  goBack() {
    wx.navigateBack()
  },
  change(event: WechatMiniprogram.BaseEvent) {
    const { bgcolor, color, icon } = event.currentTarget.dataset
    if (bgcolor === '#07c160') {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#ffffff',
      })
    } else {
      wx.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: '#000000',
      })
    }
    this.setData({
      bgcolor,
      color,
      icon,
    })
  },
})
