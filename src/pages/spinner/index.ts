Page({
  show1() {
    wx.showToast({
      title: '没有icon的样式',
      icon: 'none',
      duration: 2000,
    })
  },
  show2() {
    wx.showToast({
      title: '成功的样式',
      icon: 'success',
      duration: 2000,
    })
  },
  show3() {
    wx.showToast({
      title: '加载的样式',
      icon: 'loading',
      duration: 2000,
    })
  },
})