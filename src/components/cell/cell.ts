import ADComponent from '../common/adComponent'

/**
 * @name ad-cell
 * @description 列表子组件，ad-cell-group 的子孙组件
 * @tutorial http://ad-mob.woa.com/src-components-cell-cell
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_cell
     */
    prefix: {
      type: String,
      value: 'ad_cell',
    },
    /**
     * @property {String} title 左侧标题
     * @default ''
     */
    title: {
      type: String,
      value: '',
    },
    /**
     * @property {String} titleStyle 自定义左侧标题样式
     * @default ''
     */
    titleStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} desc 标题下方的描述
     * @default ''
     */
    desc: {
      type: String,
      value: '',
    },
    /**
     * @property {String} rightDesc 右边的描述
     * @default ''
     */
    rightDesc: {
      type: String,
      value: '',
    },
    /**
     * @property {String} placeholder 右侧内容的占位
     * @default ''
     */
    placeholder: {
      type: String,
      value: '',
    },
    /**
     * @property {String} value 右侧值的内容
     * @default ''
     */
    value: {
      type: String,
      value: '',
      desc: '右侧内容',
    },
    /**
     * @property {Boolean} interactive 是否强制开启点击反馈，
     * @default false
     */
    interactive: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} active 是否激活，激活状态背景颜色会加深
     * @default false
     */
    active: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} isLink 是否是点击跳转类型，这种情况右边会显示向右的icon，开启点击反馈
     * @default false
     */
    isLink: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} banner 是否通栏，通栏情况下边框会撑满父元素
     * @default false
     */
    banner: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} rightBanner 右通栏，边框右边撑满
     * @default false
     */
    rightBanner: {
      type: Boolean,
      value: false,
      desc: '右通栏',
    },
    /**
     * @property {Boolean} leftEllipsis 左边内容超出时是否省略
     * @default false
     */
    leftEllipsis: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} rightEllipsis 右边的内容超出时是否省略
     * @default true
     */
    rightEllipsis: {
      type: Boolean,
      value: true,
    },
    /**
     * @property {String} avatar 左侧头像
     * @default ''
     */
    avatar: {
      type: String,
      value: '',
    },
    /**
     * @property {String} avatarSize 左侧头像尺寸，默认是 medium
     * @default medium
     */
    avatarSize: {
      type: String,
      value: 'medium',
    },
    /**
     * @property {String} avatarMode 左侧图像的裁剪格式
     * @default aspectFit
     */
    avatarMode: {
      type: String,
      value: 'aspectFit',
    },
    /**
     * @property {Boolean} avatarRound 左侧图像是否是圆形头像
     * @default false
     */
    avatarRound: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} error 是否错误
     * @default false
     */
    error: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {String} error 出错提示的 icon
     * @default alert-circle
     */
    errorIcon: {
      type: String,
      value: 'alert-circle',
      desc: '出错提示的icon',
    },
    /**
     * @property {String} leftIcon 左边图标
     * @default ''
     */
    leftIcon: {
      type: String,
      value: '',
      desc: '左边图标',
    },
    /**
     * @property {String} leftIconColor 左边图标的颜色
     * @default var(--transparent-gray-900, rgba(0, 0, 0, 0.88))
     */
    leftIconColor: {
      type: String,
      value: 'var(--transparent-gray-900, rgba(0, 0, 0, 0.88))',
    },
    /**
     * @property {Number} leftIconSize 左边图标的大小
     * @default 18
     */
    leftIconSize: {
      type: Number,
      value: 18,
    },
    /**
     * @property {String} rightIcon 右边图标
     * @default ''
     */
    rightIcon: {
      type: String,
      value: '',
    },
    /**
     * @property {String} rightIconColor 右边图标的颜色
     * @default var(--transparent-gray-800, rgba(0, 0, 0, 0.58))
     */
    rightIconColor: {
      type: String,
      value: 'var(--transparent-gray-800, rgba(0, 0, 0, 0.58))',
    },
    /**
     * @property {Number} rightIconSize 右边图标的大小
     * @default 18
     */
    rightIconSize: {
      type: Number,
      value: 18,
      desc: '右边图标的大小',
    },
    /**
     * @property {String} rightPicture 右边缩略图链接
     * @default ''
     */
    rightPicture: {
      type: String,
      value: '',
    },
    /**
     * @property {String} rightPictureMode 右边缩略图的裁剪模式
     * @default aspectFill
     */
    rightPictureMode: {
      type: String,
      value: 'aspectFill',
    },
    /**
     * @property {Number} rightPictureWidth 右边缩略图的宽度
     * @default 24
     */
    rightPictureWidth: {
      type: Number,
      value: 24,
    },
    /**
     * @property {Number} rightPictureHeight 右边缩略图的高度
     * @default 24
     */
    rightPictureHeight: {
      type: Number,
      value: 24,
    },
    /**
     * @property {Boolean} noBorder 是否没有边框
     * @default false
     */
    noBorder: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} noTopBorder 没有上边框，这个属性用在外部单独控制 cell 的上边框，一般用在大数据量的情况，这种情况下 cell 单独使用，不要在 cell 外面包一层 cellGroup
     * @default false
     */
    noTopBorder: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} noBottomBorder 没有下边框，这个属性用在外部单独控制 cell 的下边框，一般用在大数据量的情况，这种情况下 cell 单独使用，不要在 cell 外面包一层 cellGroup
     * @default false
     */
    noBottomBorder: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} disabled 是否禁用
     * @default false
     */
    disabled: {
      type: Boolean,
      value: false,
      desc: '是否是禁用态',
    },
    /**
     * @property {String} innerOuterStyle cell 内部外层的自定义样式
     * @default ''
     */
    innerOuterStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} innerStyle cell 内部的样式
     * @default ''
     */
    innerStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} leftStyle cell 内部左边的样式
     * @default ''
     */
    leftStyle: {
      type: String,
      value: '',
    },
    /**
     * @property {String} rightStyle cell 内部右边的样式
     * @default ''
     */
    rightStyle: {
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
  data: {
    // isFirst: true,
    // isLast: true,
    noTopBorderInner: false,
    noBottomBorderInner: false,
  },
  relations: {
    '../cellGroup/cellGroup': {
      type: 'ancestor',
    },
  },
  lifetimes: {
    ready() {
      const { noTopBorder, noBottomBorder } = this.properties
      if (noTopBorder) {
        this.setData({
          noTopBorderInner: noTopBorder,
        })
      }
      if (noBottomBorder) {
        this.setData({
          noBottomBorderInner: noBottomBorder,
        })
      }
    },
  },
  methods: {
    isFirst(isFirst: boolean) {
      if (isFirst === this.data.isFirst) {
        return
      }
      this.setData({
        isFirst,
      })
    },
    isLast(isLast: boolean) {
      if (isLast === this.data.isLast) {
        return
      }
      this.setData({
        isLast,
      })
    },
    removeTopBorder(noTopBorder: boolean) {
      if (noTopBorder === this.data.noTopBorder) {
        return
      }
      this.setData({
        noTopBorderInner: noTopBorder,
      })
    },
    removeBottomBorder(noBottomBorder: boolean) {
      if (noBottomBorder === this.data.noBottomBorder) {
        return
      }
      this.setData({
        noBottomBorderInner: noBottomBorder,
      })
    },
  },
})

Component(componentOptions)
