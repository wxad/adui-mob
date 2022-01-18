import ADComponent from '../common/adComponent'

/**
 * @name ad-action-sheet
 * @description 行动面板父组件，ad-action-sheet-item 的祖父组件
 * @tutorial http://ad-mob.woa.com/src-components-action-sheet-action-sheet
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_action_sheet
     */
    prefix: {
      type: String,
      value: 'ad_action_sheet',
    },
    /**
     * @property {Boolean} defaultVisible 默认是否展示，内部控制
     * @default null
     */
    defaultVisible: {
      type: Boolean,
      value: null,
    },
    /**
     * @property {Boolean} visible 是否展示，外部控制
     * @default null
     */
    visible: {
      type: Boolean,
      value: null,
    },
    /**
     * @property {String} desc 头部的描述
     * @default ''
     */
    desc: {
      type: String,
      value: '',
    },
    /**
     * @property {Boolean} hasCancel 底部是都有取消选项
     * @default false
     */
    hasCancel: {
      type: Boolean,
      value: false,
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
     * @property {String} cancelText 底部取消选项的文案，默认是取消
     * @default 取消
     */
    cancelText: {
      type: String,
      value: '取消',
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
   * @name bind:onChange
   * @param {Object} event {event: {detail: {value: any}}}
   * @description 值变化时的回调
   * @default () => {}
   */

  /**
   * @function
   * @name bind:onClose
   * @description 关闭的回调
   * @default () => {}
   */

  /**
   * @function
   * @name bind:onCancel
   * @description 点击取消的回调
   * @default () => {}
   */

  relations: {
    '../actionSheetItem/actionSheetItem': {
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
  observers: {
    visible(visible: boolean) {
      this.propUpdate(false, '', 'finalVisible', visible)
    },
    defaultVisible(defaultVisible: boolean) {
      this.propUpdate(false, 'visible', 'finalVisible', defaultVisible)
    },
  },
  data: {
    finalVisible: false,
  },
  lifetimes: {
    ready() {
      this.initState('defaultVisible', 'visible', 'finalVisible')
    },
  },
  methods: {
    init() {
      this.initChildren('../actionSheetItem/actionSheetItem')
    },
    clickMask() {
      this.shouldDataUpate('visible', 'finalVisible', false)
      this.triggerEvent('onClose')
    },
    clickItem(value: any) {
      this.shouldDataUpate('visible', 'finalVisible', false)
      this.triggerEvent('onChange', { value })
    },
    cancel() {
      this.shouldDataUpate('visible', 'finalVisible', false)
      this.triggerEvent('onCancel')
    },
    noop() {},
  },
})

Component(componentOptions)
