import ADComponent from '../common/adComponent'

/**
 * @name ad-radio
 * @description 单选组件，ad-radio-group 组件的子孙组件
 * @tutorial http://ad-mob.woa.com/src-components-radio-radio
 */

const componentOptions = ADComponent({
  behaviors: [],
  externalClasses: ['adui-class'],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_radio
     */
    prefix: {
      type: String,
      value: 'ad_radio',
    },
    /**
     * @property {Any} value 值，用作每个 radio 的标识
     * @default null
     */
    value: {
      type: null,
      value: null,
    },
    /**
     * @property {String} theme 主题，标准的是圆形，light 是勾选
     * @default standard
     * @enum standard: 圆形 | light: 勾选型
     */
    theme: {
      type: String,
      value: 'standard',
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
     * @property {Boolean} disabled 是否禁用
     * @default ''
     */
    disabled: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} iconColor 勾选icon的颜色
     * @default var(--primary-color, #07C160)
     */
    iconColor: {
      type: String,
      value: 'var(--primary-color, #07C160)',
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
  data: {
    active: false,
    parentDisabled: false,
    selectable: true,
  },
  relations: {
    '../radioGroup/radioGroup': {
      type: 'ancestor',
    },
    '../radioField/radioField': {
      type: 'ancestor',
      linked() {
        this.setData({
          selectable: false,
        })
      },
      unlinked() {
        this.setData({
          selectable: true,
        })
      },
    },
  },
  lifetimes: {
    moved() {},
    detached() {},
    ready() {
      this.initParent('../radioGroup/radioGroup')
    },
  },
  methods: {
    changeStatus(valueChanged: any) {
      const { value } = this.data
      this.setData({
        active: valueChanged === value,
      })
    },
    changeDisabled(disabledStatus: boolean) {
      this.setData({
        parentDisabled: disabledStatus,
      })
    },
    handleCilck() {
      const { disabled, parentDisabled } = this.data
      const { value } = this.properties
      if (!disabled && !parentDisabled) {
        this.parent.clickItem(value)
      }
    },
  },
})

Component(componentOptions)
