const fs = require('fs')
const path = require('path')

// 处理原始数据的描述
const generateDesc = (data) => {
  if (!data) return ''
  return data.split('<p>')[1].split('</p>')[0]
}

// vscode 需要的数据
const vscodeData = []
// 开发者文档需要的数据
const propData = {}

const generateVscodeData = (data) => {
  const componentData = data[0].tags
  const componentAttrData = data.filter((item, index) => index !== 0)
  if (!componentData) return
  const component = {}
  component.attrs = []
  componentData.forEach((item) => {
    component[item.type] = item.string
  })
  if (!componentAttrData) return
  componentAttrData.forEach((item) => {
    const componentAttrItem = {}
    item.tags.forEach((attrItem) => {
      switch (attrItem.type) {
        case 'property':
          componentAttrItem.name = attrItem.name
          componentAttrItem.type = [...attrItem.types]
          componentAttrItem.description = generateDesc(attrItem.description)
          break
        case 'default':
          componentAttrItem.defaultValue = attrItem.string
          break
        case 'enum':
          const enums = attrItem.string.split(' | ')
          componentAttrItem.enum = enums.map((item) => {
            return {
              value: item.split(': ')[0],
              description: item.split(': ')[1],
            }
          })
          break
        default:
          componentAttrItem[item.type] = attrItem.string
          break
      }
    })
    component.attrs.push(componentAttrItem)
  })
  vscodeData.push(component)
}

const generatePropData = (data, fileName) => {
  const componentAttrData = data.filter((item, index) => index !== 0)
  if (!componentAttrData) return
  const fileNameLower = fileName.toLowerCase()
  propData[fileNameLower] = []
  componentAttrData.forEach((item) => {
    const componentAttrItem = {}
    item.tags.forEach((attrItem) => {
      switch (attrItem.type) {
        case 'property':
          componentAttrItem.name = attrItem.name
          componentAttrItem.type = attrItem.types.join(',')
          componentAttrItem.description = generateDesc(attrItem.description)
          break
        case 'default':
          componentAttrItem.value = attrItem.string
          break
        case 'enum':
          componentAttrItem.description = `${componentAttrItem.description}，${attrItem.string}`
          break
        default:
          componentAttrItem[item.type] = attrItem.string
          break
      }
    })
    propData[fileNameLower].push(componentAttrItem)
  })
}

const generateAllData = () => {
  fs.readdirSync(path.resolve(__dirname, 'commentData/components')).forEach(
    (dirName) => {
      if (dirName === 'common') return
      const filePath = `./commentData/components/${dirName}/${dirName}.json`
      const fileData = require(filePath)
      if (!fileData) return
      generateVscodeData(fileData)
      generatePropData(fileData, dirName)
    }
  )

  // 数据写入
  fs.writeFileSync('./vscodeData.json', JSON.stringify(vscodeData))
  fs.writeFileSync(
    path.join(
      path.resolve(__dirname),
      'src/gatsby-theme-docz/components/MainContainer/propData.json'
    ),
    JSON.stringify(propData)
  )
}

module.exports = function generateData() {
  generateAllData()
}
