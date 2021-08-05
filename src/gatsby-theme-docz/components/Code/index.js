/** @jsx jsx */
/* eslint react/jsx-key: 0 */
// import Highlight, { defaultProps } from 'prism-react-renderer'
import React, {useRef, useState} from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { jsx } from 'theme-ui'
import { Button } from 'adui'

import './styles.scss'

export const Code = ({ children }) => {
  let timer = 0
  const replacedCodes = children.replace(/\n\s*\n/g, '\n')

  const [copied, setCopied] = useState(false)

  const textareaRef = useRef()

  const handleCopy = () => {
    textareaRef.current.select()
    document.execCommand('copy')
    setCopied(true)
  }

  const handleMouseEnter = () => {
    clearTimeout(timer)
  }

  const handleMouseLeave = () => {
    timer = setTimeout(() => {
      setCopied(false)
    }, 1000)
  }


  return (
    <div className="codes">
      <SyntaxHighlighter
        wrapLines
        customStyle={{ backgroundColor: 'transparent' }}
        linenumberstyle={{ color: '#bab6b6' }}
        className="highlight"
        language="jsx"
      >
        {replacedCodes}
      </SyntaxHighlighter>
      <textarea
        ref={textareaRef}
        value={replacedCodes}
        readOnly
        style={{
          position: 'absolute',
          top: '-9999px',
        }}
      />
      <Button
        className="copyBtn"
        leftIcon={copied ? 'tick-circle' : 'copy-outlined'}
        intent={copied ? 'primary' : 'normal'}
        theme="light"
        onClick={handleCopy}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {copied ? '已复制' : '复制代码'}
      </Button>
    </div>
  )
}
