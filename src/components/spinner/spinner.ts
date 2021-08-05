import ADComponent from '../common/adComponent'

/**
 * @name ad-spinner
 * @description 输入组件
 * @tutorial http://ad-mob.woa.com/src-components-spinner-spinner
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_spinner
     */
    prefix: {
      type: String,
      value: 'ad_spinner',
    },
    /**
     * @property {String} color 自定义颜色
     * @default ''
     */
    color: {
      type: String,
      value: '',
    },
    /**
     * @property {String} backgroundColor 背景颜色
     * @default ''
     */
    backgroundColor: {
      type: String,
      value: '',
    },
    /**
     * @property {String} size 组件尺寸
     * @default medium
     * @enum large: 28px*28px | medium: 20px*20px | small: 16px*16px
     */
    size: {
      type: String,
      value: 'medium',
    },
    /**
     * @property {String} text 文字说明
     * @default ''
     */
    text: {
      type: String,
      value: '',
      desc: '文字说明',
    },
    /**
     * @property {String} textColor 文字的颜色
     * @default ''
     */
    textColor: {
      type: String,
      value: '',
    },
    /**
     * @property {String} direction 加载圈和文字的排列方式
     * @default horizontal
     * @enum horizontal: 水平排列 | vertical: 垂直排列
     */
    direction: {
      type: String,
      value: 'horizontal',
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
  relations: {},
  observers: {},
  data: {},
  methods: {},
})

Component(componentOptions)
