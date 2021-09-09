export interface ToastProp {
  selector?: string
  icon?: string
  title?: string
  titleList?: Array<string>
  iconSize?: number
  loading?: boolean
  duration?: number
  onOpen?: () => {}
  onClose?: () => {}
}

interface Toast {
  set: (option: ToastProp) => void
  close: () => void
  show: () => void
  hide: () => void
}

const defaultOptions = {
  selector: '#ad-toast',
  icon: 'none',
  title: '',
  titleList: [],
  iconSize: 46,
  loading: false,
  duration: 1000,
  onOpen: () => {},
  onClose: () => {},
}

const getContext = () => {
  // eslint-disable-next-line no-undef
  const pages = getCurrentPages()
  return pages[pages.length - 1]
}

let toastContext: Toast & WechatMiniprogram.Page.Instance = null

function Toast(options: ToastProp) {
  const optionAll = { ...defaultOptions, ...options }
  const context = getContext()
  toastContext = context.selectComponent(optionAll.selector)
  if (toastContext) {
    toastContext.set(optionAll)
    toastContext.show()
  } else {
    console.log('没有找到 toast 节点，检查 selector 是否正确')
  }
}

Toast.close = () => {
  if (toastContext) {
    toastContext.hide()
  }
}

export default Toast
