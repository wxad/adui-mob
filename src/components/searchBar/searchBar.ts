import ADComponent from '../common/adComponent'

/**
 * @name ad-search-bar
 * @description 搜索栏组件
 * @tutorial http://ad-mob.woa.com/src-components-search-bar-search-bar
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_search_bar
     */
    prefix: {
      type: String,
      value: 'ad_search_bar',
    },
    /**
     * @property {String} value 输入值
     * @default ''
     */
    value: {
      type: String,
      value: '',
    },
    /**
     * @property {String} placeholder 占位文案
     * @default ''
     */
    placeholder: {
      type: String,
      value: '',
    },
    /**
     * @property {String} focus 是否聚焦
     * @default false
     */
    focus: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} isCard 是否是卡片样式
     * @default false
     */
    isCard: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} leftIconColor search 图标的颜色
     * @default var(--transparent-gray-800, rgba(0, 0, 0, 0.58))
     */
    leftIconColor: {
      type: String,
      value: 'var(--transparent-gray-800, rgba(0, 0, 0, 0.58))',
    },
    /**
     * @property {Number} leftIconSize search 图标的大小
     * @default 22
     */
    leftIconSize: {
      type: Number,
      value: 22,
    },
    /**
     * @property {Boolean} hasRightIcon 是否带右边的图标
     * @default true
     */
    hasRightIcon: {
      type: Boolean,
      value: true,
    },
    /**
     * @property {String} rightIconColor 右边图标的颜色
     * @default var(--transparent-gray-600, rgba(0, 0, 0, 0.22))
     */
    rightIconColor: {
      type: String,
      value: 'var(--transparent-gray-600, rgba(0, 0, 0, 0.22))',
    },
    /**
     * @property {Number} rightIconSize 右边图标的大小
     * @default 18
     */
    rightIconSize: {
      type: Number,
      value: 18,
    },
    /**
     * @property {Boolean} disabled 是否禁用
     * @default false
     */
    disabled: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} inputStyle input 自定义样式
     * @default ''
     */
    inputStyle: {
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
   * @function
   * @name bind:onChange
   * @param {Object} event {event: {detail: {value: string}}}
   * @description 值变化时的回调
   * @default () => {}
   */

  /**
   * @function
   * @name bind:onFocus
   * @param {Object} event {event: {detail: {value: string, height: number}}}
   * @description focus 时的回调
   * @default () => {}
   */

  /**
   * @function
   * @name bind:onBlur
   * @param {Object} event {event: {detail: {value, encryptedValue, encryptError}}}
   * @description blur 时的回调
   * @default () => {}
   */

  /**
   * @function
   * @name bind:onConfirm
   * @param {Object} event {event: {detail: {value: string}}}
   * @description confirm 时的回调
   * @default () => {}
   */

  /**
   * @function
   * @name bind:onKeyboardHeightChange
   * @param {Object} event {event: {detail: {height: number, duration: number}}}
   * @description 键盘高度变化时的回调
   * @default () => {}
   */

  relations: {},
  observers: {
    focus(focus: boolean) {
      this.setData({
        inputFocus: focus,
      })
    },
    value(value: string) {
      this.setData({
        inputValue: value,
      })
    },
  },
  data: {
    inputFocus: false,
    inputValue: '',
  },
  methods: {
    clear() {
      this.setData({
        inputValue: '',
        inputFocus: false,
      })
      this.triggerEvent('onChange', { value: '' })
    },
    onChange(event: WechatMiniprogram.Input) {
      const { value } = event.detail
      this.setData({
        inputValue: value,
      })
      this.triggerEvent('onChange', { value })
    },
    onFocus(event: WechatMiniprogram.Input) {
      this.triggerEvent('onFocus', { ...event })
    },
    onBlur(event: WechatMiniprogram.Input) {
      console.log('paki blur')
      this.setData({
        inputFocus: false,
      })
      this.triggerEvent('onBlur', { ...event })
    },
    onConfirm(event: WechatMiniprogram.Input) {
      this.triggerEvent('onConfirm', { ...event })
    },
    onKeyboardHeightChange(event: WechatMiniprogram.Input) {
      this.triggerEvent('onKeyboardHeightChange', { ...event })
    },
  },
})

Component(componentOptions)
