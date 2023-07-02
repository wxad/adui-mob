const basic = Behavior({
  methods: {
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
    getFields(
      selector: string,
      all: boolean,
      fieldsOption: WechatMiniprogram.Fields,
    ) {
      return new Promise((resolve) => {
        this.createSelectorQuery()
          [all ? 'selectAll' : 'select'](selector)
          .fields(fieldsOption, (node) => {
            if (all && Array.isArray(node) && node.length) {
              resolve(node)
            }

            if (!all && node) {
              resolve(node)
            }
          })
          .exec()
      })
    },
    set(data: object, callback: Function) {
      return new Promise((resolve) => {
        this.setData(data, () => {
          if (callback && typeof callback === 'function') {
            callback.call(this)
          }
          resolve()
        })
      })
    },
  },
})

export default basic
