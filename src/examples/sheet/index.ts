Page({
  data: {
    showDrawer1: false,
    showDrawer2: false,
    showDrawer3: false,
    showDrawer4: false,
    showDrawer5: false,
    cells: ['选项一', '选项二', '选项三', '选项四', '选项五'],
    chosenCell: 1,
    step: 0,
    step1: 0,
    industies: [
      '餐饮美食',
      '商务服务',
      '珠宝钟表',
      '教育',
      '婚恋',
      '综合电商平台',
      '在线试听与阅读',
      '生活服务',
      '法律服务',
    ],
    chosenIndusty: 0,
  },
  onShow() {},
  open(event: WechatMiniprogram.BaseEvent) {
    const { num } = event.currentTarget.dataset
    this.setData({
      [`showDrawer${num}`]: true,
    })
  },
  close(event: WechatMiniprogram.BaseEvent) {
    const { num } = event.currentTarget.dataset
    this.setData({
      [`showDrawer${num}`]: false,
    })
    if (Number(num) === 1 || Number(num) === 4) {
      this.setData({
        step: 0,
        step1: 0,
      })
    }
  },
  choseCell(event: WechatMiniprogram.BaseEvent) {
    const { cell } = event.currentTarget.dataset
    this.setData({
      chosenCell: Number(cell),
    })
    setTimeout(() => {
      this.setData({
        showDrawer2: false,
      })
    }, 500)
  },
  choseSheet() {
    this.setData({
      showDrawer3: false,
    })
  },
  changeStep() {
    this.setData({
      step: 1,
    })
  },
  changeStep1() {
    this.setData({
      step1: 1,
    })
  },
  resetStep() {
    this.setData({
      step: 0,
      step1: 0,
    })
  },
  choseTag(event: WechatMiniprogram.BaseEvent) {
    const { tag } = event.currentTarget.dataset
    this.setData({
      chosenIndusty: Number(tag),
    })
  },
  noop() {},
})
