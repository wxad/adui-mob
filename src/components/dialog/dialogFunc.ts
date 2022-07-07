export interface IDialogProp {
  selector?: string
  title?: string
  cancelTitle?: string
  cancelStyle?: string
  confirmTitle?: string
  confirmStyle?: string
  type?: 'confirm' | 'inform'
  banner?: boolean
  buttonList?: Array<{ value: any, text: string }>
  duration?: number
  noButtons?: boolean
  buttonItemStyle?: string
  buttonItemColor?: string
  innerStyle?: string
  customStyle?: string
  onCancel?: {
    cb: () => void
  },
  onConfirm?: {
    cb: () => void
  },
}

const defaultOption: IDialogProp = {
  selector: '#ad-dialog',
  type: 'confirm',
  onCancel: {
    cb: () => {},
  },
  onConfirm: {
    cb: () => {},
  },
}

const getContext = () => {
  // eslint-disable-next-line no-undef
  const pages = getCurrentPages()
  return pages[pages.length - 1]
}

let dialogContext: WechatMiniprogram.Page.Instance = null

function Dialog(options: IDialogProp) {
  const optionAll = { ...defaultOption, ...options }
  const context = getContext()
  dialogContext = context.selectComponent(optionAll.selector as string)
  if (dialogContext) {
    dialogContext.set(optionAll)
  } else {
    console.log('没有找到 dialog 节点，检查 selector 是否正确')
  }
}

export default Dialog