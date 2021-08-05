import ADComponent from '../common/adComponent'

/**
 * @name ad-grid
 * @description 宫格父组件，ad-grid-item 组件的父组件
 * @tutorial http://ad-mob.woa.com/src-components-grid-grid
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_grid
     */
    prefix: {
      type: String,
      value: 'ad_grid',
    },
    /**
     * @property {Boolean} hasBorder 是否有边框
     * @default false
     */
    hasBorder: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Number} gutter 子元素的间距
     * @default 0
     */
    gutter: {
      type: Number,
      value: 0,
    },
    /**
     * @property {Number} innerGutter 子元素的内间距
     * @default 0
     */
    innerGutter: {
      type: Number,
      value: 0,
    },
    /**
     * @property {Number} columnNumber 列数目
     * @default 1
     */
    columnNumber: {
      type: Number,
      value: 1,
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
  relations: {
    '../gridItem/gridItem': {
      type: 'child',
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
  observers: {},
  lifetimes: {
    created() {
      this.children = []
    },
    ready() {},
  },
  data: {
    span: 12,
  },
  methods: {
    init() {
      this.initChildren('../gridItem/gridItem')
      this.changeChildStatus()
    },
    changeChildStatus() {
      if (!this.children) return
      // const { hasBorder } = this.properties
      const { gutter } = this.properties
      const { columnNumber } = this.properties
      this.children.map(
        (item: WechatMiniprogram.Component.TrivialInstance, index: number) => {
          item.changeGutter(gutter)
          // item.changeHasBorder(hasBorder)
          // item.changeBorderEdge(((index + 1) % columnNumber === 0), this.judgeIsBottomEdge(this.children.length, index + 1, columnNumber))
          item.changeColumnNumber(columnNumber)
        }
      )
    },
    // judgeIsBottomEdge(itemNumber: number, itemIndex: Number, columnNumber: number) {
    //   const rowNumber = Math.ceil(itemNumber / columnNumber)
    //   if (rowNumber <= 1) return true
    //   const itemRow = Math.ceil(itemIndex / columnNumber)
    //   console.log('paki 222', rowNumber, itemRow)
    //   if (itemRow < rowNumber) return false
    //   return true
    // },
  },
})

Component(componentOptions)
