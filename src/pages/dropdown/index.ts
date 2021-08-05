Page({
  data: {
    showDrop: false,
    type: 0,
    showDialog: false,
    traficScene: [
      {
        name: '全部流量场景',
        value: 0,
      },
      {
        name: '朋友圈',
        value: 1,
      },
      {
        name: '公众号',
        value: 2,
      },
      {
        name: '小程序',
        value: 3,
      },
    ],
    currentTrafficScene: 0,
    adSpace: [
      {
        name: '全部广告位',
        value: 0,
      },
      {
        name: '公众号底部',
        value: 1,
      },
      {
        name: '小程序',
        value: 2,
      },
      {
        name: '小游戏',
        value: 3,
      },
    ],
    currentAdSpace: 0,
  },
  onShow() {},
  // showDrop() {
  //   this.setData({
  //     showDrop: !this.data.showDrop,
  //   })
  // },
  showOne() {
    console.log('paki')
    this.setData({
      type: 1,
    })
    wx.nextTick(() => {
      this.setData({
        showDrop: true,
      })
    })
  },
  showTwo() {
    this.setData({
      type: 2,
    })
    wx.nextTick(() => {
      this.setData({
        showDrop: true,
      })
    })
  },
  changeTraficScene(event: WechatMiniprogram.BaseEvent) {
    const { value } = event.currentTarget.dataset
    this.setData({
      currentTrafficScene: Number(value),
    })
    setTimeout(() => {
      this.setData({
        showDrop: false,
      })
    }, 300)
  },
  changeAdSpace(event: WechatMiniprogram.BaseEvent) {
    const { value } = event.currentTarget.dataset
    this.setData({
      currentAdSpace: Number(value),
    })
    setTimeout(() => {
      this.setData({
        showDrop: false,
      })
    }, 300)
  },
})