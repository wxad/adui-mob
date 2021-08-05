import ADComponent from '../common/adComponent'

/**
 * @name ad-grid-item
 * @description 宫格子组件，ad-grid 组件的子组件
 * @tutorial http://ad-mob.woa.com/src-components-grid-item-grid-item
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_grid_item
     */
    prefix: {
      type: String,
      value: 'ad_grid_item',
    },
    /**
     * @property {Boolean} interactive 是否是可交互的，是的情况下点击背景颜色会变化
     * @default true
     */
    interactive: {
      type: Boolean,
      value: true,
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
     * @property {String} descStyle desc 自定义样式
     * @default ''
     */
    descStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} icon icon 的名字
     * @default ''
     */
    icon: {
      type: String,
      value: '',
      desc: 'icon 的名字',
    },
    /**
     * @property {Number} iconSize icon 的大小
     * @default 24
     */
    iconSize: {
      type: Number,
      value: 24,
    },
    /**
     * @property {String} iconColor icon 颜色
     * @default var(--transparent-gray-900, rgba(0, 0, 0, 0.88))
     */
    iconColor: {
      type: String,
      value: 'var(--transparent-gray-900, rgba(0, 0, 0, 0.88))',
    },
    /**
     * @property {String} badgeContent 右上方的消息提醒的内容
     * @default ''
     */
    badgeContent: {
      type: String,
      value: '',
    },
    /**
     * @property {Boolean} isBadgeDot 右上方的提醒内容是否是圆点
     * @default false
     */
    isBadgeDot: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} customStyle 自定义样式
     * @default ''
     */
    customStyle: {
      type: String,
      value: '',
    },
  },
  // end
  relations: {
    '../grid/grid': {
      type: 'parent',
    },
  },
  observers: {},
  data: {
    columnNumber: 1,
    gutter: 0,
    innerGutter: 0,
    hasBorder: false,
    isRightEdge: false,
    isBottomEdge: false,
  },
  lifetimes: {
    ready() {
      this.init()
    },
  },
  methods: {
    init() {
      this.initParent('../grid/grid')
    },
    changeColumnNumber(columnNumber: number) {
      this.setData({
        columnNumber,
      })
    },
    changeHasBorder(hasBorder: boolean) {
      if (hasBorder !== this.data.hasBorder) {
        this.setData({
          hasBorder,
        })
      }
    },
    changeBorderEdge(isRightEdge: boolean, isBottomEdge: boolean) {
      this.setData({
        isRightEdge,
        isBottomEdge,
      })
    },
    changeGutter(gutter: number, innerGutter: number) {
      if (gutter !== this.data.gutter) {
        this.setData({
          gutter,
        })
      }
      if (innerGutter !== this.data.innerGutter) {
        this.setData({
          innerGutter,
        })
      }
    },
  },
})

Component(componentOptions)
