import ADComponent from '../common/adComponent'

/**
 * @name ad-load-more
 * @description 页底提示组件
 * @tutorial http://ad-mob.woa.com/src-components-load-more-load-more
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_load_more
     */
    prefix: {
      type: String,
      value: 'ad_load_more',
      desc: '默认类名前缀',
    },
    /**
     * @property {String} text 描述文本
     * @default ''
     */
    text: {
      type: String,
      value: '',
    },
    /**
     * @property {Boolean} loading 是否处于加载态
     * @default false
     */
    loading: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} spinnerColor spinner 的颜色
     * @default ''
     */
    spinnerColor: {
      type: String,
      value: '',
    },
    /**
     * @property {String} spinnerText 加载态的文本
     * @default 加载中...
     */
    spinnerText: {
      type: String,
      value: '加载中...',
    },
    /**
     * @property {String} spinnerTextColor 加载态文字的颜色
     * @default var(--transparent-gray-700, rgba(0, 0, 0, 0.36))
     */
    spinnerTextColor: {
      type: String,
      value: 'var(--transparent-gray-700, rgba(0, 0, 0, 0.36))',
    },
    /**
     * @property {String} spinnerSize spinner 的尺寸
     * @default medium
     * @enum large: 16px*16px | medium: 20px*20px | large: 28px*28px
     */
    spinnerSize: {
      type: String,
      value: 'medium',
    },
    /**
     * @property {Boolean} hasLine 是否有左右的横条
     * @default true
     */
    hasLine: {
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
  relations: {},
  observers: {},
  data: {},
  methods: {},
})

Component(componentOptions)
