Page({
  data: {
    show: false,
  },

  onShow() {
  },

  show() {
    this.setData({
      show: true,
    })
  },
  close() {
    this.setData({
      show: false,
    })
  },
})
