import ADComponent from '../common/adComponent'

/**
 * @name ad-floating-button
 * @description 悬浮按钮组件
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_floating_button
     */
    prefix: {
      type: String,
      value: 'ad_floating_button',
    },
    /**
     * @property {Boolean} isFixed 是否是固定在右下角
     * @default false
     */
    isFixed: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} text 按钮文案
     * @default ''
     */
    text: {
      type: String,
      value: '',
    },
    /**
     * @property {Boolean} autoPackUp 按钮是否自动收起
     * @default true
     */
    autoPackUp: {
      type: Boolean,
      value: true,
    },
    /**
     * @property {Boolean} expanded 按钮是否展开，外部控制按钮的展开和收起
     * @default false
     */
    expanded: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} icon 按钮 icon
     * @default add
     */
    icon: {
      type: String,
      value: 'add',
    },
    /**
     * @property {Number} icon icon 的大小
     * @default 22
     */
    iconSize: {
      type: Number,
      value: 22,
      desc: 'icon 的大小',
    },
    /**
     * @property {String} iconColor icon 的颜色
     * @default #ffffff
     */
    iconColor: {
      type: String,
      value: '#ffffff',
      desc: 'icon 的颜色',
    },
    /**
     * @property {String} iconDisabledColor disabled 状态下 icon 的颜色
     * @default var(--transparent-gray-500, rgba(0, 0, 0, 0.16))
     */
    iconDisabledColor: {
      type: String,
      value: 'var(--transparent-gray-500, rgba(0, 0, 0, 0.16))',
      desc: 'icon 的颜色',
    },
    /**
     * @property {Boolean} disabled 是否禁用
     * @default false
     */
    disabled: {
      type: Boolean,
      value: false,
      desc: '是否禁用',
    },
    /**
     * @property {String} customStyle 自定义样式
     * @default ''
     */
    customStyle: {
      type: String,
      value: '',
      desc: '自定义样式',
    },
  },
  // end
  relations: {},
  observers: {
    expanded(expanded: boolean) {
      if (expanded) {
        this.setTextWidth()
      } else {
        this.removeTextWidth()
      }
    },
  },
  data: {
    textStyle: 'width: auto',
    hideText: false,
  },
  lifetimes: {
    ready() {
      const { disabled, autoPackUp, expanded } = this.properties
      if (expanded) {
        this.setTextWidth()
      } else if (!disabled && autoPackUp) {
        this.setTextWidth()
        if (autoPackUp && !expanded) {
          this.timer = setTimeout(() => {
            this.removeTextWidth()
          }, 1000)
        }
      }
    },
    detached() {
      clearTimeout(this.timer)
    },
  },
  methods: {
    setTextWidth() {
      const { prefix } = this.properties
      this.getNode(`.${prefix}_text_inner`).then(
        (node: WechatMiniprogram.BoundingClientRectCallbackResult) => {
          this.setData({
            textStyle: `width: ${node.width}px`,
          })
        }
      )
    },
    removeTextWidth() {
      this.setData({
        textStyle: 'width: 0px',
      })
    },
  },
})

Component(componentOptions)
