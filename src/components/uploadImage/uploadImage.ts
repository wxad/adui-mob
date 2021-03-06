import ADComponent from '../common/adComponent'

const ACTIONTYPE = {
  CHANGE: 'change',
  DELETE: 'delete',
}

/**
 * @name ad-upload-image
 * @description 上传组件
 * @tutorial http://ad-mob.woa.com/src-components-upload-image-upload-image
 */

const componentOptions = ADComponent({
  behaviors: [],
  properties: {
    /**
     * @property {String} prefix 默认类名前缀
     * @default ad_upload_image
     */
    prefix: {
      type: String,
      value: 'ad_upload_image',
    },
    /**
     * @property {String} placeholder 占位图，自定义占位图，组件提供的可选的展位图请参考 placeholderType
     * @default ''
     */
    placeholder: {
      type: String,
      value: '',
    },
    /**
     * @property {String} placeholderType 占位图的类型
     * @default ''
     * @enum IDPerson: 身份证人像面 | IDNation: 身份证国徽面 | IDTaiWan: 台胞证背面，无国徽 | businessLicense: 营业执照 | serviceLicense: 互联网新闻信息服务许可证
     */
    placeholderType: {
      type: String,
      value: '',
    },
    /**
     * @property {String} placeholderMode 展位图裁剪模式，与官方的 mode 一致
     * @default aspectFit
     */
    placeholderMode: {
      type: String,
      value: 'aspectFit',
    },
    /**
     * @property {String} defaultValue 默认值，内部控制
     * @default null
     */
    defaultValue: {
      type: String,
      value: null,
    },
    /**
     * @property {String} value 值，外部控制
     * @default null
     */
    value: {
      type: String,
      value: null,
      desc: '值，外部控制',
    },
    /**
     * @property {String} desc 上传组件的描述
     * @default null
     */
    desc: {
      type: String,
      value: '',
    },
    /**
     * @property {String} imgMode 图片裁剪模式，与官方的 mode 一致
     * @default aspectFit
     */
    imgMode: {
      type: String,
      value: 'aspectFit',
    },
    /**
     * @property {Number} imgCount 最多可选择的图片的数量
     * @default 1
     */
    imgCount: {
      type: Number,
      value: 1,
    },
    /**
     * @property {Boolean} banner 是否是通栏
     * @default true
     */
    banner: {
      type: Boolean,
      value: true,
    },
    /**
     * @property {String} icon icon 的名字
     * @default add
     */
    icon: {
      type: String,
      value: 'add',
    },
    /**
     * @property {Number} iconSize icon 的尺寸
     * @default 20
     */
    iconSize: {
      type: Number,
      value: 20,
      desc: 'icon 的尺寸',
    },
    /**
     * @property {Array} sizeType 所选的图片的尺寸, 可选值为：original、compressed
     * @default ['original', 'compressed']
     */
    sizeType: {
      type: Array,
      value: ['original', 'compressed'],
    },
    /**
     * @property {Array} sourceType 选择图片的来源，可选值为：album、camera
     * @default ['album', 'camera']
     */
    sourceType: {
      type: Array,
      value: ['album', 'camera'],
    },
    /**
     * @property {Boolean} onlyPreview 是否只能查看，这种情况下不能进行图片的更换和删除等其他操作
     * @default false
     */
    onlyPreview: {
      type: Boolean,
      value: false,
    },
    /**
     * @property {Boolean} deletable 是否可删除，默认不能删除，只能更换
     * @default false
     */
    deletable: {
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
    },
    /**
     * @property {String} placeholderStyle 占位图样式
     * @default ''
     */
    placeholderStyle: {
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

  /**
   * @function
   * @name bind:onChange
   * @param {Object} event {event: {detail: {value: string}}}
   * @description 值变化时的回调
   * @default () => {}
   */

  /**
   * @function
   * @name bind:onFail
   * @param {Object} event {event: {detail: {value: any}}}
   * @description 出错时的回调
   * @default () => {}
   */

  observers: {
    value(value: string) {
      this.propUpdate(false, '', 'valueInner', value)
    },
    defaultValue(defaultValue: string) {
      this.propUpdate(true, 'value', 'valueInner', defaultValue)
    },
  },
  data: {
    valueInner: '',
    isSheetVisible: false,
  },
  lifetimes: {
    ready() {
      this.initState('defaultValue', 'value', 'valueInner')
    },
  },
  methods: {
    click() {
      const { deletable, disabled, onlyPreview } = this.properties
      if (disabled) return
      const { valueInner } = this.data
      if (deletable && valueInner !== '' && !onlyPreview) {
        this.openSheet()
        return
      }
      if (onlyPreview) {
        this.previewImage()
        return
      }
      this.choseImage()
    },
    choseImage() {
      const that = this
      const { sizeType, sourceType, imgCount } = this.properties
      wx.chooseImage({
        count: imgCount,
        sizeType,
        sourceType,
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const { tempFilePaths } = res
          that.shouldDataUpate('value', 'valueInner', tempFilePaths[0])
          that.triggerEvent('onChange', { value: res })
        },
        fail(res) {
          that.triggerEvent('onFail', { value: res })
        },
      })
    },
    deleteImage() {
      this.shouldDataUpate('value', 'valueInner', '')
      this.triggerEvent('onChange', { value: '' })
    },
    previewImage() {
      const { valueInner } = this.data
      if (!valueInner) {
        console.log('请确保已经选择了图片')
        return
      }
      wx.previewImage({
        current: valueInner,
        urls: [valueInner],
      })
    },
    changeImage(event: any) {
      const { value } = event.detail
      if (value === ACTIONTYPE.CHANGE) {
        this.choseImage()
      }
      if (value === ACTIONTYPE.DELETE) {
        this.deleteImage()
      }
      this.setData({
        isSheetVisible: false,
      })
    },
    openSheet() {
      this.setData({
        isSheetVisible: true,
      })
    },
    closeSheet() {
      this.setData({
        isSheetVisible: false,
      })
    },
  },
})

Component(componentOptions)
