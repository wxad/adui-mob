Page({
  data: {
    value: 50,
    marks: [
      { position: 0, value: '0' },
      { position: 25, value: '25' },
      { position: 50, value: '50' },
      { position: 75, value: '75' },
      { position: 100, value: '100' },
    ],
    value1: [20, 60],
    valueChange1: 50,
    valueChange2: [20, 60],
    valueChange3: [20, 60],
  },
  onShow() {},
  change(event: any) {
    const { value } = event.detail
    console.log('paki666', value)
    this.setData({
      value,
    })
  },
  change1(event: any) {
    const { value } = event.detail
    console.log('paki666', value)
    this.setData({
      valueChange1: value,
    })
  },
  change2(event: any) {
    const { value } = event.detail
    console.log('paki666', value)
    this.setData({
      valueChange2: value,
    })
  },
  change3(event: any) {
    const { value } = event.detail
    console.log('paki666', value)
    this.setData({
      valueChange3: value,
    })
  },
  openVideo() {
    console.log('paki')
    const vidoeContext = wx.createVideoContext('myVideo')
    vidoeContext.requestFullScreen({
      direction: 0,
    })
  },
  // fullScreenChange(event: WechatMiniprogram.BaseEvent) {
  //   const { fullScreen, direction } = event.detail
  //   console.log('paki', fullScreen, direction)
  // },
})
