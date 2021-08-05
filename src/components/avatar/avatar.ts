import ADComponent from '../common/adComponent'

/**
 * @name ad-avatar
 * @description 头像组件
 * @tutorial http://ad-mob.woa.com/src-components-avatar-avatar
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_avatar
     */
    prefix: {
      type: String,
      value: 'ad_avatar',
    },
    /**
     * @property {String} src 头像链接
     * @default ''
     */
    src: {
      type: String,
      value: '',
    },
    /**
     * @property {Boolean} round 头像是否是圆的
     * @default false
     */
    round: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} size 头像尺寸
     * @default medium
     * @enum large: 42px * 42px | medium: 34px * 34px | small: 28px * 28px
     */
    size: {
      type: String,
      value: 'medium',
    },
    /**
     * @property {Number} numSize 自定义尺寸样式，设定这个之后 size 的值会被覆盖
     * @default ''
     */
    numSize: {
      type: Number,
      value: '',
    },
    /**
     * @property {String} placeholderPicture 自定义默认占位图
     * @default ''
     */
    placeholderPicture: {
      type: String,
      value: '',
    },
    /**
     * @property {String} mode 图片的缩放模式，和官方保持一致，具体可查看 https://developers.weixin.qq.com/miniprogram/dev/component/image.html
     * @default aspectFill
     */
    mode: {
      type: String,
      value: 'aspectFill',
    },
    /**
     * @property {String} placeholderPictureStyle 自定义占位图的样式
     * @default ''
     */
    placeholderPictureStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} placeholderIcon 自定义占位icon，使用的是 icon 组件，具体的可选值可以查看 icon 组件
     * @default ''
     */
    placeholderIcon: {
      type: String,
      value: '',
      desc: '自定义占位icon',
    },
    /**
     * @property {String} placeholderIconColor 占位 icon 的颜色
     * @default rgba(0, 0, 0, 0.16)
     */
    placeholderIconColor: {
      type: String,
      value: 'rgba(0, 0, 0, 0.16)',
    },
    /**
     * @property {Number} placeholderSize 占位图片的尺寸
     * @default null
     */
    placeholderSize: {
      type: Number,
      value: null,
    },
    /**
     * @property {String} placeholderStyle 占位元素样式
     * @default ''
     */
    placeholderStyle: {
      type: String,
      value: '',
      desc: '占位元素样式',
    },
    /**
     * @property {String} noBorder 是否有边框
     * @default false
     */
    noBorder: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} innerStyle 内层自定义样式
     * @default ''
     */
    innerStyle: {
      type: String,
      value: '',
      desc: '内层自定义样式',
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
  relations: {},
  observers: {},
  data: {},
  methods: {},
})

Component(componentOptions)
