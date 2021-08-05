import ADComponent from '../common/adComponent'

/**
 * @name ad-action-sheet-item
 * @description 行动面板子组件，ad-action-sheet 的子孙组件
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_action_sheet_item
     */
    prefix: {
      type: String,
      value: 'ad_action_sheet_item',
    },
    /**
     * @property {Any} value 值，actionSheetItem 的唯一标识，必填
     * @default null
     */
    value: {
      type: null,
      value: null,
    },
    /**
     * @property {String} title 标题
     * @default ''
     */
    title: {
      type: String,
      value: '',
    },
    /**
     * @property {String} desc 标题下方描述
     * @default ''
     */
    desc: {
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
     * @property {String} loadingText 加载时的文字说明，默认是空字符串，在没有给定这个值的情况下，保留原来的文字，如果给了，那么在loading 的时候后会隐藏原来的标题
     * @default ''
     */
    loadingText: {
      type: String,
      value: '',
    },
    /**
     * @property {String} loadingColor 加载态的文字的颜色
     * @default var(--primary-color, #07c160)
     */
    loadingColor: {
      type: String,
      value: 'var(--primary-color, #07c160)',
    },
    /**
     * @property {Boolean} disabled 是否禁用
     * @default false
     */
    disabled: {
      type: Boolean,
      value: false,
      desc: '是否禁用',
    },
    /**
     * @property {String} customStyle 自定义样式
     * @default false
     */
    customStyle: {
      type: String,
      value: '',
      desc: '自定义样式',
    },
  },
  relations: {
    '../actionSheet/actionSheet': {
      type: 'ancestor',
    },
  },
  observers: {},
  data: {},
  lifetimes: {
    ready() {
      this.initParent('../actionSheet/actionSheet')
    },
  },
  methods: {
    click() {
      const { disabled, loading } = this.properties
      if (!disabled && !loading) {
        if (this.parent) {
          const { value } = this.properties
          this.parent.clickItem(value)
        }
      }
    },
  },
})

Component(componentOptions)
