/**
 * 这个组价是直接复用 vant-weapp 的 animation 组件，在此表达对 vant 的感谢！
 */

import ADComponent from '../common/adComponent'
import { isObj } from '../common/utils'

/**
 * @name ad-animation
 * @description 动画组件
 * @tutorial http://ad-mob.woa.com/src-components-action-sheet-action-sheet
 */

const componentOptions = ADComponent({
  behaviors: [],
  externalClasses: [
    'custom-class',
    'enter-class',
    'enter-active-class',
    'enter-to-class',
    'leave-class',
    'leave-active-class',
    'leave-to-class',
  ],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_animation
     */
    prefix: {
      type: String,
      value: 'ad_animation',
    },
    /**
     * @property {Boolean} show 是否显示
     * @default true
     */
    show: {
      type: Boolean,
      value: true,
      observer: 'observerShow',
    },
    /**
     * @property {Number} duration 动画持续时间
     * @default 200
     */
    duration: {
      type: null,
      value: 200,
    },
    /**
     * @property {String} name 动画名字
     * @default fade
     */
    name: {
      type: String,
      value: 'fade',
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
    type: '',
    inited: false,
    display: false,
    classes: '',
  },
  lifetimes: {
    attached() {
      if (this.data.show) {
        this.enter()
      }
    },
  },
  methods: {
    observerShow(value: boolean) {
      value ? this.enter() : this.leave()
    },
    getClassNames(name: string) {
      const { prefix } = this.properties
      return {
        enter: `${prefix}_${name}_enter ${prefix}_${name}_enter_active enter-class enter-active-class`,
        enterTo: `${prefix}_${name}_enter_to ${prefix}_${name}_enter_active enter-to-class enter-active-class`,
        leave: `${prefix}_${name}_leave ${prefix}_${name}_leave_active leave-class leave-active-class`,
        leaveTo: `${prefix}_${name}_leave_to ${prefix}_${name}_leave_active leave-to-class leave-active-class`,
      }
    },
    checkStatus(status: 'enter' | 'leave') {
      if (status !== this.status) {
        throw new Error(`incongruent status: ${status}`)
      }
    },
    nextTick() {
      return new Promise((resolve) => setTimeout(resolve, 1000 / 30))
    },
    enter() {
      const { duration, name } = this.properties
      const classNames = this.getClassNames(name)
      const currentDuration = isObj(duration) ? duration.enter : duration

      this.status = 'enter'
      this.triggerEvent('before-enter')

      Promise.resolve()
        .then(this.nextTick)
        .then(() => {
          this.checkStatus('enter')
          this.triggerEvent('enter')

          this.setData({
            inited: true,
            display: true,
            classes: classNames.enter,
            currentDuration,
          })
        })
        .then(this.nextTick)
        .then(() => {
          this.checkStatus('enter')
          this.transitionEnded = false

          this.setData({
            classes: classNames.enterTo,
          })
        })
        .catch(() => {})
    },
    leave() {
      if (!this.data.display) {
        return
      }

      const { duration, name } = this.data
      const classNames = this.getClassNames(name)
      const currentDuration = isObj(duration) ? duration.leave : duration

      this.status = 'leave'
      this.triggerEvent('before-leave')

      Promise.resolve()
        .then(this.nextTick)
        .then(() => {
          this.checkStatus('leave')
          this.triggerEvent('leave')

          this.setData({
            classes: classNames.leave,
            currentDuration,
          })
        })
        .then(this.nextTick)
        .then(() => {
          this.checkStatus('leave')
          this.transitionEnded = false
          setTimeout(() => this.onTransitionEnd(), currentDuration)

          this.setData({
            classes: classNames.leaveTo,
          })
        })
        .catch(() => {})
    },
    onTransitionEnd() {
      if (this.transitionEnded) {
        return
      }

      this.transitionEnded = true
      this.triggerEvent(`after-${this.status}`)

      const { show, display } = this.data
      if (!show && display) {
        this.setData({ display: false })
      }
    },
  },
})

Component(componentOptions)
