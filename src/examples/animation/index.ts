Page({
  data: {
    show: false,
    name: 'fade',
  },

  onShow() {
  },

  show() {
    console.log('paki')
    this.setData({
      show: true,
    }, () => {
      setTimeout(() => {
        this.setData({
          show: false,
        })
      }, 1000)
    })
  },
})
