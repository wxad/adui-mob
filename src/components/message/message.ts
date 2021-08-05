import ADComponent from '../common/adComponent'

/**
 * @name ad-message
 * @description 提示组件
 * @tutorial http://ad-mob.woa.com/src-components-message-message
 */

const componentOptions = ADComponent({
  externalClasses: ['title-class'],
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_message
     */
    prefix: {
      type: String,
      value: 'ad_message',
    },
    /**
     * @property {String} intent 类型，不同类型的按钮对应不同的颜色
     * @default primary
     * @enum success | primary | warning | danger | normal
     */
    intent: {
      type: String,
      value: 'primary',
    },
    /**
     * @property {String} title 提示内容
     * @default ''
     */
    title: {
      type: String,
      value: '',
    },
    /**
     * @property {String} desc 描述说明
     * @default ''
     */
    desc: {
      type: String,
      value: '',
    },
    /**
     * @property {Boolean} hasIcon 是否带icon，默认不带，在不给定 leftIcon 和 leftIconColor的情况下回有默认的 icon 和对应颜色
     * @default false
     */
    hasIcon: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} leftIcon 自定义左边的 icon
     * @default ''
     */
    leftIcon: {
      type: String,
      value: '',
    },
    /**
     * @property {String} leftIconColor 左边 icon 颜色
     * @default ''
     */
    leftIconColor: {
      type: String,
      value: '',
    },
    /**
     * @property {Number} leftIconSize 左边 icon 的大小
     * @default 18
     */
    leftIconSize: {
      type: Number,
      value: 18,
    },
    /**
     * @property {String} rightIcon 右边的 icon
     * @default ''
     */
    rightIcon: {
      type: String,
      value: '',
    },
    /**
     * @property {String} rightIconColor 右边 icon 的颜色
     * @default ''
     */
    rightIconColor: {
      type: String,
      value: '',
    },
    /**
     * @property {Number} rightIconSize 右边 icon 的大小
     * @default 18
     */
    rightIconSize: {
      type: Number,
      value: 18,
    },
    /**
     * @property {Boolean} isCard 是否是卡片式
     * @default false
     */
    isCard: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} isLink 是否可以跳转
     * @default false
     */
    isLink: {
      type: Boolean,
      value: false,
      desc: '是否可以跳转',
    },
    /**
     * @property {Boolean} interactive 是否开启点击反馈
     * @default false
     */
    interactive: {
      type: Boolean,
      value: false,
      desc: '是否开启点击反馈',
    },
    /**
     * @property {String} backgroundStyle 自定义背景样式
     * @default ''
     */
    backgroundStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} titleStyle 标题样式
     * @default ''
     */
    titleStyle: {
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
  observers: {},
  data: {
    leftIconDefault: '',
    leftIconColorDefault: '',
  },
  lifetimes: {
    ready() {
      const { intent } = this.properties
      let leftIconDefault = ''
      let leftIconColorDefault = ''
      if (intent !== null) {
        switch (intent) {
          case 'success':
            leftIconDefault = 'tick-circle-outlined'
            leftIconColorDefault = '#07c160'
            break
          case 'warning':
            leftIconDefault = 'warning-circle-outlined'
            leftIconColorDefault = '#eda20c'
            break
          case 'danger':
            leftIconDefault = 'alert-circle-outlined'
            leftIconColorDefault = '#d9514c'
            break
          case 'normal':
            leftIconDefault = 'info-circle-outlined'
            leftIconColorDefault = '#2b7bd6'
            break
          default:
            leftIconDefault = 'info-circle-outlined'
            leftIconColorDefault = '#2b7bd6'
            break
        }
      }
      this.setData({
        leftIconDefault,
        leftIconColorDefault,
      })
    },
  },
  methods: {},
})

Component(componentOptions)
