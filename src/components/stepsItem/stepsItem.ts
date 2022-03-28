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
     * @property {Number} value 每个步骤的唯一标识，必填
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
     * @property {String} icon 步骤的 icon，没有指定的话默认是一个原点
     * @default ''
     */
    icon: {
      type: String,
      value: '',
    },
    /**
     * @property {String} activeIcon 激活态的 icon，用于希望激活态与非激活态下 icon 不同的情况
     * @default ''
     */
    activeIcon: {
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
     * @property {String} normaIconlColor 非选中态 icon 的颜色
     * @default var(--transparent-gray-500, rgba(0, 0, 0, 0.16))
     */
    normaIconlColor: {
      type: String,
      value: 'var(--transparent-gray-500, rgba(0, 0, 0, 0.16))',
    },
    /**
     * @property {String} activeIconColor 选中态 icon 的颜色
     * @default var(--primary-color, #07C160)
     */
    activeIconColor: {
      type: String,
      value: '#07C160',
    },
    /**
     * @property {String} normalTitleColor 非选中态的标题颜色
     * @default 'rgba(0, 0, 0, 0.88)'
     */
    normalTitleColor: {
      type: String,
      value: 'rgba(0, 0, 0, 0.88)',
    },
    /**
     * @property {String} activeTitleColor 选中态的标题颜色
     * @default 'rgba(0, 0, 0, 0.88)'
     */
    activeTitleColor: {
      type: String,
      value: 'rgba(0, 0, 0, 0.88)',
    },
    /**
     * @property {String} titleStyle 自定义标题样式
     * @default ''
     */
    titleStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} normalDescColor 非选中态描述的颜色
     * @default 'rgba(0, 0, 0, 0.36)'
     */
    normalDescColor: {
      type: String,
      value: 'rgba(0, 0, 0, 0.36)',
    },
    /**
     * @property {String} activeDescColor 选中态描述的颜色
     * @default 'rgba(0, 0, 0, 0.36)'
     */
    activeDescColor: {
      type: String,
      value: 'rgba(0, 0, 0, 0.36)',
    },
    /**
     * @property {String} descStyle 自定义描述样式
     * @default ''
     */
    descStyle: {
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
