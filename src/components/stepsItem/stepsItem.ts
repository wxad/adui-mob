import ADComponent from '../common/adComponent'

/**
 * @name ad-steps-item
 * @description 步骤子组件，ad-steps 的子组件
 * @tutorial http://ad-mob.woa.com/src-components-steps-item-steps-item
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_steps_item
     */
    prefix: {
      type: String,
      value: 'ad_steps_item',
    },
    /**
     * @property {Number} value 唯一标识
     * @default 0
     */
    value: {
      type: Number,
      value: 0,
    },
    /**
     * @property {String} title 步骤的标题
     * @default ''
     */
    title: {
      type: String,
      value: '',
    },
    /**
     * @property {String} desc 步骤的描述说明
     * @default ''
     */
    desc: {
      type: String,
      value: '',
    },
    /**
     * @property {String} icon icon 名称
     * @default ''
     */
    icon: {
      type: String,
      value: '',
    },
    /**
     * @property {Number} iconSize icon 的尺寸
     * @default 18
     */
    iconSize: {
      type: Number,
      value: 18,
    },
    /**
     * @property {String} stepNumber 步骤数值
     * @default ''
     */
    stepNumber: {
      type: String,
      value: '',
    },
    /**
     * @property {String} normalColor 非选中态的颜色
     * @default var(--transparent-gray-500, rgba(0, 0, 0, 0.16))
     */
    normalColor: {
      type: String,
      value: 'var(--transparent-gray-500, rgba(0, 0, 0, 0.16))',
    },
    /**
     * @property {String} activeColor 选中态的颜色
     * @default var(--primary-color, #07C160)
     */
    activeColor: {
      type: String,
      value: '#07C160',
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
  relations: {
    '../steps/steps': {
      type: 'ancestor',
    },
  },
  observers: {},
  data: {
    isFirst: false,
    isLast: false,
    active: false,
    direction: 'horizontal',
    stepCount: 1,
  },
  lifetimes: {},
  methods: {
    judgeOrder(stepNumber: number) {
      const { value } = this.properties
      this.setData({
        isFirst: value === 0,
        isLast: value === stepNumber - 1,
      })
    },
    changeDirection() {
      this.setData({
        direction: 'vertical',
      })
    },
    changeStatus(parenValue: number) {
      const { value } = this.properties
      if (!(value > parenValue)) {
        this.setData({
          active: true,
        })
      }
    },
    changeNumber(number: number) {
      this.setData({
        stepCount: number,
      })
    },
  },
})

Component(componentOptions)
