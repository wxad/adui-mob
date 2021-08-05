import ADComponent from '../common/adComponent'

const componentOptions = ADComponent({
  behaviors: [],
  // start
  properties: {
    prefix: {
      type: String,
      value: 'ad_half_screen',
    },
    zIndex: {
      type: Number,
      value: 120,
    },
    show: {
      type: Boolean,
      value: false,
    },
    canOutsideClickClose: {
      type: Boolean,
      value: false,
    },
    position: {
      type: String,
      value: 'top',
    },
    duration: {
      type: Number,
      value: 300,
    },
    showOverlay: {
      type: Boolean,
      value: true,
    },
    round: {
      type: Boolean,
      value: false,
    },
    customStyle: {
      type: String,
      value: '',
      desc: '自定义样式',
    },
  },
  // end
  relations: {},
  observers: {},
  data: {
    position: '',
  },
  lifetimes: {
    attached() {
      const { position } = this.properties
      let result = ''
      if (position === 'top') {
        result = 'down'
      }
      if (position === 'bottom') {
        result = 'up'
      }
      if (position === 'left') {
        result = 'left'
      }
      if (position === 'right') {
        result = 'right'
      }
      this.setData({
        position: result,
      })
    },
  },
  methods: {
    close() {
      console.log('paki 测试测试')
      this.setData(
        {
          show: false,
        },
        () => {
          this.triggerEvent('onClose')
        }
      )
    },
    clickMask() {
      const { canOutsideClickClose } = this.properties
      if (canOutsideClickClose) {
        this.close()
      }
    },
    noop() {},
  },
})

Component(componentOptions)
