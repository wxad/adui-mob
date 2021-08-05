import ADComponent from '../common/adComponent'

/**
 * @name ad-collapse
 * @description 折叠面板父组件，ad-collapse-item 的祖父组件
 * @tutorial http://ad-mob.woa.com/src-components-collapse-collapse
 */

const componentOptions = ADComponent({
  behaviors: [],
  externalClasses: ['adui-class'],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_collapse
     */
    prefix: {
      type: String,
      value: 'ad_collapse',
    },
    /**
     * @property {Any[]} defaultValue 默认打开的面板，内部控制，普通模式下是数组，手风琴模式下是字符串或者数字
     * @default null
     */
    defaultValue: {
      type: Array,
      optionalTypes: [null],
      value: null,
    },
    /**
     * @property {Any[]} value 展开的面板，外部控制，普通模式下是数组，手风琴模式下是字符串或者数字
     * @default null
     */
    value: {
      type: Array,
      optionalTypes: [null],
      value: null,
    },
    /**
     * @property {Boolean} accordion 是否开启手风琴模式，这种模式下一次只能展开一个子元素，其他的子元素会相应收起来
     * @default false
     */
    accordion: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} noTopBorder 是否没有顶部边框
     * @default false
     */
    noTopBorder: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} noBottomBorder 是否没有底部边框
     * @default false
     */
    noBottomBorder: {
      type: Boolean,
      value: false,
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
    '../collapseItem/collapseItem': {
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
  },
  observers: {
    value(value: any) {
      this.propUpdate(false, '', 'activeItems', value)
    },
    defaultValue(defaultValue: any) {
      this.propUpdate(true, 'value', 'activeItems', defaultValue)
    },
    activeItems(activeItems: any) {
      this.updateChildrenState(activeItems)
    },
    disabled(disabled: boolean) {
      this.updateChildrenDisabled(disabled)
    },
  },
  lifetimes: {
    ready() {
      const { accordion } = this.properties
      let activeItems
      if (accordion) {
        activeItems = null
      } else {
        activeItems = []
      }
      this.initState('defaultValue', 'value', 'activeItems', activeItems)
    },
  },
  methods: {
    init() {
      this.initChildren('../collapseItem/collapseItem')
      const { activeItems } = this.data
      const { disabled } = this.properties
      this.updateChildrenState(activeItems)
      this.updateChildrenDisabled(disabled)
      this.changeChildrenBorder()
    },
    updateChildrenState(activeItems: any) {
      if (!this.children) {
        return
      }
      const { accordion } = this.properties
      this.children.map((item: WechatMiniprogram.Component.TrivialInstance) => {
        const { value } = item.data
        if (accordion) {
          item.changeStatus(activeItems === value)
        } else {
          item.changeStatus(activeItems.includes(value))
        }
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
      const { accordion } = this.properties
      const { activeItems } = this.data
      let valueFinal = null
      if (accordion) {
        valueFinal = value === activeItems ? null : value
      }
      if (!accordion) {
        if (activeItems.includes(value)) {
          valueFinal = activeItems.filter((item: any) => value !== item)
        } else {
          activeItems.push(value)
          valueFinal = activeItems
        }
      }
      this.shouldDataUpate('value', 'activeItems', valueFinal)
      this.triggerEvent('onChange', { value: valueFinal })
    },
    changeChildrenBorder() {
      const { noTopBorder } = this.properties
      if (!this.children) {
        return
      }
      this.children.forEach((item: any, index: number) => {
        item.isFirst(index === 0)
        item.removeTopBorder(index === 0 && noTopBorder)
        item.isLast(index === this.children.length - 1)
        // item.removeBottomBorder(index === this.children.length - 1 && noBottomBorder)
      })
    },
  },
})

Component(componentOptions)