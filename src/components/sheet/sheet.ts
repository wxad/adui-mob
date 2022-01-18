import ADComponent from '../common/adComponent'

/**
 * @name ad-sheet
 * @description 半屏面板组件
 * @tutorial http://ad-mob.woa.com/src-components-sheet-sheet
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_sheet
     */
    prefix: {
      type: String,
      value: 'ad_sheet',
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
     * @property {Boolean} noHeader 是否没有头部
     * @default false
     */
    noHeader: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} title 左上角标题
     * @default ''
     */
    title: {
      type: String,
      value: '',
    },
    /**
     * @property {Boolean} isTitleCenter 标题是否居中
     * @default false
     */
    isTitleCenter: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} titleIcon 标题左边的 icon
     * @default ''
     */
    titleIcon: {
      type: String,
      value: '',
    },
    /**
     * @property {Number} titleIconSize 标题左边的 icon 大小
     * @default 18
     */
    titleIconSize: {
      type: Number,
      value: 18,
    },
    /**
     * @property {String} titleIconColor 标题左边的 icon 颜色
     * @default var(--transparent-gray-700, rgba(0, 0, 0, 0.36))
     */
    titleIconColor: {
      type: String,
      value: 'var(--transparent-gray-700, rgba(0, 0, 0, 0.36))',
    },
    /**
     * @property {String} desc 标题下方的描述
     * @default ''
     */
    desc: {
      type: String,
      value: '',
    },
    /**
     * @property {Boolean} hasCloseIcon 是否有右上角的关闭按钮
     * @default true
     */
    hasCloseIcon: {
      type: Boolean,
      value: true,
    },
    /**
     * @property {Number} iconSize 右上角关闭按钮的大小
     * @default 24
     */
    iconSize: {
      type: Number,
      value: 24,
    },
    /**
     * @property {String} iconColor 右上角关闭按钮的颜色
     * @default var(--transparent-gray-600, rgba(0, 0, 0, 0.22))
     */
    iconColor: {
      type: String,
      value: 'var(--transparent-gray-600, rgba(0, 0, 0, 0.22))',
    },
    /**
     * @property {Boolean} hasMask 是否有蒙层
     * @default true
     */
    hasMask: {
      type: Boolean,
      value: true,
    },
    /**
     * @property {Boolean} isMaskClickable 蒙层是否可点击，默认不能
     * @default false
     */
    isMaskClickable: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} position 出现位置，默认是从底部出现
     * @default bottom
     * @enum bottom | left | right | up
     */
    position: {
      type: String,
      value: 'bottom',
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
     * @property {Boolean} round 头部是否带圆角
     * @default true
     */
    round: {
      type: Boolean,
      value: true,
    },
    /**
     * @property {String} headerStyle 头部的自定义样式
     * @default ''
     */
    headerStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} innerStyle 自定义内部样式
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
  },

  /**
   * @function
   * @name bind:onClose
   * @description 关闭的回调
   * @default () => {}
   */

  relations: {},
  observers: {
    visible(visible: boolean) {
      this.propUpdate(false, '', 'finalVisible', visible)
    },
    defaultVisible(defaultVisible: boolean) {
      this.propUpdate(true, 'visible', 'finalVisible', defaultVisible)
    },
  },
  data: {
    finalVisible: false,
    position: '',
  },
  lifetimes: {
    attached() {
      const { position } = this.properties
      let result = ''
      if (position === 'top') {
        result = 'down'
      }
      if (position === 'bottom') {
        result = 'up'
      }
      if (position === 'left') {
        result = 'left'
      }
      if (position === 'right') {
        result = 'right'
      }
      this.setData({
        position: result,
      })
    },
    ready() {
      this.initState('defaultVisible', 'visible', 'finalVisible')
    },
  },
  methods: {
    close() {
      this.shouldDataUpate('visible', 'finalVisible', false)
      this.triggerEvent('onClose')
    },
    clickMask() {
      const { isMaskClickable } = this.properties
      if (isMaskClickable) {
        this.close()
      }
    },
    noop() {},
  },
})

Component(componentOptions)
