import types from './iconType'
// const types = require('./iconType')

Page({
  data: {
    show: false,
    icons: [],
  },
  onLoad() {
    const { icons } = this.data
    const typeNames = Object.keys(types)
    console.log('paki', typeNames)
    console.log('paki 333', types)
    typeNames.forEach((item) => {
      const iconsOutlined = []
      const iconsUnoutlined = []
      types[item].data.forEach(element => {
        if (element.name.includes('-outlined')) {
          iconsOutlined.push(element.name)
        } else {
          iconsUnoutlined.push(element.name)
        }
      })
      icons.push({
        name: item,
        icons: [...iconsOutlined, ...iconsUnoutlined],
      })
    })
    console.log('paki', icons)
    this.setData({
      icons,
    })
  },
  showIconName(event: WechatMiniprogram.BaseEvent) {
    const { icon } = event.currentTarget.dataset
    wx.showToast({
      title: `${icon}`,
      icon: 'none',
      duration: 500,
    })
  },
})