// interface MessageProperty {
//   selector?: string;
//   type?: 'primary' | 'success' | 'danger' | 'warning';
//   message?: String;
//   zIndex?: number;
//   duration?: number;
//   aniDuration?: number;
//   hasIcon?: boolean;
//   iconName?: string;
//   onClick?: () => {};
//   onOpen?: () => {};
//   onClose?: () => {};
// }

// const defaultOptions = {
//   selector: '#ad_message',
//   type: 'normal',
//   message: '',
//   zIndex: 99,
//   duration: 1000,
//   aniDuration: 300,
//   hasIcon: false,
//   iconName: '',
//   onClick: () => {},
//   onOpen: () => {},
//   onClose: () => {},
// }

// const parseOptions = (message: MessageProperty | string): MessageProperty => (typeof message === 'object' ? message : { message })

// const getContext = () => {
//   // eslint-disable-next-line no-undef
//   const pages = getCurrentPages()
//   return pages[pages.length - 1]
// }

// export default function Message(options: MessageProperty | string) {
//   const optionAll = { ...defaultOptions, ...parseOptions(options) }
//   const context = getContext()
//   const message = context.selectComponent(optionAll.selector)
//   console.log('paki', message)

//   if (message) {
//     message.set(optionAll)
//     message.show()
//   } else {
//     console.log('没有找到 message 节点，检查 selector 是否正确')
//   }
// }