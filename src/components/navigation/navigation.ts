import ADComponent from '../common/adComponent'

/**
 * @name ad-navigation
 * @description 顶部导航组件
 * @tutorial http://ad-mob.woa.com/src-components-navigation-navigation
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_navigation
     */
    prefix: {
      type: String,
      value: 'ad_navigation',
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
     * @property {String} background 背景颜色
     * @default ''
     */
    background: {
      type: String,
      value: '',
    },
    /**
     * @property {String} color 字体颜色
     * @default ''
     */
    color: {
      type: String,
      value: 'black',
    },
    /**
     * @property {String} icon 左边的 icon，默认没有图标，如果想自定义的话可以通过左边的 slot 来自定义
     * @default ''
     * @enum back | home | close
     */
    icon: {
      type: String,
      value: '',
    },
    /**
     * @property {String} iconColor 左边的 icon，默认没有图标，如果想自定义的话可以通过左边的 slot 来自定义
     * @default ''
     */
    iconColor: {
      type: String,
      value: '',
    },
    /**
     * @property {Boolean} isFixed position 是否是 fixed，默认是 false
     * @default false
     */
    isFixed: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} leftStyle 头部左边的自定义样式
     * @default ''
     */
    leftStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} centerStyle 头部中间的自定义样式
     * @default ''
     */
    centerStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} customStyle 外部传入的自定义样式
     * @default ''
     */
    customStyle: {
      type: String,
      value: '',
    },
  },

  /**
   * @function
   * @name bind:onClose
   * @description 关闭的回调
   * @default () => {}
   */

  relations: {},
  observers: {},
  lifetimes: {
    attached() {
      const isSupport = !!wx.getMenuButtonBoundingClientRect
      const rect = wx.getMenuButtonBoundingClientRect
        ? wx.getMenuButtonBoundingClientRect()
        : null
      wx.getSystemInfo({
        success: (res) => {
          const ios = !!(res.system.toLowerCase().search('ios') + 1)
          this.setData({
            ios,
            statusBarHeight: res.statusBarHeight,
            innerWidth: isSupport ? `width:${rect!.left}px` : '',
            innerPaddingRight: isSupport
              ? `padding-right:${res.windowWidth - rect!.left}px`
              : '',
            leftWidth: isSupport ? res.windowWidth - rect!.left : '',
          })
        },
      })
    },
  },
  data: {
    displayStyle: '',
  },
  methods: {
    close() {
      this.triggerEvent('onClose')
    },
  },
})

Component(componentOptions)
