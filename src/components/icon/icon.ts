import ADComponent from '../common/adComponent'
import iconData from '../common/icon/icon-backgrounds.js'

/**
 * @name ad-icon
 * @description 图标组件
 * @tutorial http://ad-mob.woa.com/src-components-icon-icon
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_icon
     */
    prefix: {
      type: String,
      value: 'ad_icon',
      desc: '默认类名前缀',
    },
    /**
     * @property {String} icon icon 名字
     * @default ''
     */
    icon: {
      type: String,
      value: '',
    },
    /**
     * @property {String} color icon 颜色
     * @default rgba(0, 0, 0, 0.58)
     */
    color: {
      type: String,
      value: 'rgba(0, 0, 0, 0.58)',
    },
    /**
     * @property {Number} size icon 大小
     * @default 18
     */
    size: {
      type: Number,
      value: 18,
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
    iconData,
  },
})

Component(componentOptions)