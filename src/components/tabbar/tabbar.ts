import ADComponent from '../common/adComponent'

/**
 * @name ad-tabbar
 * @description 标签栏组件，ad-tabbar-item 组件的父组件
 * @tutorial http://ad-mob.woa.com/src-components-tabbar-tabbar
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_tabbar
     */
    prefix: {
      type: String,
      value: 'ad_tabbar',
    },
    /**
     * @property {Any} defaultValue 默认被选中的标签，内部控制
     * @default null
     */
    defaultValue: {
      type: null,
      value: null,
    },
    /**
     * @property {Any} value 当前被选中的标签，外部控制
     * @default null
     */
    value: {
      type: null,
      value: null,
    },
    /**
     * @property {String} activeColor 选中态的颜色
     * @default var(--transparent-gray-900, rgba(0, 0, 0, 0.88))
     */
    activeColor: {
      type: String,
      value: 'var(--transparent-gray-900, rgba(0, 0, 0, 0.88))',
      desc: '选中态的颜色',
    },
    /**
     * @property {Boolean} isFixed 是否固定底部
     * @default false
     */
    isFixed: {
      type: Boolean,
      value: false,
      desc: '是否固定底部',
    },
    /**
     * @property {String} normalColor 非选中态的颜色
     * @default var(--transparent-gray-700, rgba(0, 0, 0, 0.36))
     */
    normalColor: {
      type: String,
      value: 'var(--transparent-gray-700, rgba(0, 0, 0, 0.36))',
      desc: '非选中态的颜色',
    },
    /**
     * @property {String} customStyle 自定义样式
     * @default ''
     */
    customStyle: {
      type: String,
      value: '',
      desc: '自定义样式',
    },
  },

  /**
   * @function
   * @name bind:onChange
   * @param {Object} event {event: {detail: {value: any}}}
   * @description 值变化时的回调
   * @default () => {}
   */

  relations: {
    '../tabbarItem/tabbarItem': {
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
      this.propUpdate(false, '', 'activeItem', value)
    },
    defaultValue(defaultValue: any) {
      this.propUpdate(true, 'value', 'activeItem', defaultValue)
    },
    activeItem(activeItem: any) {
      this.updateChildrenState(activeItem)
    },
  },
  lifetimes: {
    ready() {
      this.initState('defaultValue', 'value', 'activeItem')
    },
  },
  data: {
    activeItem: '',
  },
  methods: {
    init() {
      this.initChildren('../tabbarItem/tabbarItem')
      const { normalColor, activeColor } = this.properties
      this.updateChildrenColor(normalColor, activeColor)
    },
    updateChildrenColor(normalColor: string, activeColor: string) {
      if (!this.children) {
        return
      }
      this.children.forEach(
        (item: WechatMiniprogram.Component.TrivialInstance) => {
          item.changeColor(normalColor, activeColor)
        }
      )
    },
    updateChildrenState(value: any) {
      if (!this.children) {
        return
      }
      this.children.forEach(
        (item: WechatMiniprogram.Component.TrivialInstance) => {
          item.changeStatus(value)
        }
      )
    },
    clickItem(value: any) {
      this.shouldDataUpate('value', 'activeItem', value)
      this.triggerEvent('onChange', { value })
    },
  },
})

Component(componentOptions)
