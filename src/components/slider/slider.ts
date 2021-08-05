import ADComponent from '../common/adComponent'
import { touch } from '../common/touch'

/**
 * @name ad-slider
 * @description 滑动条组件
 * @tutorial http://ad-mob.woa.com/src-components-slider-slider
 */

const componentOptions = ADComponent({
  behaviors: [touch],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_slider
     */
    prefix: {
      type: String,
      value: 'ad_slider',
    },
    /**
     * @property {number|number[]} defaultValue 默认值，内部控制, 单滑块模式下为 number，双滑块模式下 为 number[]
     * @default null
     */
    defaultValue: {
      type: null,
      value: null,
    },
    /**
     * @property {number|number[]} value 值，外部控制，单滑块模式下为 number，双滑块模式下 为 number[]
     * @default null
     */
    value: {
      type: null,
      value: null,
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
     * @property {Number} min 最小值
     * @default 0
     */
    min: {
      type: Number,
      value: 0,
    },
    /**
     * @property {Number} max 最大值
     * @default 100
     */
    max: {
      type: Number,
      value: 100,
    },
    /**
     * @property {Boolean} range 双滑块模式
     * @default false
     */
    range: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Number} step 步长，必须大于0，可以是整数也可以是小数
     * @default 1
     */
    step: {
      type: Number,
      value: 1,
    },
    /**
     * @property {Boolean} hasTip 是否有顶部提示
     * @default false
     */
    hasTip: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {{ position: number, value: string }[]} marks 刻度标记, 每个子元素的格式为 { position: number, value: string }
     * @default []
     */
    marks: {
      type: Array,
      value: [],
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
   * @property {Function} bind:onDragStart 开始滑动时的回调
   * @default
   */

  data: {
    innerValue: [0, 0],
    startActive: false,
    endActive: false,
  },
  observers: {
    value(value: any) {
      if (Array.isArray(value)) {
        this.propUpdate(
          false,
          '',
          'innerValue',
          value.map((item: any) => this.formatNumToPercent(item))
        )
      } else {
        this.propUpdate(false, '', 'innerValue', [
          0,
          this.formatNumToPercent(value),
        ])
      }
    },
    defaultValue(defaultValue: any) {
      if (Array.isArray(defaultValue)) {
        this.propUpdate(
          true,
          'value',
          'innerValue',
          defaultValue.map((item: any) => this.formatNumToPercent(item))
        )
      } else {
        this.propUpdate(true, 'value', 'innerValue', [
          0,
          this.formatNumToPercent(defaultValue),
        ])
      }
    },
  },
  lifetimes: {
    attached() {
      const { prefix } = this.properties
      this.getNode(`.${prefix}`, false).then(
        (rect: WechatMiniprogram.BoundingClientRectCallbackResult) => {
          this.left = rect.left
          this.width = rect.width
          this.right = this.left + this.width
        }
      )
    },
    ready() {},
  },
  methods: {
    getRange() {
      const { max, min } = this.data
      return max - min
    },
    // 将数字转化为百分比
    formatNumToPercent(value: number) {
      const range = this.getRange()
      if (range === 0) {
        return console.log('请先确定数值范围')
      }
      const { min, max } = this.properties
      if (value > max) {
        return 100
      }
      if (value < min) {
        return 0
      }
      return ((value - min) / range) * 100
    },
    // 将百分比转化为数值
    formatPercentToNum(value: number) {
      const range = this.getRange()
      const { min, max } = this.properties
      if (value === 0) {
        return min
      }
      if (value === 100) {
        return max
      }
      return Math.round((range * value) / 100 + min)
    },
    // 计算位置的百分比
    formatPoi(event: WechatMiniprogram.BaseEvent) {
      const { step } = this.properties
      const { clientX } = event.touches[0]
      const { left, width } = this
      const stepNumber = this.getRange() / step
      const stepWidth = width / stepNumber
      const diff = Math.round((clientX - left) / stepWidth) * stepWidth
      let value = (diff / width) * 100
      if (diff < 0) {
        value = 0
      }
      if (diff > this.width) {
        value = 100
      }
      return value
    },
    // 数据分情况处理
    formatValue(range: boolean, newValue: any) {
      if (range) {
        return newValue.map((item: number) => this.formatPercentToNum(item))
      }
      return this.formatPercentToNum(newValue[1])
    },
    // 数据更新
    updateValue(event: WechatMiniprogram.BaseEvent) {
      const { range } = this.properties
      const { innerValue } = this.data
      const { type } = event.currentTarget.dataset
      const width = this.formatPoi(event)
      if (type === 'end') {
        const finalEnd = width <= innerValue[0] ? innerValue[0] : width
        innerValue[1] = finalEnd
      }
      if (type === 'start') {
        const finalStart = width >= innerValue[1] ? innerValue[1] : width
        innerValue[0] = finalStart
      }
      this.shouldDataUpate('value', 'innerValue', innerValue)
      this.triggerEvent('onChange', {
        value: this.formatValue(range, innerValue),
      })
    },
    onTouchStart(event: WechatMiniprogram.BaseEvent) {
      const { disabled } = this.properties
      const { type } = event.currentTarget.dataset
      if (disabled) {
        return
      }
      if (type === 'start') {
        this.setData({
          startActive: true,
        })
      }
      if (type === 'end') {
        this.setData({
          endActive: true,
        })
      }
      this.dragStatus = 'start'
    },
    onTouchMove(event: WechatMiniprogram.BaseEvent) {
      const { disabled } = this.properties
      if (disabled) {
        return
      }
      const { type } = event.currentTarget.dataset
      const { startActive, endActive } = this.data
      if (type === 'start' && endActive) {
        return
      }
      if (type === 'end' && startActive) {
        return
      }
      if (this.dragStatus === 'start') {
        this.triggerEvent('onDragStart')
      }
      this.dragStatus = 'draging'
      this.updateValue(event)
    },
    onTouchEnd(event: WechatMiniprogram.BaseEvent) {
      const { disabled } = this.properties
      const { type } = event.currentTarget.dataset
      if (disabled) {
        return
      }
      if (type === 'start') {
        this.setData({
          startActive: false,
        })
      }
      if (type === 'end') {
        this.setData({
          endActive: false,
        })
      }
      if (this.dragStatus === 'draging') {
        // this.triggerEvent('onDragEnd', { value: this.data.innerValue })
      }
    },
    onClick(event: WechatMiniprogram.BaseEvent) {
      const { disabled } = this.properties
      if (disabled) {
        return
      }
      this.updateValue(event)
    },
  },
})

Component(componentOptions)
