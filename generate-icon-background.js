// 这个文件目的是在编译开始的时候将 icon 的 svg 文件转化成 background-image 数据
// 处理 icon 的插件
const fs = require('fs')
const path = require('path')

function writeFile() {
  const outputPath = path.join(path.resolve(__dirname), './src/components/common/icon/icon-backgrounds.js')
  const filePath = path.resolve(__dirname, 'node_modules/adui-icon/lib/data/data-URI/data-URI-data.js')
  const typeOutputPath = path.join(path.resolve(__dirname), './src/pages/icon/iconType.js')
  const typePath = path.resolve(__dirname, 'node_modules/adui-icon/lib/data/icon-types/type-data.js')
  const typeContent = fs.readFileSync(typePath, 'utf-8')
  const content = fs.readFileSync(filePath, 'utf-8')
  fs.writeFileSync(
    outputPath,
    content,
  )
  fs.writeFileSync(
    typeOutputPath,
    typeContent,
  )
}

module.exports = function handleSVG() {
  writeFile()
}
