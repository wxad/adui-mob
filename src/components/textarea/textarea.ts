import ADComponent from '../common/adComponent'

/**
 * @name ad-textarea
 * @description 多行输入组件
 * @tutorial http://ad-mob.woa.com/src-components-textarea-textarea
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_textarea
     */
    prefix: {
      type: String,
      value: 'ad_textarea',
    },
    /**
     * @property {String} value 值
     * @default ''
     */
    value: {
      type: null,
      value: '',
    },
    /**
     * @property {String} placeholder 输入框为空时占位符
     * @default 请输入内容
     */
    placeholder: {
      type: String,
      value: '请输入内容',
    },
    /**
     * @property {Number} valueLength 外部确定 value 的长度，当对于某些字符的处理超过组件本身的能力时，可以通过外部来控制
     * @default null
     */
    valueLength: {
      type: Number,
      value: null,
    },
    /**
     * @property {Number} counter 计数器最大值
     * @default 0
     */
    counter: {
      type: Number,
      value: 0,
    },
    /**
     * @property {String} placeholderStyle 指定 placeholder 的样式
     * @default ''
     */
    placeholderStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} placeholderClass 指定 placeholder 的样式类
     * @default ad_textarea_placeholder
     */
    placeholderClass: {
      type: String,
      value: 'ad_textarea_placeholder',
    },
    /**
     * @property {Boolean} placeholderClass 是否禁用
     * @default false
     */
    disabled: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Number} maxLength 最大输入长度，设置为 -1 的时候不限制最大长度
     * @default -1
     */
    maxLength: {
      type: Number,
      value: -1,
      desc: '最大输入长度，设置为 -1 的时候不限制最大长度',
    },
    /**
     * @property {Boolean} placeholderClass 是否聚焦
     * @default false
     */
    focus: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} autoHeight 是否自动增高，设置autoHeight时，style.height不生效
     * @default false
     */
    autoHeight: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} fixed 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true
     * @default false
     */
    fixed: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Number} cursorSpacing 指定光标与键盘的距离。取textarea距离底部的距离和cursorSpacing指定的距离的最小值作为光标与键盘的距离
     * @default 0
     */
    cursorSpacing: {
      type: Number,
      value: 0,
    },
    /**
     * @property {Number} cursorSpacing 指定focus时的光标位置
     * @default -1
     */
    cursor: {
      type: Number,
      value: -1,
    },
    /**
     * @property {Boolean} showConfirmBar 是否显示键盘上方带有”完成“按钮那一栏
     * @default true
     */
    showConfirmBar: {
      type: Boolean,
      value: true,
    },
    /**
     * @property {Number} selectionStart 光标起始位置，自动聚集时有效，需与selectionEnd搭配使用
     * @default -1
     */
    selectionStart: {
      type: Number,
      value: -1,
    },
    /**
     * @property {Number} selectionEnd 光标结束位置，自动聚集时有效，需与selectionStart搭配使用
     * @default -1
     */
    selectionEnd: {
      type: Number,
      value: -1,
    },
    /**
     * @property {Boolean} adjustPosition 键盘弹起时，是否自动上推页面
     * @default true
     */
    adjustPosition: {
      type: Boolean,
      value: true,
      desc: '键盘弹起时，是否自动上推页面',
    },
    /**
     * @property {Boolean} holdKeyboard focus时，点击页面的时候不收起键盘
     * @default false
     */
    holdKeyboard: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} disableDefaultPadding 是否去掉 iOS 下的默认内边距
     * @default true
     */
    disableDefaultPadding: {
      type: Boolean,
      value: true,
    },
    /**
     * @property {String} errorText textarea 错误文案
     * @default ''
     */
    errorText: {
      type: String,
      value: '',
    },
    /**
     * @property {String} errorTextStyle errorText 的样式
     * @default ''
     */
    errorTextStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} textareaStyle textarea 自定义样式
     * @default ''
     */
    textareaStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} counterStyle 自定义计数器的样式
     * @default ''
     */
    counterStyle: {
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
    value(value: any) {
      this.setData({
        textareaValue: value,
      })
    },
  },
  data: {
    textareaValue: '',
  },
  methods: {
    onChange(event: WechatMiniprogram.InputEvent) {
      const { value, cursor, keyCode } = event.detail
      this.setData({
        textareaValue: value,
      })
      // 只传出输入的内容，格式化的值只在组件内部处理
      this.triggerEvent('onChange', {
        value,
        cursor,
        keyCode,
      })
    },
    onFocus(event: WechatMiniprogram.InputEvent) {
      this.triggerEvent('onFocus', { ...event })
    },
    onBlur(event: WechatMiniprogram.InputEvent) {
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
