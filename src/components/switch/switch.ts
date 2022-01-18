import ADComponent from '../common/adComponent'

/**
 * @name ad-switch
 * @description 卡关组件
 * @tutorial http://ad-mob.woa.com/src-components-switch-switch
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_switch
     */
    prefix: {
      type: String,
      value: 'ad_switch',
    },
    /**
     * @property {Boolean} defaultChecked 默认开关状态, 内部驱动
     * @default null
     */
    defaultChecked: {
      type: Boolean,
      value: null,
      desc: '默认开关状态, 内部驱动',
    },
    /**
     * @property {Boolean} checked 开关状态，外部控制
     * @default null
     */
    checked: {
      type: Boolean,
      value: null,
    },
    /**
     * @property {Boolean} disabled 是否禁用
     * @default null
     */
    disabled: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} size 尺寸
     * @default large
     * @enum large | small
     */
    size: {
      type: String,
      value: 'large',
    },
    /**
     * @property {String} customStyle 自定义样式
     * @default large
     */
    customStyle: {
      type: String,
      value: '',
    },
  },

  /**
   * @function
   * @name bind:onChange
   * @param {Object} event {event: {detail: {value: boolean}}}
   * @description 状态变化的回调
   * @default () => {}
   */

  data: {
    finalChecked: false,
  },
  observers: {
    checked(checked: boolean) {
      this.propUpdate(false, '', 'finalChecked', checked)
    },
    defaultChecked(defaultChecked: boolean) {
      this.propUpdate(true, 'checked', 'defaultChecked', defaultChecked)
    },
  },
  lifetimes: {
    ready() {
      this.initState('defaultChecked', 'checked', 'finalChecked')
    },
  },
  methods: {
    change() {
      const { finalChecked, disabled } = this.data
      if (!disabled) {
        this.shouldDataUpate('checked', 'finalChecked', !finalChecked)
        this.triggerEvent('onChange', { value: !finalChecked })
      }
    },
  },
})

Component(componentOptions)
