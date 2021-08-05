import ADComponent from '../common/adComponent'

/**
 * @name ad-cell-group
 * @description 列表父组件，ad-cell 组件的祖先组件
 * @tutorial http://ad-mob.woa.com/src-components-cell-group-cell-group
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_cell_group
     */
    prefix: {
      type: String,
      value: 'ad_cell_group',
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
     * @property {String} customStyle 自定义样式
     * @default ''
     */
    customStyle: {
      type: String,
      value: '',
    },
  },
  // end
  data: {},
  observers: {
    'noTopBorder, noBottomBorder': function(
      noTopBorder: boolean,
      noBottomBorder: boolean,
    ) {
      this.changeChildrenBorder(noTopBorder, noBottomBorder)
    },
  },
  relations: {
    '../cell/cell': {
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
  lifetimes: {},
  methods: {
    init() {
      this.initChildren('../cell/cell')
      const { noTopBorder, noBottomBorder } = this.properties
      this.changeChildrenBorder(noTopBorder, noBottomBorder)
    },
    changeChildrenBorder(noTopBorder?: boolean, noBottomBorder?: boolean) {
      if (!this.children) {
        return
      }
      this.children.forEach((item: any, index: number) => {
        // item.isFirst(index === 0)
        item.removeTopBorder(index === 0 && noTopBorder)
        // item.isLast(index === this.children.length - 1)
        item.removeBottomBorder(index !== this.children.length - 1 ? true : noBottomBorder)
      })
    },
  },
})

Component(componentOptions)