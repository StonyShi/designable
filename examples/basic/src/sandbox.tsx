import React from 'react'
import { Content } from './content'
import { renderSandboxContent } from '@stonebule/designable-react-sandbox'
import './theme.less'

renderSandboxContent(() => {
  return <Content />
})
