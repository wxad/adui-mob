Page({
  data: {
    showDialog: false,
    top: 0,
    image: 'https://wxa.wxs.qq.com/images/paki/adui-for-mobile/picture.png',
  },
  onShow() {
  },
  change(event) {
    console.log('paki', event)
    this.setData({
      image: event.detail.value.tempFilePaths[0],
    })
  },
  changeImage(event: any) {
    const { value } = event.detail
    const { tempFilePaths } = value
    this.setData({
      image: tempFilePaths[0],
    })
  },
})
