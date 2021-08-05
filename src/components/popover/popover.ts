import ADComponent from '../common/adComponent'

/**
 * @name ad-popover
 * @description 气泡提示组件
 * @tutorial http://ad-mob.woa.com/src-components-popover-popover
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_popover
     */
    prefix: {
      type: String,
      value: 'ad_popover',
    },
    /**
     * @property {Boolean} defaultVisible 默认是否展示，内部控制
     * @default null
     */
    defaultVisible: {
      type: Boolean,
      value: null,
    },
    /**
     * @property {Boolean} visible 是否展示，外部控制
     * @default null
     */
    visible: {
      type: Boolean,
      value: null,
    },
    /**
     * @property {String} text 提示文字内容
     * @default ''
     */
    text: {
      type: String,
      value: '',
    },
    /**
     * @property {String} placement 弹出层的位置
     * @default bottomLeft
     * @enum top | right | bottom | left | topLeft | topRight | bottomRight | bottomLeft
     */
    placement: {
      type: String,
      value: 'bottomLeft',
    },
    /**
     * @property {Boolean} hasTransparentMask 是否有透明遮罩，默认有透明遮罩，在有透明遮罩的情况下点击页面的任意位置能够关闭提示，没有的情况下需要自定义方法关闭提示内容
     * @default true
     */
    hasTransparentMask: {
      type: Boolean,
      value: true,
    },
    /**
     * @property {Boolean} hasMask 是否有黑色透明遮罩
     * @default false
     */
    hasMask: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} backgroundColor 背景颜色
     * @default var(--transparent-gray-800, rgba(0, 0, 0, 0.58))
     */
    backgroundColor: {
      type: String,
      value: 'var(--transparent-gray-800, rgba(0, 0, 0, 0.58))',
    },
    /**
     * @property {String} popStyle 自定义弹出层的样式，弹层的宽度需要自定义
     * @default ''
     */
    popStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} arrowStyle 自定箭头的样式
     * @default ''
     */
    arrowStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} customStyle 自定义样式
     * @default ''
     */
    customStyle: {
      type: String,
      value: '',
    },
  },

  /**
   * @property {Function} bind:onOpen 展示时的回调
   * @default
   */

  /**
   * @property {Function} bind:onClose 隐藏时的回调
   * @default
   */

  observers: {
    defaultVisibe(defaultVisibe: boolean) {
      this.propUpdate(true, 'value', 'showPop', defaultVisibe)
    },
    visible(visible: boolean) {
      this.propUpdate(false, '', 'showPop', visible)
    },
    showPop(showPop) {
      console.log('paki 77', showPop)
      if (showPop) {
        this.open()
      } else {
        this.close()
      }
    },
  },
  data: {
    showPop: false,
    showPopContent: false,
    position: '',
    maxWidth: '',
    pageHeight: '100%',
  },
  lifetimes: {
    async ready() {
      this.initState('defaultVisible', 'visible', 'showPop')
    },
  },
  methods: {
    open() {
      this.calPosition()
      this.setData({
        showPopContent: true,
      })
    },
    calPosition() {
      let position = ''
      const gap = 10
      const { placement } = this.properties

      switch (placement) {
        case 'topLeft':
          position = `bottom: calc(100% + ${gap}px); left: 0;`
          break

        case 'top':
          position = `bottom: calc(100% + ${gap}px); left: 50%; transform: translateX(-50%);`
          break

        case 'topRight':
          position = `bottom:calc(100% + ${gap}px); right: 0;`
          break

        case 'left':
          position = `right: calc(100% + ${gap}px); top: 50%; transform: translateY(-50%);`
          break

        case 'bottomRight':
          position = `top: calc(100% + ${gap}px); right: 0;`
          break

        case 'bottom':
          position = `top: calc(100% + ${gap}px); left: 50%; transform: translateX(-50%);`
          break

        case 'bottomLeft':
          position = `top: calc(100% + ${gap}px); left: 0;`
          break

        case 'right':
          position = `left: calc(100% + ${gap}px); top: 50%; transform: translateY(-50%);`
          break

        default:
          position = ''
          break
      }

      this.setData({
        position,
      })
    },
    close() {
      this.setData({
        showPopContent: false,
      })
    },
    click(event: WechatMiniprogram.BaseEvent) {
      const { action } = event.currentTarget.dataset
      if (action === 'open') {
        this.emitOpen()
      }
      if (action === 'close') {
        this.emitClose()
      }
    },
    emitOpen() {
      this.shouldDataUpate('visible', 'showPop', true)
      this.triggerEvent('onOpen')
    },
    emitClose() {
      this.shouldDataUpate('visible', 'showPop', false)
      this.triggerEvent('onClose')
    },
  },
})

Component(componentOptions)
