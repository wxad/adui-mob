import ADComponent from '../common/adComponent'

/**
 * @name ad-checkbox-group
 * @description 多选父件组，ad-checkbox 组件的祖先组件
 * @tutorial http://ad-mob.woa.com/src-components-checkbox-group-checkbox-group
 */

const componentOptions = ADComponent({
  behaviors: [],
  externalClasses: ['adui-class'],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_checkbox_group
     */
    prefix: {
      type: String,
      value: 'ad_checkbox_group',
    },
    /**
     * @property {Any[]} defaultValue 默认已选中的值，内部控制
     * @default null
     */
    defaultValue: {
      type: Array,
      value: null,
    },
    /**
     * @property {Any[]} value 选中的值，外部控制
     * @default null
     */
    value: {
      type: Array,
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
    activeItems: [],
  },
  relations: {
    '../checkbox/checkbox': {
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
    '../checkboxField/checkboxField': {
      type: 'descendant',
    },
  },
  observers: {
    value(value: Array<any>) {
      this.propUpdate(false, '', 'activeItems', value)
    },
    defaultValue(defaultValue: Array<any>) {
      this.propUpdate(true, 'value', 'activeItems', defaultValue)
    },
    activeItems(activeItems: Array<any>) {
      this.updateChildrenState(activeItems)
    },
    disabled(disabled: boolean) {
      this.updateChildrenDisabled(disabled)
    },
  },
  lifetimes: {
    ready() {
      this.initState('defaultValue', 'value', 'activeItems')
    },
  },
  methods: {
    init() {
      this.initChildren('../checkbox/checkbox')
      const { activeItems } = this.data
      const { disabled } = this.properties
      this.updateChildrenState(activeItems)
      this.updateChildrenDisabled(disabled)
    },
    updateChildrenState(activeItems: Array<any>) {
      if (!this.children) {
        return
      }
      this.children.map((item: WechatMiniprogram.Component.TrivialInstance) => {
        const { value } = item.data
        item.changeStatus(activeItems.includes(value))
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
      const { activeItems } = this.data
      let valueFinal = null
      if (activeItems.includes(value)) {
        valueFinal = activeItems.filter((item: any) => value !== item)
      } else {
        activeItems.push(value)
        valueFinal = activeItems
      }
      this.shouldDataUpate('value', 'activeItems', valueFinal)
      this.triggerEvent('onChange', { value: valueFinal })
    },
  },
})

Component(componentOptions)
