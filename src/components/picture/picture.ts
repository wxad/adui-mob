import ADComponent from '../common/adComponent'

/**
 * @name ad-picture
 * @description 图片组件
 * @tutorial http://ad-mob.woa.com/src-components-picture-picture
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_picture
     */
    prefix: {
      type: String,
      value: 'ad_picture',
    },
    /**
     * @property {String} src 图片链接
     * @default ''
     */
    src: {
      type: String,
      value: '',
    },
    /**
     * @property {String} src 图片缩放模式，默认是 aspectFill
     * @default aspectFill
     */
    mode: {
      type: String,
      value: 'aspectFill',
    },
    /**
     * @property {Boolean} previewable 是否支持点击查看大图
     * @default false
     */
    previewable: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} loading 是否加载中
     * @default false
     */
    loading: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} spinnerColor 是否加载中
     * @default inherit
     */
    spinnerColor: {
      type: String,
      value: 'inherit',
    },
    /**
     * @property {String} spinnerSize 加载组件尺寸
     * @default medium
     */
    spinnerSize: {
      type: String,
      value: 'medium',
    },
    /**
     * @property {Boolean} round 是否有圆角
     * @default true
     */
    round: {
      type: Boolean,
      value: true,
    },
    /**
     * @property {String} errorText 加载失败时的提示语
     * @default ''
     */
    errorText: {
      type: String,
      value: '',
    },
    /**
     * @property {String} errorIcon 加载失败时的占位icon
     * @default alert-circle-outlined
     */
    errorIcon: {
      type: String,
      value: 'alert-circle-outlined',
    },
    /**
     * @property {Number} errorIconSize 加载出错icon的尺寸
     * @default 20
     */
    errorIconSize: {
      type: Number,
      value: 20,
    },
    /**
     * @property {Boolean} error 是否加载失败
     * @default false
     */
    error: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Number} placeholderIcon 占位 icon
     * @default image-outlined
     */
    placeholderIcon: {
      type: String,
      value: 'image-outlined',
    },
    /**
     * @property {Number} iconSize icon的尺寸
     * @default 18
     */
    iconSize: {
      type: Number,
      value: 18,
    },
    /**
     * @property {String} iconColor icon的颜色
     * @default var(--transparent-gray-500, rgba(0, 0, 0, 0.16))
     */
    iconColor: {
      type: String,
      value: 'var(--transparent-gray-500, rgba(0, 0, 0, 0.16))',
    },
    /**
     * @property {Number} width 图片组件的width
     * @default 0
     */
    width: {
      type: Number,
      value: 0,
    },
    /**
     * @property {Number} height 图片组件的height
     * @default 0
     */
    height: {
      type: Number,
      value: 0,
    },
    /**
     * @property {String} customStyle 自定义style
     * @default ''
     */
    customStyle: {
      type: String,
      value: '',
    },
  },

  /**
   * @property {Function} bind:onLoad 加载完毕的回调
   * @default
   */

  /**
   * @property {Function} bind:onError 加载出错的回调
   * @default
   */

  relations: {},
  observers: {
    loading(loading: boolean) {
      this.setData({
        loadingInner: loading,
      })
    },
    error(error: boolean) {
      this.setData({
        errorInner: error,
      })
    },
  },
  data: {
    loadingInner: false,
    errorInner: false,
  },
  lifetimes: {
    attached() {
      const { src } = this.properties
      if (src !== '') {
        this.setData({
          loadingInner: true,
        })
      }
    },
  },
  methods: {
    preview() {
      const { src, previewable } = this.properties
      if (previewable && src !== '') {
        wx.previewImage({
          current: src, // 当前显示图片的http链接
          urls: [src], // 需要预览的图片http链接列表
        })
      }
    },
    onLoad() {
      const { src } = this.properties
      this.setData(
        {
          loadingInner: false,
        },
        () => {
          this.triggerEvent('onLoad', { value: src })
        }
      )
    },
    onError() {
      const { src } = this.properties
      this.setData(
        {
          loadingInner: false,
          errorInner: true,
        },
        () => {
          this.triggerEvent('onError', { value: src })
        }
      )
    },
  },
})

Component(componentOptions)
