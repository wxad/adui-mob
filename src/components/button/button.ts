import ADComponent from '../common/adComponent'

/**
 * @name ad-button
 * @description 按钮组件
 * @tutorial http://ad-mob.woa.com/src-components-button-button
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_button
     */
    prefix: {
      type: String,
      value: 'ad_button',
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
     * @property {String} theme 主题，主题定义按钮的风格
     * @default standard
     * @enum standard | light | text
     */
    theme: {
      type: String,
      value: 'standard',
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
     * @default medium
     * @enum small | medium
     */
    size: {
      type: String,
      value: 'medium',
    },
    /**
     * @property {Boolean} fitContent 是否根据内容撑开 button 的宽度
     * @default false
     */
    fitContent: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} banner 是否撑满，指定这个值之后按钮会撑满其所在的父元素
     * @default false
     */
    banner: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} loading 是否撑满，指定这个值之后按钮会撑满其所在的父元素
     * @default false
     */
    loading: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} spinnerColor 加载组件转动条颜色
     * @default inherit
     */
    spinnerColor: {
      type: String,
      value: 'inherit',
    },
    /**
     * @property {String} spinnerSize 加载组件尺寸
     * @default small
     * @enum large | medium | small
     */
    spinnerSize: {
      type: String,
      value: 'small',
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
     * @property {String} iconColor icon 的颜色
     * @default ''
     */
    iconColor: {
      type: String,
      value: '',
    },
    /**
     * @property {Number} iconSize icon 的尺寸，默认是 18px
     * @default 18
     */
    iconSize: {
      type: Number,
      value: 18,
    },
    /**
     * @property {String} formType 用于 form 组件，点击分别会触发 form 组件的 submit/reset 事件
     * @default ''
     */
    formType: {
      type: String,
      value: '',
    },
    /**
     * @property {String} openType 微信开放能力
     * @default ''
     */
    openType: {
      type: String,
      value: '',
    },
    /**
     * @property {Boolean} hoverStopPropagation 指定是否阻止本节点的祖先节点出现点击态
     * @default false
     */
    hoverStopPropagation: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Number} hoverStartTime 按住后多久出现点击态，单位毫秒
     * @default 20
     */
    hoverStartTime: {
      type: Number,
      value: 20,
    },
    /**
     * @property {Number} hoverStayTime 手指松开后点击态保留时间，单位毫秒
     * @default 70
     */
    hoverStayTime: {
      type: Number,
      value: 70,
    },
    /**
     * @property {String} lang 指定返回用户信息的语言
     * @default en
     * @enum zh_CN: 简体中文 | zh_TW: 繁体中文 | en: 英文
     */
    lang: {
      type: String,
      value: 'en',
    },
    /**
     * @property {String} sessionFrom 会话来源，open-type="contact"时有效
     * @default ''
     */
    sessionFrom: {
      type: String,
      value: '',
    },
    /**
     * @property {String} sendMessageTitle 会话内消息卡片标题，open-type="contact"时有效
     * @default ''
     */
    sendMessageTitle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} sendMessagePath 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
     * @default ''
     */
    sendMessagePath: {
      type: String,
      value: '',
    },
    /**
     * @property {String} sendMessageImg 会话内消息卡片图片，open-type="contact"时有效
     * @default ''
     */
    sendMessageImg: {
      type: String,
      value: '',
    },
    /**
     * @property {Boolean} showMessageCard 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效
     * @default false
     */
    showMessageCard: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} appParameter 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
     * @default ''
     */
    appParameter: {
      type: String,
      value: '',
    },
    /**
     * @property {String} customStyle 外部传入的style
     * @default ''
     */
    customStyle: {
      type: String,
      value: '',
    },
  },

  /**
   * @property {Function} bind:onGetUserInfo 用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与wx.getUserInfo返回的一致，open-type="getUserInfo"时有效
   * @default
   */

  /**
   * @property {Function} bind:onContact 客服消息回调，open-type="contact"时有效
   * @default
   */

  /**
   * @property {Function} bind:onGetPhoneNumber 获取用户手机号回调，open-type=getPhoneNumber时有效
   * @default
   */

  /**
   * @property {Function} bind:onError 当使用开放能力时，发生错误的回调，open-type=launchApp时有效
   * @default
   */

  /**
   * @property {Function} bind:onOpenSetting 在打开授权设置页后回调，open-type=openSetting时有效
   * @default
   */

  data: {},
  lifetimes: {
    attached() {},
  },
  methods: {
    onGetUserInfo(event: any) {
      this.triggerEvent('onGetUserInfo', { ...event })
    },
    onContact(event: any) {
      this.triggerEvent('onContact', { ...event })
    },
    onGetPhoneNumber(event: any) {
      this.triggerEvent('onGetPhoneNumber', { ...event })
    },
    onError(event: any) {
      this.triggerEvent('onError', { ...event })
    },
    onOpenSetting(event: any) {
      this.triggerEvent('onOpenSetting', { ...event })
    },
  },
})

Component(componentOptions)