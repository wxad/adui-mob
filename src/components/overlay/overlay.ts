import ADComponent from '../common/adComponent'

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    prefix: {
      type: String,
      value: 'ad_overlay',
    },
    show: {
      type: Boolean,
      value: false,
    },
    zIndex: {
      type: Number,
      value: 99,
    },
    duration: {
      type: Number,
      value: 300,
    },
    customStyle: {
      type: String,
      value: '',
    },
  },
  data: {},
  methods: {
    onClick() {
      this.triggerEvent('onClick')
    },
    noop() {},
  },
})

Component(componentOptions)
