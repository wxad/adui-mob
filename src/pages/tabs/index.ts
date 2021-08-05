Page({
  data: {
    tabs1: [
      { title: '标签一', value: 0 },
      { title: '标签二', value: 1 },
    ],
    tabs2: [
      { title: '标签一', value: 0 },
      { title: '标签二', value: 1 },
      { title: '标签三', value: 2 },
    ],
    tabs3: [
      { title: '标签一', value: 0 },
      { title: '标签二', value: 1 },
      { title: '标签三', value: 2 },
      { title: '标签四', value: 3 },
    ],
    tabs4: [
      { title: '标签一', value: 0 },
      { title: '禁用态', value: 2, disabled: true },
    ],
    activeItem: 0,
    show: false,
  },
  onLoad() {
  },
  onShow() {},

  showTabs() {
    this.setData({
      show: !this.data.show,
    })
  },

  tabChange(event: any) {
    const { value } = event.detail
    console.log('paki 5555', value)
    this.setData({
      activeItem: value,
    })
  },
})
