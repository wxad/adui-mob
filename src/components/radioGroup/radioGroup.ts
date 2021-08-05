import ADComponent from '../common/adComponent'

/**
 * @name ad-radio-group
 * @description 单选组件组，ad-checkbox 组件的祖先组件
 * @tutorial http://ad-mob.woa.com/src-components-radio-group-radio-group
 */

const componentOptions = ADComponent({
  behaviors: [],
  externalClasses: ['adui-class'],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_radio_group
     */
    prefix: {
      type: String,
      value: 'ad_radio_group',
    },
    /**
     * @property {Any} defaultValue 默认选中值，内部控制
     * @default null
     */
    defaultValue: {
      type: null,
      value: null,
    },
    /**
     * @property {Any} value 选中值, 外部控制
     * @default null
     */
    value: {
      type: null,
      value: null,
    },
    /**
     * @property {Boolean} disabled 是否禁用
     * @default false
     */
    disabled: {
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

  /**
   * @property {Function} bind:onChange 值变化的回调
   * @default
   */

  data: {
    activeItem: '',
  },
  relations: {
    '../radio/radio': {
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
    '../radioField/radioField': {
      type: 'ancestor',
    },
  },
  observers: {
    value(value: any) {
      this.propUpdate(false, '', 'activeItem', value)
    },
    defaultValue(defaultValue: any) {
      this.propUpdate(true, 'value', 'activeItem', defaultValue)
    },
    activeItem(activeItem: any) {
      this.updateChildrenState(activeItem)
    },
    disabled(disabled: boolean) {
      this.updateChildrenDisabled(disabled)
    },
  },
  lifetimes: {
    ready() {
      this.initState('defaultValue', 'value', 'activeItem')
    },
    moved() {},
    detached() {},
  },
  methods: {
    init() {
      this.initChildren('../radio/radio')
      const { activeItem } = this.data
      const { disabled } = this.properties
      this.updateChildrenState(activeItem)
      this.updateChildrenDisabled(disabled)
    },
    updateChildrenState(activeItem: any) {
      if (!this.children) {
        return
      }
      this.children.map((item: WechatMiniprogram.Component.TrivialInstance) => {
        item.changeStatus(activeItem)
      })
    },
    updateChildrenDisabled(disabled: boolean) {
      if (!this.children) {
        return
      }
      this.children.map((item: WechatMiniprogram.Component.TrivialInstance) => {
        item.changeDisabled(disabled)
      })
    },
    clickItem(value: any) {
      this.shouldDataUpate('value', 'activeItem', value)
      this.triggerEvent('onChange', { value })
    },
  },
})

Component(componentOptions)
