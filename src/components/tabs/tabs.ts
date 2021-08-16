import ADComponent from '../common/adComponent'

/**
 * @name ad-tabs
 * @description 标签页组件
 * @tutorial http://ad-mob.woa.com/src-components-tabs-tabs
 */

const componentOptions = ADComponent({
  behaviors: [],
  externalClasses: ['adui-class'],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_tabs
     */
    prefix: {
      type: String,
      value: 'ad_tabs',
    },
    /**
     * @property {Any} defaultValue 默认选中项，内部控制
     * @default null
     */
    defaultValue: {
      type: null,
      value: null,
    },
    /**
     * @property {Any} value 已选中项, 外部控制
     * @default null
     */
    value: {
      type: null,
      value: null,
    },
    /**
     * @property {Any} theme 主题
     * @default standard
     * @enum standard: 有滑动条 | light: 没有滑动条
     */
    theme: {
      type: String,
      value: 'standard',
    },
    /**
     * @property {String} tabBarColor 底部横条的颜色
     * @default ''
     */
    tabBarColor: {
      type: String,
      value: '',
    },
    /**
     * @property {String} activeColor 选中态的字体颜色
     * @default ''
     */
    activeColor: {
      type: String,
      value: '',
    },
    /**
     * @property {String} backgroundColor 背景颜色
     * @default ''
     */
    backgroundColor: {
      type: String,
      value: '',
    },
    /**
     * @property {Boolean} banner 是否通栏
     * @default true
     */
    banner: {
      type: Boolean,
      value: true,
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
     * @property {{title: string, value: any, disabled: boolean}[]} tabItems tabs 的子选项 {title: string, value: any, disabled: boolean}
     * @default []
     */
    tabItems: {
      type: Array,
      value: [],
    },
    /**
     * @property {String} itemCustomStyle 自定义选项样式
     * @default ''
     */
    itemCustomStyle: {
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

  /**
   * @property {Function} bind:onChange 值变化的回调
   * @default
   */

  data: {
    tabBarWidth: 0,
    tabBarPoi: 0,
    activeItem: null,
    left: 0,
    transition: false,
  },
  observers: {
    value(value: any) {
      this.propUpdate(false, '', 'activeItem', value)
    },
    defaultValue(defaultValue: any) {
      this.propUpdate(true, 'value', 'activeItem', defaultValue)
    },
    activeItem() {
      this.changeTabBar(true)
    },
  },
  lifetimes: {
    attached() {
      const { tabItems } = this.properties
      this.initState('defaultValue', 'value', 'activeItem', tabItems[0].value)
      this.initMainNode()
    },
    ready() {},
    moved() {},
    detached() {},
  },
  methods: {
    initMainNode() {
      const { theme } = this.properties
      if (theme === 'light') {
        return
      }
      // 获取主节点的位置信息，进行 tabbar 的位置的计算
      this.getNode(`.${this.properties.prefix}`, false).then(
        (res: WechatMiniprogram.BoundingClientRectCallbackResult) => {
          this.setData({
            left: res.left,
          })
        }
      )
    },
    changeTabBar(transition: boolean) {
      const { theme } = this.properties
      if (theme === 'light') {
        return
      }
      this.getNode(`.${this.properties.prefix}_title`, true).then(
        (res: Array<WechatMiniprogram.BoundingClientRectCallbackResult>) => {
          const { activeItem } = this.data
          res.forEach((item) => {
            if (item.dataset.value === activeItem) {
              const itemPoi: number = item.left
              const itemWidth: number = item.width
              this.setData({
                tabBarPoi: itemPoi,
                tabBarWidth: itemWidth,
                transition,
              })
            }
          })
        }
      )
    },
    clickItem(e: any) {
      const { value, disabled } = e.currentTarget.dataset
      if (!disabled && !this.properties.disabled) {
        this.shouldDataUpate('value', 'activeItem', value)
        this.triggerEvent('onChange', { value })
      }
    },
  },
})

Component(componentOptions)