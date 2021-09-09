import ADComponent from '../common/adComponent'

interface IItem {
  title: string
  value: any
}

/**
 * @name ad-select-item
 * @description 选择器子组件，ad-select 组件的子组件
 * @tutorial http://ad-mob.woa.com/src-components-select-item-select-item
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_select_item
     */
    prefix: {
      type: String,
      value: 'ad_select_item',
    },
    /**
     * @property {Any} key 必填值，selectItem 的唯一标识，select 根据这个值来决定展示哪个 selectItem
     * @default null
     */
    key: {
      type: null,
      value: null,
    },
    /**
     * @property {Boolean} visible 是否显示，外部控制值
     * @default null
     */
    visible: {
      type: Boolean,
      value: null,
    },
    /**
     * @property {Any} defaultValue 默认选中值，内部控制
     * @default null
     */
    defaultValue: {
      type: null,
      value: null,
    },
    /**
     * @property {Any} value 选中值，外部控制
     * @default null
     */
    value: {
      type: null,
      value: null,
      desc: '选中值，外部控制',
    },
    /**
     * @property {{title: string, value: any}[]} options 可选值的数组，每个数组元素是对象，格式为 { title: string, value: any}, title 是对应的选项的名称，value 是选项的唯一标识，可以是任意值
     * @default []
     */
    options: {
      type: Array,
      value: [],
    },
    /**
     * @property {Boolean} disabled 是否禁用，只有当前的选项禁用
     * @default false
     */
    disabled: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Number} closeDelay 关闭时延，默认是 300ms
     * @default 300
     */
    closeDelay: {
      type: Number,
      value: 300,
    },
    /**
     * @property {String} customStyle 自定义样式
     * @default 300
     */
    customStyle: {
      type: String,
      value: '',
    },
  },

  /**
   * @property {Function} bind:onChange 值变化的回调
   * @default
   */

  /**
   * @property {Function} bind:onClose 隐藏时的回调
   * @default
   */

  relations: {
    '../select/select': {
      type: 'ancestor',
      linked() {},
    },
  },
  observers: {
    defaultValue(defaultValue: any) {
      this.propUpdate(true, 'value', 'activeItem', defaultValue)
    },
    value(value: any) {
      this.propUpdate(false, '', 'activeItem', value)
    },
    defaultVisible(defaultVisible: boolean) {
      this.propUpdate(true, 'visible', 'show', defaultVisible)
    },
    visible(visible: boolean) {
      this.propUpdate(false, '', 'show', visible)
    },
    activeItem(activeItem) {
      const { options, closeDelay, key } = this.properties
      const { init } = this.data
      const { title } = this.getItem(activeItem, options)
      if (this.parent) {
        this.parent.changeHeader(key, title)
      }
      if (!init) return
      setTimeout(() => {
        this.shouldDataUpate('visible', 'show', false)
        this.triggerEvent('onClose', { value: false })
      }, closeDelay)
    },
    disabled() {
      if (this.parent) {
        this.parent.initSelectItems()
      }
    },
    show(show: boolean) {
      this.changeParentShowStaus(show)
      if (show) {
        const { prefix } = this.properties
        this.getNode(`.${prefix}_inner`, false).then((res: any) => {
          this.setData({
            height: res.height,
          })
        })
      } else {
        this.setData({
          height: 0,
        })
      }
    },
  },
  lifetimes: {
    attached() {
      this.initParent('../select/select')
      const { options } = this.properties
      this.initState(
        'defaultValue',
        'value',
        'activeItem',
        options.length !== 0 ? options[0].value : undefined
      )
      this.initState('defaultVisible', 'visible', 'show')
    },
    ready() {
      this.setData({
        init: true,
      })
    },
  },
  data: {
    init: false,
    show: false,
    activeItem: null,
    height: 0,
    maskHeight: 0,
  },
  methods: {
    chose(event: WechatMiniprogram.BaseEvent) {
      const { value } = event.currentTarget.dataset
      this.shouldDataUpate('value', 'activeItem', value)
      this.triggerEvent('onChange', { value })
    },
    getItem(key: any, options: Array<IItem>) {
      let result: IItem | null = null
      options.forEach((item: IItem) => {
        if (key === item.value) {
          result = item
        }
      })
      return result
    },
    changeParentShowStaus(show: boolean) {
      if (this.parent) {
        const { closeDelay, key } = this.properties
        if (show) {
          this.parent.setData({
            showItem: show,
          })
        } else if (show === false && key === this.parent.data.selectedItem) {
          setTimeout(() => {
            this.parent.setData({
              showItem: false,
              selectedItem: null,
            })
          }, closeDelay)
        }
      }
    },
    close() {
      this.shouldDataUpate('visible', 'show', false)
      this.triggerEvent('onClose', { value: false })
    },
    noop() {},
  },
})

Component(componentOptions)
