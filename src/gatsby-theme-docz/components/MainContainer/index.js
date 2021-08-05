/** @jsx jsx */
import React from 'react'
import { jsx, Container } from 'theme-ui'
import { Table } from 'adui'
import { useCurrentDoc } from 'docz'
import icons from 'adui-icon'
import PropData from './propData.json'
// console.log('pakizheng ----', PropData)
// import { PropData } from './propData'
// import * as PropData from '../../../../propData.json'
import './styles.scss'

const fileFilter = [
  'actionSheetItem',
  'selectItem',
  'cell',
  'checkbox',
  'checkboxField',
  'collapseItem',
  'radio',
  'radioField',
  'stepsItem',
  'tabbarItem',
  '开始使用',
  '设计资源',
  '更新日志',
]

export const data = {
  name: 'hhhhh',
}

const chanegFirstLetter = (word) =>
  `${word.charAt(0).toLowerCase()}${word.slice(1)}`

export const MainContainer = ({ children, ...rest }) => {
  const currentDoc = useCurrentDoc()
  const fileName = currentDoc.name.toLowerCase()
  console.log('pakizheng +++++', fileName)
  console.log('pakizheng ------', PropData, PropData[fileName])
  const getTable = () => {
    let showTable = false
    if (children) {
      children.map((item) => {
        if (item.props.id === 'properties') {
          showTable = true
        }
      })
      if (showTable && PropData[fileName]) {
        console.log('pakizheng =====', fileName, PropData[fileName])
        return (
          <Table
            columnsResizable
            dataSource={PropData[fileName]}
            columns={[
              {
                dataIndex: 'name',
                title: '属性',
              },
              {
                dataIndex: 'description',
                title: '描述',
              },
              {
                dataIndex: 'type',
                title: '类型',
              },
              {
                dataIndex: 'value',
                title: '默认值',
              },
            ]}
          />
        )
      }
    }
    return null
  }
  return (
    <div className="main">
      <Container className="container" {...rest}>
        <div className="container_body">
          {children}
          {getTable()}
        </div>
        {fileFilter.includes(chanegFirstLetter(currentDoc.name)) ? (<div className="qrCode" />) : (
          <div className="qrCode">
            <img
              alt={fileName}
              src={`https://wxa.wxs.qq.com/images/paki/adui-for-mobile/${chanegFirstLetter(
                currentDoc.name,
              )}.png`}
            />
            <div className="qrcode_desc">扫码体验</div>
          </div>
        )}
      </Container>
    </div>
  )
}
