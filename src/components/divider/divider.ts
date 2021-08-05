import ADComponent from '../common/adComponent'

/**
 * @name ad-divider
 * @description 分割线组件
 * @tutorial http://ad-mob.woa.com/src-components-divider
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_divider
     */
    prefix: {
      type: String,
      value: 'ad_divider',
    },
    /**
     * @property {String} prefix 自定义样式
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
