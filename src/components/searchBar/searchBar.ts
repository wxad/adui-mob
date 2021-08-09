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
   * @property {Function} bind:onChange 值变化的回调
   * @default
   */

  /**
   * @property {Function} bind:onFocus focus 时的回调
   * @default
   */

  /**
   * @property {Function} bind:onBlur blur 时的回调
   * @default
   */

  /**
   * @property {Function} bind:onConfirm confirm 时的回调
   * @default
   */

  /**
   * @property {Function} bind:onKeyboardHeightChange 键盘高度变化时的回调
   * @default
   */

  relations: {},
  observers: {
    focuse(focuse: boolean) {
      this.setData({
        inputFocus: focuse,
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
      console.log('paki click')
      this.setData({
        inputValue: '',
        inputFocus: false,
      })
      this.triggerEvent('onChange', { value: '' })
    },
    onChange(event: WechatMiniprogram.InputEvent) {
      const { value } = event.detail
      this.setData({
        inputValue: value,
      })
      this.triggerEvent('onChange', { value })
    },
    onFocus(event: WechatMiniprogram.InputEvent) {
      this.triggerEvent('onFocus', { ...event })
    },
    onBlur(event: WechatMiniprogram.InputEvent) {
      console.log('paki blur')
      this.setData({
        inputFocus: false,
      })
      this.triggerEvent('onBlur', { ...event })
    },
    onConfirm(event: WechatMiniprogram.InputEvent) {
      this.triggerEvent('onConfirm', { ...event })
    },
    onKeyboardHeightChange(event: WechatMiniprogram.InputEvent) {
      this.triggerEvent('onKeyboardHeightChange', { ...event })
    },
  },
})

Component(componentOptions)