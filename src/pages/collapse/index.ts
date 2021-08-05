Page({
  data: {
    lists: [
      {
        value: 5,
        title: '法律服务',
        content: ['司法鉴定', '律师事务所', '公证'],
      },
      {
        value: 1,
        title: '零售百货',
        content: ['麦芽糖', '苏打饼', '水果'],
      },
      {
        value: 2,
        title: '数码家电',
        content: ['手机', '单方', '笔记本'],
      },
    ],
    show: false,
  },
  onShow() {},
  change(e: any) {
    const { value } = e.detail
    console.log('paki1111', value)
    // this.setData({
    //   value,
    // })
  },
  changeShow(event: any) {
    const { value } = event.detail
    this.setData({
      show: value,
    })
  },
})
