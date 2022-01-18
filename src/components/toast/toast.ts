import ADComponent from '../common/adComponent'
import { ToastProp } from './toastFunc'

/**
 * @name ad-toast
 * @description 轻提示组件
 * @tutorial
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_toast
     */
    prefix: {
      type: String,
      value: 'ad_toast',
    },
    /**
     * @property {Boolean} visible 是否展示，默认展示一段时间后会自动隐藏，loading 情况下默认不会自动隐藏，需要手动设置
     */
    visible: {
      type: Boolean,
      value: null,
    },
    /**
     * @property {String|String[]} title 文案
     * @default ''
     */
    title: {
      type: String,
      optionalTypes: [Array],
      value: '',
    },
    /**
     * @property {String[]} titleList 文案列表，适用于多行文案的情况
     */
    titleList: {
      type: Array,
      value: [],
    },
    /**
     * @property {String} icon 图标
     * @default none
     */
    icon: {
      type: String,
      value: 'none',
    },
    /**
     * @property {Number} iconSize 图标的尺寸
     * @default 46
     */
    iconSize: {
      type: Number,
      value: 46,
    },
    /**
     * @property {Number} loadingSize 加载图标的尺寸
     * @default 40
     */
    loadingSize: {
      type: Number,
      value: 40,
    },
    /**
     * @property {Boolean} loading 是否是加载态
     * @default false
     */
    loading: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} duration 弹层停留时间
     * @default 1000
     */
    duration: {
      type: Number,
      value: 1000,
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
   * @name bind:onOpen
   * @description 展示时的回调
   * @default () => {}
   */

  /**
   * @function
   * @name bind:onClose
   * @description 隐藏时的回调
   * @default () => {}
   */
  relations: {},
  observers: {
    visible(visible: boolean) {
      this.setData({
        visibleInner: visible,
      })
    },
    visibleInner(visibleInner: boolean) {
      if (visibleInner) {
        this.autoHide()
        this.triggerEvent('onOpen')
      } else {
        this.triggerEvent('onClose')
        clearTimeout(this.timer)
      }
    },
  },
  data: {
    visibleInner: false,
  },
  lifetimes: {
    attached() {},
  },
  methods: {
    autoHide() {
      const { loading, duration } = this.properties
      if (loading) return
      this.timer = setTimeout(() => {
        this.setData({
          visibleInner: false,
        })
      }, duration)
    },
    set(options: ToastProp) {
      this.setData({ ...options })
    },
    show() {
      this.setData({
        visibleInner: true,
      })
    },
    hide() {
      this.setData({
        visibleInner: false,
      })
    },
  },
})

Component(componentOptions)
