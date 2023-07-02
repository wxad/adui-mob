// import basic from './basic'

function ADComponent(options: WechatMiniprogram.Component.TrivialOption): any {
  // 加上默认的 externalClasses
  options.externalClasses = [
    'ad-class',
    'ad-hover-class',
    ...(options.externalClasses = options.externalClasses || []),
  ]

  // 增加默认的 behavior
  options.behaviors = [...(options.behaviors = options.behaviors || [])]

  // 增加默认的options，每个组件都增加 addGlobalClass 属性，这样可以
  // 在页面中进行样式的修改，每个组件的样式的类名加上唯一的前缀来达到防止样式的冲突
  options.options = {
    multipleSlots: true,
    addGlobalClass: true,
    // virtualHost: true,
    // styleIsolation: 'shared',
    ...options.options,
  }

  // 增加默认的 methods
  options.methods = {
    // 初始化父组件
    initParent(nodePath: string) {
      const parent = this.getRelationNodes(nodePath)[0]
      this.parent = parent || null
    },
    // 初始化子组件
    initChildren(nodePath: string) {
      const children = this.getRelationNodes(nodePath)
      this.children = children || null
    },
    // 对于有内部控制和外部控制的组件，初始化组件的状态
    initState(
      defaultPropName: any,
      propName: any,
      dataName: string,
      initValue?: any,
    ) {
      if (this.properties[propName] !== null) {
        this.setData({
          [dataName]: this.properties[propName],
        })
      } else if (this.properties[defaultPropName] !== null) {
        this.setData({
          [dataName]: this.properties[defaultPropName],
        })
      } else if (initValue !== undefined) {
        this.setData({
          [dataName]: initValue,
        })
      }
    },
    // 当值和默认值变化时改变组件的data
    propUpdate(
      isDefaultProp: boolean,
      propName: string,
      dataName: string,
      updateData: any,
    ) {
      if (!isDefaultProp) {
        if (updateData !== null && updateData !== this.data[dataName]) {
          this.setData({
            [dataName]: updateData,
          })
        }
      }
      if (isDefaultProp) {
        if (
          this.properties[propName] === null
          && updateData !== null
          && updateData !== this.data[dataName]
        ) {
          this.setData({
            [dataName]: updateData,
          })
        }
      }
    },
    // 是否更新组件的data，用于有内部控制和外部控制的组件
    shouldDataUpate(propName: string, dataName: string, dataValue: any) {
      if (this.properties[propName] === null) {
        this.setData({
          [dataName]: dataValue,
        })
      }
    },
    getNode(selector: string, all: boolean) {
      return new Promise((resolve, reject) => {
        this.createSelectorQuery()
          [all ? 'selectAll' : 'select'](selector)
          .boundingClientRect(
            (node: WechatMiniprogram.BoundingClientRectCallbackResult) => {
              if (all && Array.isArray(node) && node.length) {
                Array.isArray(node) && node.length
                  ? resolve(node)
                  : reject(node)
              } else {
                node ? resolve(node) : reject(node)
              }
            },
          )
          .exec()
      })
    },
    getViewportFilds(options: any) {
      const optionsFinal = {
        dataset: true,
        size: true,
        scrollOffset: true,
        properties: ['scrollX', 'scrollY'],
        computedStyle: ['margin', 'backgroundColor'],
        context: true,
        ...options,
      }
      return new Promise((resolve, reject) => {
        this.createSelectorQuery()
          .selectViewport()
          .fields(optionsFinal, (res: any) => {
            resolve(res)
          })
          .exec()
      })
    },
    ...options.methods,
  }
  return options
}

export default ADComponent
