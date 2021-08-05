import ADComponent from '../common/adComponent'

/**
 * @name ad-badge
 * @description 徽标组件
 * @tutorial http://ad-mob.woa.com/src-components-badge-badge
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_badge
     */
    prefix: {
      type: String,
      value: 'ad_badge',
    },
    /**
     * @property {Boolean} isDot 是否是红点
     * @default false
     */
    isDot: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} isFixed 是否固定在右上角
     * @default false
     */
    isFixed: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} contentStyle 内容区域的自定义样式
     * @default ''
     */
    contentStyle: {
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
  relations: {},
  observers: {},
  data: {},
  methods: {},
})

Component(componentOptions)