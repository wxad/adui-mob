import ADComponent from '../../../components/common/adComponent'

const componentOptions = ADComponent({
  behaviors: [],
  // start
  properties: {
    prefix: {
      type: String,
      value: 'demo_block',
    },
    title: {
      type: String,
      value: '',
    },
    noPadding: {
      type: Boolean,
      value: false,
    },
    noShadow: {
      type: Boolean,
      value: false,
    },
    noTitleMargin: {
      type: Boolean,
      value: false,
    },
    noBackground: {
      type: Boolean,
      value: false,
    },
  },
  // end
  data: {},
})

Component(componentOptions)