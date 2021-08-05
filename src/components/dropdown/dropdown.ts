import ADComponent from '../common/adComponent'

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    prefix: {
      type: String,
      value: 'ad_dropdown',
      desc: '默认类名前缀',
    },
    defaultVisible: {
      type: Boolean,
      value: null,
      desc: '默认是否展示下来内筒，内部控制',
    },
    visible: {
      type: Boolean,
      value: null,
      desc: '展示下拉内容，外部控制',
    },
    headerHeight: {
      type: Number,
      value: 0,
      desc: '给定头部的高度，这个值是为了满足头部是fix的情况，因为这种情况下头部的高度获取是0',
    },
    maskPosition: {
      type: Number,
      value: 0,
      desc: '自定义 mask 的位置',
    },
    hasMask: {
      type: Boolean,
      value: true,
      desc: '是否带蒙层',
    },
    isMaskClickable: {
      type: Boolean,
      value: false,
      desc: '蒙层是否可点击收起',
    },
    maskZindex: {
      type: Number,
      value: 110,
      desc: '蒙层的z-index',
    },
    noShadow: {
      type: Boolean,
      value: false,
      desc: '展开的时候不要顶部的分割线',
    },
    customStyle: {
      type: String,
      value: '',
      desc: '自定义样式',
    },
  },
  observers: {
    'defaultVisible, visible': function(defaultVisible, visible) {
      this.setMaskTop()
      this.setData({
        showContent: visible !== null ? visible : defaultVisible,
      })
    },
  },
  data: {
    showContent: false,
    maskTop: 0,
  },
  lifetimes: {
    attached() {},
    moved() {},
    detached() {},
    ready() {
      this.setMaskTop()
    },
  },
  methods: {
    // setBodyHeight() {
    //   const { prefix } = this.properties
    //   this.getNode(`.${prefix}_body_inner`, false).then((res: any) => {
    //     console.log('paki222', res)
    //     this.setData({
    //       style: `height: ${res.height}px; transition: height .2s ease-in-out;`,
    //     })
    //   })
    // },
    setMaskTop() {
      const { hasMask } = this.properties
      if (!hasMask) {
        return
      }
      const { prefix, headerHeight, maskPosition } = this.properties
      this.getNode(`.${prefix}_header`, false).then((res: any) => {
        const { top, height } = res
        const heightFinal = headerHeight === 0 ? height : headerHeight
        const topFinal = maskPosition === 0 ? top : maskPosition
        this.setData({
          maskTop: heightFinal + topFinal,
        })
      })
    },
    close() {
      const { isMaskClickable } = this.properties
      if (isMaskClickable) {
        this.setData({
          bodyHeight: 0,
          showContent: false,
        }, () => {
          this.triggerEvent('onClose')
        })
      }
    },
  },
})

Component(componentOptions)