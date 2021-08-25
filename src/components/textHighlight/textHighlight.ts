import ADComponent from '../common/adComponent'

/**
 * @name ad-text-highlight
 * @description 文字高亮组件
 * @tutorial http://ad-mob.woa.com/src-components-text-highlight-text-highlight
 */

interface ITextItem {
  text: string
  highlight: boolean
}

const componentOptions = ADComponent({
  behaviors: [],
  // start
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_text_highlight
     */
    prefix: {
      type: String,
      value: 'ad_text_highlight',
    },
    /**
     * @property {String} text 要展示的文字
     * @default '''
     */
    text: {
      type: String,
      value: '',
    },
    /**
     * @property {String} target 要高亮的文字
     * @default '''
     */
    target: {
      type: String,
      value: '',
    },
    /**
     * @property {String} highlightColor 高亮颜色
     * @default '''
     */
    highlightColor: {
      type: String,
      value: 'var(--primary-color, #07c160)',
    },
    /**
     * @property {String} highlightStyle 高亮文字样式
     * @default '''
     */
    highlightStyle: {
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
  // end
  relations: {},
  observers: {
    text() {
      this.init()
    },
    target() {
      this.init()
    },
  },
  data: {
    textInner: [],
  },
  lifetimes: {
    attached() {
      this.init()
    },
  },
  methods: {
    getIndexes(text: string, target: string) {
      const regex = new RegExp(target, 'gi')
      let result
      const indexes = []
      do {
        result = regex.exec(text)
        if (result) {
          indexes.push(result?.index)
        }
      } while (result)
      return indexes
    },
    init() {
      const { text, target } = this.properties
      const textTransform = text.split('').map((item: string) => {
        return {
          text: item,
          highlight: false,
        }
      })
      if (text !== '' && target !== '') {
        const indexes = this.getIndexes(text, target)
        if (indexes.length !== 0) {
          const textPoi: Array<number> = []
          for (let index = 0; index < target.length; index += 1) {
            indexes.forEach((item: number) => {
              textPoi.push(item + index)
            })
          }
          textTransform.forEach((item: ITextItem, index: number) => {
            item.highlight = textPoi.includes(index)
          })
          if (textPoi.length > 0) {
            this.triggerEvent('onMatch', { value: textPoi })
          }
        }
      }
      this.setData({
        textInner: textTransform,
      })
    },
  },
})

Component(componentOptions)
