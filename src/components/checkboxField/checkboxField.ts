import ADComponent from '../common/adComponent'

/**
 * @name ad-checkbox-field
 * @description checkbox 触发区域组件，在移动端，很多情况下 checkbox 的触发区域都是要求大于 checkbox 本身，这种情况下可以使用这个组件包围住想触发的区域来扩大 checkbox 的点击区域
 * @tutorial http://ad-mob.woa.com/src-components-checkbox-field-checkbox-field
 */

const componentOptions = ADComponent({
  data: {
  },
  relations: {
    '../checkboxGroup/checkboxGroup': {
      type: 'ancestor',
    },
    '../checkbox/checkbox': {
      type: 'descendant',
      linked() {
        this.initChildren('../checkbox/checkbox')
      },
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
    handleClick() {
      if (!this.children) return console.warn('请确认组件是否正确使用')
      if (this.children.length > 1) return console.warn('checkboxFiled 组件内部只能有一个 checkbox 组件')
      this.children[0].handleClick()
    },
  },
})

Component(componentOptions)