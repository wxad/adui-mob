/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React, { useState, useRef, useEffect } from 'react'
import { jsx, Box } from 'theme-ui'
import { Link } from 'gatsby'
import { useMenus, useCurrentDoc, useDocs } from 'docz'
import { Nav } from 'adui'

export const Sidebar = React.forwardRef((props, ref) => {
  const currentDocRef = useRef()
  const currentDoc = useCurrentDoc()
  const [query, setQuery] = useState('')
  const menus = useMenus({ query })
  const menuChange = {
    items: [],
    group: [],
  }
  menus.map(item => {
    if (item.menu) {
      menuChange.group.push(item)
    } else if (item.filepath !== 'README.md') {
      menuChange.items.push(item)
    }
  })

  console.log('pakizheng 2222', menuChange)

  return (
    <Box ref={ref} data-testid="sidebar">
      <Nav selectedIndex={currentDoc.route}>
        {menuChange.items &&
          menuChange.items.map(item => {
            return (
              <Nav.Item index={item.route} key={item.id}>
                {item.name}
                <Link to={item.route} key={item.id} />
              </Nav.Item>
            )
          })}
        <Nav.Divider />
        {menuChange.group &&
          menuChange.group.map(item => {
            return (
              <div>
                <Nav.Group title={item.name}>
                  {item.menu.map(memuItem => {
                    return (
                      <Nav.Item index={memuItem.route} key={memuItem.id}>
                        {memuItem.name}
                        <Link to={memuItem.route} key={memuItem.id} />
                      </Nav.Item>
                    )
                  })}
                </Nav.Group>
                <Nav.Divider />
              </div>
            )
          })}
      </Nav>
    </Box>
  )
})
