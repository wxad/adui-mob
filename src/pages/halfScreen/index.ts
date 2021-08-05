Page({
  data: {
    show: false,
    showDialog: false,
  },
  onShow() { },

  show() {
    this.setData({
      show: !this.data.show,
    })
  },
  showDialogVisible() {
    this.setData({
      showDialog: !this.data.showDialog,
    })
  },
  noop() {},
})