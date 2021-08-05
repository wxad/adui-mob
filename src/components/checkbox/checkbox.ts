import ADComponent from '../common/adComponent'

/**
 * @name ad-checkbox
 * @description 多选组件，ad-checkbox-group 组件的子孙组件
 * @tutorial http://ad-mob.woa.com/src-components-checkbox-checkbox
 */

const componentOptions = ADComponent({
  behaviors: [],
  externalClasses: ['adui-class'],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_checkbox
     */
    prefix: {
      type: String,
      value: 'ad_checkbox',
    },
    /**
     * @property {Any} value checkbox 的唯一标识，必填
     * @default null
     */
    value: {
      type: null,
      value: null,
    },
    /**
     * @property {Boolean} checked 是否选中，可在单独使用 checkbox 的情况下使用
     * @default null
     */
    checked: {
      type: Boolean,
      value: null,
    },
    /**
     * @property {Boolean} desc 标题下方的描述说明
     * @default ''
     */
    desc: {
      type: String,
      value: '',
    },
    /**
     * @property {Boolean} disabled 是否禁用，只禁用此组件本身
     * @default false
     */
    disabled: {
      type: Boolean,
      value: false,
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
  // end
  data: {
    active: false,
    parentDisabled: false,
    selectable: true,
  },
  relations: {
    '../checkboxGroup/checkboxGroup': {
      type: 'ancestor',
    },
    '../checkboxField/checkboxField': {
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
  observers: {
    checked(checked: boolean) {
      this.setData({
        active: checked,
      })
    },
  },
  lifetimes: {
    attached() {},
    ready() {
      this.initParent('../checkboxGroup/checkboxGroup')
    },
    moved() {},
    detached() {},
  },
  methods: {
    changeStatus(valueChanged: boolean) {
      this.setData({
        active: valueChanged,
      })
    },
    changeDisabled(disabledStatus: boolean) {
      this.setData({
        parentDisabled: disabledStatus,
      })
    },
    handleClick() {
      const { disabled, parentDisabled } = this.data
      const { value } = this.properties
      if (!disabled && !parentDisabled && this.parent) {
        this.parent.clickItem(value)
      }
    },
  },
})

Component(componentOptions)