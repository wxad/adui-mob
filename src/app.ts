App({
  onLaunch() {
    console.log('App Launch')
    wx.getStorage({
      key: '',
    })
  },
  onShow() {
    console.log('App Show')
  },
  onHide() {
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false,
    },
})