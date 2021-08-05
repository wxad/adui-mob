Page({
  data: {
    inputValue: '123345',
    formats: [
      {
        title: '手机号',
        placeholder: '请输入手机号',
        type: 'number',
        formate: 'phone',
      },
      {
        title: '数字',
        placeholder: '支持千分符',
        type: 'number',
        formate: 'number',
      },
      {
        title: '数字',
        placeholder: '支持小数点',
        type: 'digit',
        formate: '',
      },
      {
        title: '数字',
        placeholder: '支持整数',
        type: 'number',
        formate: '',
      },
    ],
  },
  onShow() { },
  onChange(e: any) {
    console.log('paki', e)
    this.setData({
      inputValue: e.detail.value
    })
  },
  change(event: WechatMiniprogram.InputEvent) {
    const { value } = event.detail
    this.setData({
      inputValue: value,
    })
  },
  changeInput(event: any) {
    const { value } = event.detail
    console.log('paki6666', value)
    this.setData({
      inputValue: value,
    })
  },
  inputFocus(event) {
    console.log('paki333', event)
  },
  changeTextarea(event) {
    console.log('paki 44', event)
  },
})