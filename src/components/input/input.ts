import ADComponent from '../common/adComponent'

interface INewValue {
  value: string | Number
  valueFormated: string | Number
}

/**
 * @name ad-input
 * @description 输入组件
 * @tutorial http://ad-mob.woa.com/src-components-input-input
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_input
     */
    prefix: {
      type: String,
      value: 'ad_input',
    },
    /**
     * @property {Any} value 值，内部控制
     * @default null
     */
    value: {
      type: null,
      value: null,
    },
    /**
     * @property {String} type 调起的输入键盘类型
     * @default ''
     * @enum text: 文本输入键盘 | number: 数字输入键盘 | idcard: 身份证输入键盘 | digit: 带小数点的数字键盘
     */
    type: {
      type: String,
      value: '',
    },
    /**
     * @property {String} format 输入值的格式，会对输入的内容进行格式化
     * @default ''
     * @enum number: 千分号 | phone: 电话
     */
    format: {
      type: String,
      value: '',
    },
    /**
     * @property {Boolean} password 是否是密码类型
     * @default false
     */
    password: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} placeholder 输入框为空时占位内容
     * @default 请输入内容
     */
    placeholder: {
      type: String,
      value: '请输入内容',
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
     * @default ad_input_placeholder
     */
    placeholderClass: {
      type: String,
      value: 'ad_input_placeholder',
    },
    /**
     * @property {Number} valueLength 外部确定 value 的长度，当对于某些字符的处理超过组件本身的能力时，可以通过外部来控制
     * @default null
     */
    valueLength: {
      type: Number,
      value: null,
      desc:
        '外部确定 value 的长度，当对于某些字符的处理超过组件本身的能力时，可以通过外部来控制',
    },
    /**
     * @property {Number} counter 计数器最大值
     * @default 0
     */
    counter: {
      type: Number,
      value: 0,
      desc: '计数器最大值',
    },
    /**
     * @property {Boolean} counterVisible 是否强制显示计数器，默认是 focus 时才会显示计数器
     * @default false
     */
    counterVisible: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} isEllipsis 输入内容过长时是否显示省略号
     * @default false
     */
    isEllipsis: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} unit 单位名称
     * @default ''
     */
    unit: {
      type: String,
      value: '',
    },
    /**
     * @property {String} icon icon 的名字
     * @default ''
     */
    icon: {
      type: String,
      value: '',
      desc: 'icon 的名字',
    },
    /**
     * @property {String} iconColor icon 的颜色
     * @default var(--transparent-gray-700, rgba(0, 0, 0, 0.36))
     */
    iconColor: {
      type: String,
      value: 'var(--transparent-gray-700, rgba(0, 0, 0, 0.36))',
    },
    /**
     * @property {Boolean} error 是否报错
     * @default false
     */
    error: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} errorText 错误提示语
     * @default ''
     */
    errorText: {
      type: String,
      value: '',
    },
    /**
     * @property {String} errorIcon 错误提示的 icon
     * @default alert-circle
     */
    errorIcon: {
      type: String,
      value: 'alert-circle',
    },
    /**
     * @property {String} errorIcon 错误提示的 icon
     * @default alert-circle
     */
    errorIconColor: {
      type: String,
      value: '#D9514C',
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
     * @property {Number} maxLength 最大输入长度，设置为 -1 的时候不限制最大长度
     * @default 140
     */
    maxLength: {
      type: Number,
      value: 140,
    },
    /**
     * @property {Number} maxLength 指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离
     * @default 0
     */
    cursorSpacing: {
      type: Number,
      value: 0,
    },
    /**
     * @property {Boolean} focus 是否聚焦
     * @default false
     */
    focus: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} confirmType 设置键盘右下角按钮的文字，仅在type="text"时生效
     * @default done
     * @enum send: 右下角按钮为“发送” | search: 右下角按钮为“搜索” | next: 右下角按钮为“下一个” | go: 右下角按钮为“前往” | done: 右下角按钮为“完成”
     */
    confirmType: {
      type: String,
      value: 'done',
    },
    /**
     * @property {Boolean} confirmHold 点击键盘右下角按钮时是否保持键盘不收起
     * @default false
     */
    confirmHold: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Number} cursor 指定focus时的光标位置
     * @default null
     */
    cursor: {
      type: Number,
      value: null,
      desc: '指定focus时的光标位置',
    },
    /**
     * @property {Boolean} selectAll 是否全选，全选情况下，默认会自动聚焦
     * @default false
     */
    selectAll: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Number} selectionStart 光标起始位置，自动聚集时有效，需与selection-end搭配使用
     * @default -1
     */
    selectionStart: {
      type: Number,
      value: -1,
    },
    /**
     * @property {Number} selectionEnd 光标结束位置，自动聚集时有效，需与selection-start搭配使用
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
     * @property {String} align 文字对齐方式
     * @default right
     * @enum right: 右对齐 | left: 左对齐 | center: 居中对齐
     */
    align: {
      type: String,
      value: 'right',
    },
    /**
     * @property {String} inputStyle 自定义输入框的样式
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

  data: {
    inputValue: '',
    showCounter: false,
    selectionStartInner: -1,
    selectionEndInner: -1,
    focusInner: false,
  },
  lifetimes: {},
  observers: {
    'defaultValue, value': function(defaultValue, value) {
      const { inputValue } = this.data
      const valueFinal = this.formatValue(value)
      if (value !== null && inputValue !== valueFinal.value) {
        this.setData({
          inputValue: valueFinal.valueFormated,
        })
      } else if (defaultValue !== null) {
        this.setData({
          inputValue: defaultValue,
        })
      }
    },
    focus(focus: boolean) {
      this.setData({
        focusInner: focus,
      })
    },
    selectionStart(selectionStart: number) {
      this.setData({
        selectionStartInner: selectionStart,
      })
    },
    selectionEnd(selectionEnd: number) {
      this.setData({
        selectionEndInner: selectionEnd,
      })
    },
    selectAll(selectAll: boolean) {
      // const { focus } = this.properties
      const { inputValue } = this.data
      if (selectAll) {
        this.setData({
          selectionStartInner: 0,
          selectionEndInner: inputValue.length,
          focusInner: true,
        })
      } else {
        this.setData({
          selectionStartInner: -1,
          selectionEndInner: -1,
          focusInner: false,
        })
      }
    },
  },
  methods: {
    formatValue(value: string) {
      const { type, format } = this.properties
      const valueString = `${value}`
      let valueFinal: INewValue = {
        value: '',
        valueFormated: '',
      }
      if (valueString === '') {
        return valueFinal
      }
      // 只针对number格式进行格式化
      if (type === 'number') {
        if (format === 'number') {
          // 对于输入非数字字符的不进行格式化处理
          if (/^\d+$/.test(valueString.replace(/,/g, ''))) {
            valueFinal = this.formateNumber(valueString)
            return valueFinal
          }
        }
        // 对于输入非数字字符的不进行格式化处理
        if (format === 'phone') {
          if (/^\d+$/.test(valueString.replace(/\s/g, ''))) {
            valueFinal = this.formatePhone(valueString)
            return valueFinal
          }
        }
      }
      valueFinal.value = valueString
      valueFinal.valueFormated = valueString
      return valueFinal
    },
    // 千分位格式
    formateNumber(value: String) {
      let valueNew = value
      if (value.includes(',')) {
        valueNew = value.replace(/,/g, '')
      }
      return {
        value: Number(valueNew),
        valueFormated: Number(valueNew).toLocaleString(),
      }
    },
    // 手机号码格式
    formatePhone(value: String) {
      let valueNew = value
      if (value.includes(' ')) {
        valueNew = value.replace(/\s/g, '')
      }
      const firstPiece = valueNew.substring(0, 3)
      const secondPiece = valueNew.substring(3, valueNew.length)
      const secondChunks =
        secondPiece !== '' ? secondPiece.match(/.{1,4}/g) : []
      const valueFormatedFinal =
        secondPiece !== ''
          ? `${firstPiece} ${secondChunks?.join(' ')}`
          : `${firstPiece}`
      return {
        value: valueNew,
        valueFormated: valueFormatedFinal,
      }
    },
    onChange(event: WechatMiniprogram.Input) {
      const { value, cursor, keyCode } = event.detail
      const valueFinal = this.formatValue(value)
      this.setData({
        inputValue: valueFinal.valueFormated,
      })
      // 只传出输入的内容，格式化的值只在组件内部处理
      this.triggerEvent('onChange', {
        value: valueFinal.value,
        cursor,
        keyCode,
      })
    },
    onFocus(event: WechatMiniprogram.Input) {
      const { counter } = this.properties
      if (counter !== 0) {
        this.setData({
          showCounter: true,
        })
      }
      this.triggerEvent('onFocus', { ...event })
    },
    onBlur(event: WechatMiniprogram.Input) {
      this.setData({
        showCounter: false,
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
