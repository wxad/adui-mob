import ADComponent from '../common/adComponent'

/**
 * @name ad-card
 * @description 卡片组件
 * @tutorial http://ad-mob.woa.com/src-components-card-card
 */

const componentOptions = ADComponent({
  behaviors: [],
  // start
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_card
     */
    prefix: {
      type: String,
      value: 'ad_card',
    },
    /**
     * @property {Boolean} banner 是否通栏
     * @default false
     */
    banner: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} interactive 是否开启点击反馈,默认不开启
     * @default false
     */
    interactive: {
      type: Boolean,
      value: false,
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