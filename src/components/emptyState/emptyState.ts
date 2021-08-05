import ADComponent from '../common/adComponent'

/**
 * @name ad-empty-state
 * @description 空状态组件
 * @tutorial http://ad-mob.woa.com/src-components-empty-state-empty-state
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_empty_state
     */
    prefix: {
      type: String,
      value: 'ad_empty_state',
    },
    /**
     * @property {String} icon 自定义 icon，使用的是原生的 image 组件
     * @default ''
     */
    icon: {
      type: String,
      value: '',
    },
    /**
     * @property {String} iconMode icon 的缩放模式
     * @default widthFix
     */
    iconMode: {
      type: String,
      value: 'widthFix',
    },
    /**
     * @property {String} iconColor icon 的颜色
     * @default var(--transparent-gray-500, rgba(0, 0, 0, 0.16))
     */
    iconColor: {
      type: String,
      value: 'var(--transparent-gray-500, rgba(0, 0, 0, 0.16))',
    },
    /**
     * @property {String} iconStyle icon 的自定义样式
     * @default ''
     */
    iconStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} text icon 下方文字描述
     * @default ''
     */
    text: {
      type: String,
      value: '',
    },
    /**
     * @property {String} textStyle 自定义文字的样式
     * @default ''
     */
    textStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} type 空状态类型
     * @default list
     * @enum search: 搜索结果为空 | store: 门店列表为空 | list: 列表为空 | filter: 筛选项为空 | news: 没有新通知
     */
    type: {
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
  // end
  relations: {},
  observers: {},
  data: {},
  methods: {},
})

Component(componentOptions)
