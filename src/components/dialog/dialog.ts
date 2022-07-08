import ADComponent from '../common/adComponent'
import { IDialogProp } from './dialogFunc'

/**
 * @name ad-dialog
 * @description 弹窗组件
 * @tutorial http://ad-mob.woa.com/src-components-dialog-dialog
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_dialog
     */
    prefix: {
      type: String,
      value: 'ad_dialog',
    },
    /**
     * @property {Boolean} defaultVisible 是否默认显示，内部驱动
     * @default null
     */
    defaultVisible: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} visible 是否显示，外部驱动
     * @default null
     */
    visible: {
      type: Boolean,
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
     * @property {String} content 文案
     * @default ''
     */
    content: {
      type: String,
      value: '',
    },
    /**
     * @property {String} cancelTitle 取消按钮文案
     * @default 取消
     */
    cancelTitle: {
      type: String,
      value: '取消',
    },
    /**
     * @property {String} cancelStyle 取消按钮的自定义样式
     * @default ''
     */
    cancelStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} confirmTitle 确定按钮文案
     * @default 确定
     */
    confirmTitle: {
      type: String,
      value: '确定',
    },
    /**
     * @property {String} confirmStyle 确定按钮的自定义样式
     * @default ''
     */
    confirmStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} type 弹窗的类型
     * @default confirm
     * @enum confirm: 有取消和确定按钮 | inform: 只有去顶按钮
     */
    type: {
      type: String,
      value: 'confirm',
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
     * @property {Any[]} buttonList 按钮列表，这种情况用于有多个可选项的情况，子项的格式为 {value: any, text: string}，value 是每个项的唯一标识，是必须项
     * @default []
     */
    buttonList: {
      type: Array,
      value: [],
    },
    /**
     * @property {Number} duration 动画时长
     * @default 300
     */
    duration: {
      type: Number,
      value: 300,
    },
    /**
     * @property {Boolean} noButtons 是否不要底部的按钮
     * @default false
     */
    noButtons: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} buttonItemStyle buttonList 子项的样式
     * @default ''
     */
    buttonItemStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} buttonItemColor buttonList 子项的字体颜色，默认是主题颜色
     * @default var(--primary-color, #07C160)
     */
    buttonItemColor: {
      type: String,
      value: 'var(--primary-color, #07C160)',
    },
    /**
     * @property {String} innerStyle 内层自定义样式
     * @default ''
     */
    innerStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} customStyle 自定义样式
     * @default ''
     */
    customStyle: {
      type: String,
      value: '',
    },
    onCancel: {
      type: Object,
      value: null,
    },
    onConfirm: {
      type: Object,
      value: null,
    },
  },

  /**
   * @function
   * @name bind:onConfirm
   * @description 点击确定的回调
   * @default () => {}
   */

  /**
   * @function
   * @name bind:onCancel
   * @description 点击取消的回调
   * @default () => {}
   */

  data: {
    btns: [],
    finalVisible: false,
  },
  observers: {
    visible(visible) {
      this.propUpdate(false, '', 'finalVisible', visible)
    },
    defaultVisible(defaultVisible: boolean) {
      this.propUpdate(true, 'visible', 'finalVisible', defaultVisible)
    },
  },
  lifetimes: {
    ready() {
      this.initState('defaultVisible', 'visible', 'finalVisible')
    },
  },
  methods: {
    click(event: WechatMiniprogram.BaseEvent) {
      const { index, value } = event.currentTarget.dataset
      const { onCancel, onConfirm } = this.data
      this.shouldDataUpate('visible', 'finalVisible', false)
      if (value !== undefined) {
        this.triggerEvent('onConfirm', { value })
        if (onConfirm) {
          onConfirm.cb()
        }
      } else if (Number(index) === 0) {
        this.triggerEvent('onCancel')
        if (onCancel) {
          onConfirm.cb()
        }
      } else if (Number(index) === 1) {
        this.triggerEvent('onConfirm')
        if (onConfirm) {
          onConfirm.cb()
        }
      }
    },
    set(options: IDialogProp) {
      this.setData({ finalVisible: true, ...options })
    },
    noop() {},
  },
})

Component(componentOptions)
