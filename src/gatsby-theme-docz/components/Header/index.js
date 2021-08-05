/** @jsx jsx */
import { jsx, Box, Flex, useColorMode } from 'theme-ui'
import { useConfig, useCurrentDoc } from 'docz'
import './styles.scss'
// import { Edit, Menu, Sun, Github } from '../Icons'
// import { Logo } from '../Logo'

export const Header = props => {
  const { onOpen } = props
  const {
    repository,
    themeConfig: { showDarkModeSwitch, showMarkdownEditButton },
  } = useConfig()
  const { edit = true, ...doc } = useCurrentDoc()
  const [colorMode, setColorMode] = useColorMode()

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }

  return (
    <div className='header' data-testid="header">
      adui-for-mobile
    </div>
  )
}
