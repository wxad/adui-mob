import ADComponent from '../common/adComponent'

/**
 * @name ad-tag
 * @description 标签组件
 * @tutorial http://ad-mob.woa.com/src-components-tag-tag
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_tag
     */
    prefix: {
      type: String,
      value: 'ad_tag',
    },
    /**
     * @property {String} value 值，用作每个 tag 的唯一标识
     * @default null
     */
    value: {
      type: String,
      value: null,
    },
    /**
     * @property {String} theme 值，用作每个 tag 的唯一标识
     * @default light
     * @enum standard | light | text | outlined
     */
    theme: {
      type: String,
      value: 'light',
    },
    /**
     * @property {String} theme 类型，不同类型的按钮对应不同的颜色
     * @default primary
     * @enum success | primary | warning | danger | normal
     */
    intent: {
      type: String,
      value: 'primary',
    },
    /**
     * @property {Boolean} isFilter 是否是筛选器，常用于筛选的情况下
     * @default false
     */
    isFilter: {
      type: Boolean,
      value: false,
      desc: '是否是筛选器，常用于筛选的情况下',
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
     * @property {String} size 尺寸
     * @default small
     * @enum small | large
     */
    size: {
      type: String,
      value: 'small',
    },
    /**
     * @property {Boolean} round 是否是圆角
     * @default true
     */
    round: {
      type: Boolean,
      value: true,
    },
    /**
     * @property {String} leftIcon 左图标
     * @default ''
     */
    leftIcon: {
      type: String,
      value: '',
    },
    /**
     * @property {String} rightIcon 右图标
     * @default ''
     */
    rightIcon: {
      type: String,
      value: '',
    },
    /**
     * @property {String} iconColor 图标的颜色
     * @default ''
     */
    iconColor: {
      type: String,
      value: '',
    },
    /**
     * @property {Number} iconSize 图标的大小
     * @default 18
     */
    iconSize: {
      type: Number,
      value: 18,
    },
    /**
     * @property {Boolean} banner 是否通栏
     * @default false
     */
    banner: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} closable 是否可关闭
     * @default false
     */
    closable: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} interactive 是否可交互，默认可交互
     * @default true
     */
    interactive: {
      type: Boolean,
      value: true,
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
   * @property {Function} bind:onClose 关闭的回调
   * @default
   */

  relations: {},
  observers: {},
  data: {
    activeItem: null,
    removed: false,
  },
  methods: {
    close() {
      const { value } = this.properties
      this.setData({
        removed: true,
      })
      this.triggerEvent('onClose', { value })
    },
  },
})

Component(componentOptions)
