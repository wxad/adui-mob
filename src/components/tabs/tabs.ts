import ADComponent from '../common/adComponent'

/**
 * @name ad-tabs
 * @description 标签页组件
 * @tutorial http://ad-mob.woa.com/src-components-tabs-tabs
 */

interface ITab {
  value: any
  title: string
}

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
     * @property {Boolean} scrollable 是否可以滚动，可滚动模式下不会通栏
     * @default false
     */
    scrollable: {
      type: Boolean,
      value: false,
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
     * @property {Boolean} noTitle 是否隐藏标题，一般用在完全自定义子项的时候
     * @default false
     */
    noTitle: {
      type: Boolean,
      value: false,
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
     * @property {String} itemActiveStyle 自定义选项选中时的样式
     * @default ''
     */
    itemActiveStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} tabBarStyle 底部横条自定义样式
     * @default ''
     */
    tabBarStyle: {
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
   * @function
   * @name bind:onChange
   * @param {Object} event {event: {detail: {value: any}}}
   * @description 值变化时的回调
   * @default () => {}
   */

  /**
   * @function
   * @name bind:onClick
   * @param {Object} event {event: {detail: {value: any}}}
   * @description 点击子项时候的回调，主要使用场景为当点击的时候触发某些效果，比如点击的时候滚动到页面的固定位置
   * @default () => {}
   */

  data: {
    tabBarWidth: 0,
    tabBarPoi: 0,
    activeItem: null,
    left: 0,
    transition: false,
    transformX: 0,
  },
  observers: {
    value(value: any) {
      this.propUpdate(false, '', 'activeItem', value)
    },
    defaultValue(defaultValue: any) {
      this.propUpdate(true, 'value', 'activeItem', defaultValue)
    },
    activeItem() {
      const { scrollable } = this.properties
      this.changeTabBar(true)
      if (scrollable) {
        this.scrollTabs()
      }
    },
  },
  lifetimes: {
    attached() {
      const { tabItems } = this.properties
      this.initState('defaultValue', 'value', 'activeItem', tabItems[0].value)
    },
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
        },
      )
    },
    async changeTabBar(transition: boolean) {
      const { theme } = this.properties
      if (theme === 'light') {
        return
      }
      // 获取主节点的位置信息，进行 tabbar 的位置的计算
      const tabLeft = await this.getNode(`.${this.properties.prefix}`, false).then(
        (res: WechatMiniprogram.BoundingClientRectCallbackResult) => {
          return res.left
        },
      )
      this.getNode(`.${this.properties.prefix}_title`, true).then(
        (res: Array<WechatMiniprogram.BoundingClientRectCallbackResult>) => {
          const { activeItem } = this.data
          res.forEach((item) => {
            if (item.dataset.value === activeItem) {
              const itemPoi: number = item.left
              const itemWidth: number = item.width
              this.setData({
                left: tabLeft,
                tabBarPoi: itemPoi,
                tabBarWidth: itemWidth,
                transition,
              })
            }
          })
        },
      )
    },
    async scrollTabs() {
      const { prefix, tabItems } = this.properties
      const { activeItem } = this.data
      const that = this
      const currentIndex = tabItems.findIndex((item: ITab) => item.value === activeItem)
      const tabItemList = await this.getNode(`.${prefix}_item`, true).then((res: Array<WechatMiniprogram.BoundingClientRectCallbackResult>) => res)
      if (currentIndex > 0) {
        const currentRect = tabItemList[currentIndex]
        this.getNode(`.${prefix}_scroll`, false).then((res: WechatMiniprogram.BoundingClientRectCallbackResult) => {
          if (!res) return console.log('找不到元素')
          const scrollWidth = res.width
          let transformX = tabItemList.slice(0, currentIndex).reduce((prev: any, curr: any) => prev + curr.width, 0)
          transformX += (currentRect.width - scrollWidth) / 2
          setTimeout(() => {
            that.setData({
              transformX,
            })
          }, 250)
        }).catch((err: any) => {
          console.log(err)
        })
      }
    },
    clickItem(e: any) {
      const { value, disabled } = e.currentTarget.dataset
      if (!disabled && !this.properties.disabled) {
        this.shouldDataUpate('value', 'activeItem', value)
        this.triggerEvent('onChange', { value })
        this.triggerEvent('onClick', { value })
      }
    },
  },
})

Component(componentOptions)
