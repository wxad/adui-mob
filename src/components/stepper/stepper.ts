import ADComponent from '../common/adComponent'

/**
 * @name ad-stepper
 * @description 输入组件
 * @tutorial http://ad-mob.woa.com/src-components-stepper-stepper
 */

// 将 '' 转化为 0
const formatZero = (num: string | number) => {
  return Number(num === '' ? 0 : num)
}

// 使用除法代替浮点运算
const add = (num1: number | string, num2: number | string) => {
  const cardinal = 10 ** 10
  return Math.round((formatZero(num1) + formatZero(num2)) * cardinal) / cardinal
}

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_stepper
     */
    prefix: {
      type: String,
      value: 'ad_stepper',
    },
    /**
     * @property {Number} value 值
     * @default ''
     */
    value: {
      type: Number,
      value: '',
    },
    /**
     * @property {Number} min 最小值
     * @default 0
     */
    min: {
      type: Number,
      value: 0,
    },
    /**
     * @property {Number} max 最大值
     * @default Number.MAX_SAFE_INTEGER
     */
    max: {
      type: Number,
      value: Number.MAX_SAFE_INTEGER,
    },
    /**
     * @property {Number} step 步长
     * @default 1
     */
    step: {
      type: Number,
      value: 1,
    },
    /**
     * @property {Boolean} isinteger 是否是整数，默认是整数
     * @default true
     */
    isinteger: {
      type: Boolean,
      value: true,
    },
    /**
     * @property {Boolean} banner 是否通栏，使用这个属性之后会自动撑满其所在的父节点
     * @default true
     */
    banner: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} disabled 是否整个组件禁用
     * @default false
     */
    disabled: {
      type: Boolean,
      value: false,
      desc: '是否整个组件禁用',
    },
    /**
     * @property {Boolean} minusDisabled 禁用左边按钮
     * @default false
     */
    minusDisabled: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} addDisabled 禁用右边按钮
     * @default false
     */
    addDisabled: {
      type: Boolean,
      value: false,
      desc: '禁用右边按钮',
    },
    /**
     * @property {Boolean} inputDisabled 禁用输入框
     * @default false
     */
    inputDisabled: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} iconColor icon 的默认颜色
     * @default var(--transparent-gray-800, rgba(0, 0, 0, 0.58))
     */
    iconColor: {
      type: String,
      value: 'var(--transparent-gray-800, rgba(0, 0, 0, 0.58))',
    },
    /**
     * @property {String} iconDisableColor icon 的 disabled 态颜色
     * @default var(--transparent-gray-500, rgba(0, 0, 0, 0.16))
     */
    iconDisableColor: {
      type: String,
      value: 'rgba(0, 0, 0, 0.16)',
    },
    /**
     * @property {String} iconSize icon 的尺寸大小
     * @default 18
     */
    iconSize: {
      type: Number,
      value: 18,
    },
    /**
     * @property {String} inputStyle input 的自定义样式
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
   * @property {Function} bind:onError 出错时的回调
   * @default
   */

  /**
   * @property {Function} bind:onBlur blur 时的回调
   * @default
   */

  /**
   * @property {Function} bind:onConfirm focus 时的回调
   * @default
   */

  relations: {},
  observers: {
    value(value: number) {
      this.setData({
        inputValue: this.format(value),
      })
    },
    inputValue(inputValue: '' | number) {
      if (inputValue !== '') {
        this.setData({
          illegal: this.judgeLegal(inputValue),
        })
      }
    },
    illegal(illegal: boolean) {
      if (illegal) {
        this.triggerEvent('onError', { value: this.data.inputValue })
      }
    },
  },
  lifetimes: {
    ready() {
      this.setData({
        inputValue: this.format(this.data.inputValue),
      })
    },
  },
  data: {
    inputValue: '',
    illegal: false,
  },
  methods: {
    click(event: WechatMiniprogram.BaseEvent) {
      const { type } = event.currentTarget.dataset
      this.type = type
      this.change()
    },

    // 判断是否超限
    judgeLegal(num: number) {
      const { min, max } = this.properties
      return num < min || num > max
    },

    // 判断是否处于 disabled 状态
    judgeDisabled(type: string) {
      const { disabled, minusDisabled, addDisabled, min, max } = this.properties
      const { inputValue } = this.data
      if (type === 'add') {
        return disabled || addDisabled || inputValue >= max
      }
      return disabled || minusDisabled || inputValue <= min
    },

    emitChange(value: number) {
      const result = this.format(value)
      this.setData({
        inputValue: result,
      })
      this.triggerEvent('onChange', { value: result })
    },

    change() {
      const { type } = this
      if (this.judgeDisabled(type)) {
        return
      }
      const { step } = this.properties
      const { inputValue } = this.data
      const diff = type === 'add' ? step : -step
      const result = add(inputValue, diff)
      this.emitChange(result)
    },

    // filter illegal characters
    filter(value: string) {
      const { isinteger } = this.properties
      let valueFormated = value.replace(/[^0-9.-]/g, '')
      if (isinteger && value.indexOf('.') !== -1) {
        valueFormated = valueFormated.split('.')[0]
      }
      return valueFormated
    },

    format(value: string | number) {
      if (typeof value === 'number') {
        return value
      }
      const result = value === '' ? '' : Number(this.filter(value))
      return result
    },
    inputChange(event: WechatMiniprogram.InputEvent) {
      const { value } = event.detail
      this.emitChange(value)
    },
    inputFocus(event: WechatMiniprogram.InputEvent) {
      this.triggerEvent('onFocus', { event })
    },
    inputBlur(event: WechatMiniprogram.InputEvent) {
      this.triggerEvent('onBlur', { event })
    },
  },
})

Component(componentOptions)
