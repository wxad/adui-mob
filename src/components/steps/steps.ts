import ADComponent from '../common/adComponent'

/**
 * @name ad-steps
 * @description 步骤组件，ad-steps-item 的父组件
 * @tutorial http://ad-mob.woa.com/src-components-steps-steps
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_steps
     */
    prefix: {
      type: String,
      value: 'ad_steps',
    },
    /**
     * @property {Number} value 进度值
     * @default 0
     */
    value: {
      type: Number,
      value: 0,
    },
    /**
     * @property {String} direction 排列方向
     * @default horizontal
     * @enum horizontal | vertical
     */
    direction: {
      type: String,
      value: 'horizontal',
    },
    /**
     * @property {Boolean} banner 是否撑满，在 direction 为 horizontal 时有效，默认是撑满的
     * @default true
     */
    banner: {
      type: Boolean,
      value: true,
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
  // end
  relations: {
    '../stepsItem/stepsItem': {
      type: 'descendant',
      linked() {
        this.init()
      },
      linkChanged() {
        this.init()
      },
      unlinked() {
        this.init()
      },
    },
  },
  observers: {
    value(value: Number) {
      if (!this.children) {
        return
      }
      this.changeStepStatus(value)
    },
  },
  data: {},
  lifetimes: {
    ready() {
      this.init()
    },
  },
  methods: {
    init() {
      this.initChildren('../stepsItem/stepsItem')
      const { value, direction } = this.properties
      this.judgeStepOrder()
      if (direction === 'horizontal') {
        this.changeStepNumber()
      }
      if (direction === 'vertical') {
        this.changeStepDirection()
      }
      if (value !== null) {
        this.changeStepStatus(value)
      }
    },
    changeStepNumber() {
      if (!this.children) {
        return
      }
      this.children.forEach(
        (step: WechatMiniprogram.Component.TrivialInstance) => {
          step.changeNumber(this.children.length)
        }
      )
    },
    judgeStepOrder() {
      if (!this.children) {
        return
      }
      this.children.forEach(
        (step: WechatMiniprogram.Component.TrivialInstance) => {
          step.judgeOrder(this.children.length)
        }
      )
    },
    changeStepStatus(value: number) {
      if (!this.children) {
        return
      }
      this.children.forEach(
        (step: WechatMiniprogram.Component.TrivialInstance) => {
          step.changeStatus(value)
        }
      )
    },
    changeStepDirection() {
      if (!this.children) {
        return
      }
      this.children.forEach(
        (step: WechatMiniprogram.Component.TrivialInstance) => {
          step.changeDirection()
        }
      )
    },
  },
})

Component(componentOptions)
