import ADComponent from '../common/adComponent'

interface ISelectItem {
  key: any
  title: string
  disabled?: boolean
}

/**
 * @name ad-select
 * @description 选择器组件, ad-select-item 组件的父组件
 * @tutorial http://ad-mob.woa.com/src-components-select-select
 */

const componentOptions = ADComponent({
  behaviors: [],
  externalClasses: ['header-class', 'header-item-class'],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_select
     */
    prefix: {
      type: String,
      value: 'ad_select',
    },
    /**
     * @property {{key: any, title: string, disabled: boolean}[]} headers 自定义头部展示的数据，每一项的格式是 { key: any, title: string, disabled?: boolean }，其中，key 值要与 selectItem 项的 key 相对应
     * @default []
     */
    headers: {
      type: Array,
      value: [],
    },
    /**
     * @property {Number} headerHeight 给定头部的高度，这个值是为了满足头部是fix的情况，因为这种情况下头部获取到的高度是 0
     * @default 0
     */
    headerHeight: {
      type: Number,
      value: 0,
    },
    /**
     * @property {Boolean} noHeader 是否没有头部，这种一般是应用在自定义头部的情况
     * @default false
     */
    noHeader: {
      type: Boolean,
      value: false,
      desc: '是否没有默认头部，这种一般是应用在自定义头部的情况',
    },
    /**
     * @property {String} activeColor 选中态的字体颜色
     * @default var(--transparent-gray-900, rgba(0, 0, 0, 0.88))
     */
    activeColor: {
      type: String,
      value: 'var(--transparent-gray-900, rgba(0, 0, 0, 0.88))',
      desc: '选中态的字体颜色',
    },
    /**
     * @property {String} iconColor 非选中态的 icon 颜色
     * @default var(--transparent-gray-700, rgba(0, 0, 0, 0.36))
     */
    iconColor: {
      type: String,
      value: 'var(--transparent-gray-700, rgba(0, 0, 0, 0.36))',
    },
    /**
     * @property {String} activeIconColor 选中态的 icon 颜色
     * @default var(--transparent-gray-900, rgba(0, 0, 0, 0.88))
     */
    activeIconColor: {
      type: String,
      value: 'var(--transparent-gray-900, rgba(0, 0, 0, 0.88))',
    },
    /**
     * @property {String} disabledIconColor disabled 态的 icon 颜色
     * @default var(--transparent-gray-600, rgba(0, 0, 0, 0.22))
     */
    disabledIconColor: {
      type: String,
      value: 'var(--transparent-gray-600, rgba(0, 0, 0, 0.22))',
    },
    /**
     * @property {Boolean} hasMask 是否带蒙层
     * @default true
     */
    hasMask: {
      type: Boolean,
      value: true,
    },
    /**
     * @property {Boolean} isMaskClickable 蒙层是否可点击收起
     * @default true
     */
    isMaskClickable: {
      type: Boolean,
      value: true,
    },
    /**
     * @property {Boolean} noShadow 展开的时候不要顶部的分割线
     * @default false
     */
    noShadow: {
      type: Boolean,
      value: false,
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
     * @property {String} headerStyle 自定义头部样式
     * @default ''
     */
    headerStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} headerItemStyle 自定义头部的子元素样式
     * @default ''
     */
    headerItemStyle: {
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
  relations: {
    '../selectItem/selectItem': {
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
    headers() {
      this.initSelectItems()
    },
    showItem(showItem: boolean) {
      if (showItem) {
        this.triggerEvent('onOpen')
      } else {
        this.triggerEvent('onClose')
      }
    },
  },
  data: {
    showItem: false,
    selectedItem: null,
    maskTop: 0,
    selectItems: [],
  },
  lifetimes: {
    attached() {},
    moved() {},
    detached() {},
    ready() {
      this.init()
      this.initSelectItems()
    },
  },
  methods: {
    init() {
      this.initChildren('../selectItem/selectItem')
    },
    initSelectItems() {
      // 如果是自定义头部，直接返回
      const { noHeader } = this.data
      if (noHeader) {
        return
      }
      // 如果有使用传入的头部元素，使用传入的头部元素
      const { headers } = this.properties
      if (headers.length !== 0) {
        this.setData({
          selectItems: headers,
        })
        return
      }
      // 在没有自定义头部的情况下，选取子组件中选中值作为头部
      if (this.children.length !== 0) {
        const selectItems: ISelectItem[] = []
        this.children.forEach(
          (item: WechatMiniprogram.Component.TrivialInstance) => {
            const { options, activeItem, key, disabled } = item.data
            options.forEach((option: any) => {
              if (option.value === activeItem) {
                selectItems.push({
                  key,
                  title: option.title,
                  disabled,
                })
              }
            })
          }
        )
        this.setData({
          selectItems,
        })
      }
    },
    choseItem(event: WechatMiniprogram.BaseEvent) {
      const { key, disabled } = event.currentTarget.dataset
      const { selectedItem } = this.data
      if (!disabled) {
        this.setData(
          {
            selectedItem: key === selectedItem ? null : key,
          },
          () => {
            this.showSelectedItem()
          }
        )
      }
    },
    showSelectedItem() {
      const { selectedItem } = this.data
      this.children.forEach(
        (item: WechatMiniprogram.Component.TrivialInstance) => {
          const { key, disabled } = item.data
          if (!disabled) {
            item.setData({
              show: key === selectedItem,
            })
          }
        }
      )
    },
    changeHeader(key: any, title: string) {
      const { selectItems } = this.data
      selectItems.forEach((item: ISelectItem) => {
        if (item.key === key) {
          item.title = title
        }
      })
      this.setData({
        selectItems,
      })
    },
  },
})

Component(componentOptions)
