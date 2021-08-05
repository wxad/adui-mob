import React, { useRef, useEffect } from 'react'
// import { jsx, Layout as BaseLayout, Main } from 'theme-ui'

import { Layout as AdLayout } from 'adui'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'
import { MainContainer } from '../MainContainer'
import { data } from '../MainContainer/index'
import './styles.scss'

export const Layout = ({ children }) => {
  console.log('pakizheng777', data)
  console.log('pakizheng', children)
  const nav = useRef()

  useEffect(() => {
    console.log('pakizheng tttt')
  })

  return (
    <div>
      {typeof document !== 'undefined' ? (
        <AdLayout data-testid="layout" className="layout">
          <AdLayout.Header affixed>
            <Header />
          </AdLayout.Header>
          <div style={{ display: 'flex' }}>
            <AdLayout.Aside
              affixed
              style={{ top: '86px', maxHeight: 'calc(100vh - 86px)' }}
            >
              <Sidebar ref={nav} />
            </AdLayout.Aside>
            <AdLayout.Main>
              <MainContainer data-testid="main-container">
                {children}
              </MainContainer>
            </AdLayout.Main>
          </div>
        </AdLayout>
      ) : null}
    </div>
  )
}
