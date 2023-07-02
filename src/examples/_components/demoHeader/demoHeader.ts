import ADComponent from '../../../components/common/adComponent'

const componentOptions = ADComponent({
  behaviors: [],
  // start
  properties: {
    prefix: {
      type: String,
      value: 'demo_header',
    },
    title: {
      type: String,
      value: '',
    },
    desc: {
      type: String,
      value: '',
    },
  },
  // end
  data: {},
})

Component(componentOptions)