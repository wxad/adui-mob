Page({
  data: {
    switchState: true,
    showDialog: false,
  },
  onShow() { },
  change(e: any) {
    console.log('paki', e)
    const {value} = e.detail
    this.setData({
      switchState: value
    })
  },
})