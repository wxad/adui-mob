Page({
  data: {
    options1: [
      {
        title: '选项一',
        value: 0,
      },
      {
        title: '选项二',
        value: 1,
      },
      {
        title: '选项三',
        value: 2,
      },
      {
        title: '选项四',
        value: 3,
      },
    ],
    value1: 0,
    value2: 1,
    value3: 2,
    value4: 3,
    options2: [
      {
        title: '全部广告位',
        value: 0,
      },
      {
        title: '小游戏',
        value: 1,
      },
      {
        title: '公众号底部',
        value: 2,
      },
    ],
    showSelect: false,
  },
  noop() {},
  change1(event: any) {
    // console.log('paki 11', event)
    this.setData({
      value1: event.detail.value,
    })
  },
  change2(event: any) {
    // console.log('paki 222', event)
    this.setData({
      value2: event.detail.value,
    })
  },
  open() {
    console.log('paki open')
  },
  close() {
    this.setData({
      showItem: false,
    })
  },
  showItem(event: WechatMiniprogram.BaseEvent) {
    const { key } = event.currentTarget.dataset
    console.log('paki 333', key, event)
    this.setData({
      type: Number(key),
    })
  },
  choseHeader() {
    this.setData({
      showSelect: !this.data.showSelect,
    })
  },
  hideSheet() {
    this.setData({
      showSelect: false,
    })
  },
})
