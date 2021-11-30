import ADComponent from '../common/adComponent'

/**
 * @name ad-collapse-item
 * @description 折叠面板子组件，ad-collapse 的子孙组件
 * @tutorial http://ad-mob.woa.com/src-components-collapse-item-collapse-item
 */

const componentOptions = ADComponent({
  behaviors: [],
  externalClasses: ['adui-class'],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_collapse_item
     */
    prefix: {
      type: String,
      value: 'ad_collapse_item',
    },
    /**
     * @property {Boolean} visible 是否展示内容，在单独使用 collapseItem 组件的情况下使用
     * @default null
     */
    visible: {
      type: Boolean,
      value: null,
    },
    /**
     * @property {Any} value 值，组件的的唯一标识，必填
     * @default null
     */
    value: {
      type: null,
      value: null,
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
     * @property {String} content 展开的内容，当内容是纯文本的时候使用
     * @default ''
     */
    content: {
      type: String,
      value: '',
    },
    /**
     * @property {Number} packUpHeight 收起状态下内容区域的高度，一般在单独使用 collapseItem 组件的情况下想要自定义收起时的高度
     */
    packUpHeight: {
      type: Number,
      value: 0,
    },
    /**
     * @property {Boolean} noBorder 是否没有边框
     * @default false
     */
    noBorder: {
      type: Boolean,
      value: false,
      desc: '是否不要边框',
    },
    /**
     * @property {String} icon 右边 icon
     * @default arrow-down
     */
    icon: {
      type: String,
      value: 'arrow-down',
    },
    /**
     * @property {String} iconColor icon 默认颜色
     * @default var(--transparent-gray-600, rgba(0, 0, 0, 0.22))
     */
    iconColor: {
      type: String,
      value: 'var(--transparent-gray-600, rgba(0, 0, 0, 0.22))',
    },
    /**
     * @property {Boolean} noIcon 是否不要 icon
     * @default false
     */
    noIcon: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} noHeader 是否不要 header, 一般是用于自定义头部的情况下，这种情况可以使用 header 这个 slot 来自定义头部
     * @default false
     */
    noHeader: {
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
  // end
  data: {
    noTopBorder: false,
    noBottomBorder: false,
    isFirst: false,
    isLast: false,
    active: false,
    contentHeight: 0,
  },
  relations: {
    '../collapse/collapse': {
      type: 'ancestor',
    },
  },
  observers: {
    visible(visible: boolean) {
      this.setData({
        active: visible,
      })
    },
    active(active: boolean) {
      if (active) {
        this.changeContentHeight()
      } else {
        this.setData({
          contentHeight: 0,
        })
      }
    },
  },
  lifetimes: {
    attached() {
      const { packUpHeight } = this.properties
      this.setData({
        contentHeight: packUpHeight,
      })
    },
    ready() {
      this.initParent('../collapse/collapse')
    },
  },
  methods: {
    isFirst(isFirst: boolean) {
      this.setData({
        isFirst,
      })
    },
    isLast(isLast: boolean) {
      this.setData({
        isLast,
      })
    },
    removeTopBorder(noTopBorder: boolean) {
      this.setData({
        noTopBorder,
      })
    },
    changeContentHeight() {
      const { prefix } = this.properties
      this.getNode(`.${prefix}_main`).then(
        (node: WechatMiniprogram.BoundingClientRectCallbackResult) => {
          this.setData({
            contentHeight: node.height,
          })
        },
      )
    },
    changeStatus(valueChanged: boolean) {
      const { disabled } = this.properties
      if (!disabled) {
        this.setData({
          active: valueChanged,
        })
      }
    },
    changeDisabled(disabledStatus: boolean) {
      this.setData({
        parentDisabled: disabledStatus,
      })
    },
    handleClick() {
      const { disabled, parentDisabled, value } = this.properties
      if (!disabled && !parentDisabled && this.parent) {
        this.parent.clickItem(value)
      }
    },
  },
})

Component(componentOptions)