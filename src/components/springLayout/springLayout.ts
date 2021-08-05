import ADComponent from '../common/adComponent'

/**
 * @name ad-layout
 * @description 弹性布局组件，
 * @tutorial 
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_spring_layout
     */
    prefix: {
      type: String,
      value: 'ad_spring_layout',
      desc: '默认类名前缀',
    },
    /**
     * @property {String} minHeight 布局的最小高度，这个布局需要最小的高度来撑起，必填项
     * @default 100vh
     */
    minHeight: {
      type: String,
      value: '100vh',
    },
    /**
     * @property {String} bodyStyle 主体区域的自定义样式
     * @default ''
     */
    bodyStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} footStyle 底部区域的自定义样式
     * @default ''
     */
    footStyle: {
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
  relations: {},
  observers: {},
  data: {},
  methods: {},
})

Component(componentOptions)
