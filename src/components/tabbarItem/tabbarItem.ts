import ADComponent from '../common/adComponent'

/**
 * @name ad-tabbar-item
 * @description 标签栏组件，ad-tabbar 组件的子组件
 * @tutorial http://ad-mob.woa.com/src-components-tabbar-item-tabbar-item
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_tabbar_item
     */
    prefix: {
      type: String,
      value: 'ad_tabbar_item',
    },
    /**
     * @property {Any} value 标签的唯一标识
     * @default null
     */
    value: {
      type: null,
      value: null,
    },
    /**
     * @property {String} image 常态下的标签的图标图片，这里建议使用非本地的图片，因为 image 是在组件中，如果使用本地图片，需要注意图片和组件的相对路径，因此建议使用线上图片或者是绝对路径
     * @default ''
     */
    image: {
      type: String,
      value: '',
    },
    /**
     * @property {String} activeImage 选中态的标签的图标图片，注意事项同 image
     * @default ''
     */
    activeImage: {
      type: String,
      value: '',
    },
    /**
     * @property {String} icon 标签的 icon，仅支持 icon 库里面的 icon，icon 和 image 是互斥的，二者不可同时存在，如果想使用自定义的 icon，请使用 icon 对应的 slot
     * @default ''
     */
    icon: {
      type: String,
      value: '',
    },
    /**
     * @property {Number} iconSize icon 的尺寸
     * @default 28
     */
    iconSize: {
      type: Number,
      value: 28,
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
  relations: {
    '../tabbar/tabbar': {
      type: 'ancestor',
    },
  },
  lifetimes: {
    ready() {
      this.initParent('../tabbar/tabbar')
    },
  },
  observers: {},
  data: {
    active: false,
    normalColor: '',
    activeColor: '',
  },
  methods: {
    changeStatus(value: any) {
      this.setData({
        active: this.properties.value === value,
      })
    },
    changeColor(normalColor: string, activeColor: string) {
      this.setData({
        normalColor,
        activeColor,
      })
    },
    click() {
      const { value, disabled } = this.properties
      if (!disabled) {
        if (!this.parent) {
          return
        }
        this.parent.clickItem(value)
      }
    },
  },
})

Component(componentOptions)
