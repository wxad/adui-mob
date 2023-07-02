Page({
  data: {
    list: [
      {
        title: '从左上出',
        placement: 'topLeft',
      },
      {
        title: '从上方出',
        placement: 'top',
      },
      {
        title: '从右上出',
        placement: 'topRight',
      },
      {
        title: '从右边出',
        placement: 'right',
      },
      {
        title: '',
        placement: 'empty',
      },
      {
        title: '从左边出',
        placement: 'left',
      },
      {
        title: '从左下出',
        placement: 'bottomLeft',
      },
      {
        title: '从下方出',
        placement: 'bottom',
      },
      {
        title: '从右下出',
        placement: 'bottomRight',
      },
    ],
    visible: false,
    active: null,
  },
  onShow() {},
  chose(event: WechatMiniprogram.BaseEvent) {
    const { index } = event.currentTarget.dataset
    this.setData({
      active: Number(index),
    })
  },
  close() {
    this.setData({
      active: null,
    })
  },
})
