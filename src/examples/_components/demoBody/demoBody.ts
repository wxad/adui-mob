import ADComponent from '../../../components/common/adComponent'

const componentOptions = ADComponent({
  behaviors: [],
  // start
  properties: {
    prefix: {
      type: String,
      value: 'demo_body',
    },
  },
  // end
  data: {
  },
})

Component(componentOptions)