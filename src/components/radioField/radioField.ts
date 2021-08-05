import ADComponent from '../common/adComponent'

/**
 * @name ad-radio-field
 * @description radio 触发区域组件，在移动端，很多情况下 radio 的触发区域都是要求大于 radio 本身，这种情况下可以使用这个组件包围住想触发的区域来扩大 radio 的点击区域
 * @tutorial http://ad-mob.woa.com/src-components-radio-field-radio-field
 */

const componentOptions = ADComponent({
  data: {
  },
  relations: {
    '../radioGroup/radioGroup': {
      type: 'ancestor',
    },
    '../radio/radio': {
      type: 'descendant',
      linked() {
        this.initChildren('../radio/radio')
      },
    },
  },
  lifetimes: {
    attached() {},
    ready() {
      this.initParent('../radioGroup/radioGroup')
    },
    moved() {},
    detached() {},
  },
  methods: {
    handleCilck() {
      if (!this.children) return console.warn('却确认组件是否正确使用')
      if (this.children.length > 1) return console.warn('checkboxFiled 组件内部只能有一个 checkbox 组件')
      this.children[0].handleCilck()
    },
  },
})

Component(componentOptions)