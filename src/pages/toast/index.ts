import Toast from '../../components/toast/toastFunc'

Page({
  data: {},
  onShow() {},
  showToast(event: WechatMiniprogram.BaseEvent) {
    const { num } = event.currentTarget.dataset
    switch (num) {
      case 1:
        Toast({ title: '文案超过10字就折行' })
        break
      case 2:
        Toast({
          title: '操作成功',
          icon: 'tick-circle',
        })
        break
      case 3:
        Toast({
          title: '操作失败',
          icon: 'info-circle',
        })
        break
      case 4:
        Toast({
          title: '加载中',
          loading: true,
        })
        setTimeout(() => {
          Toast.close()
        }, 1000)
        break
      default:
        break
    }
  },
})
