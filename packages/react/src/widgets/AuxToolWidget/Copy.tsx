import React from 'react'
import { TreeNode } from '@stonebule/designable-core'
import { usePrefix } from '../../hooks'
import { IconWidget } from '../IconWidget'
import { Button } from 'antd'
import { ReactFC } from '@formily/reactive-react'
export interface ICopyProps {
  node: TreeNode
  style?: React.CSSProperties
}

export const Copy: ReactFC<ICopyProps> = ({ node, style }) => {
  const prefix = usePrefix('aux-copy')
  if (node === node.root) return null
  return (
    <Button
      className={prefix}
      style={style}
      type="primary"
      onClick={() => {
        TreeNode.clone([node])
      }}
    >
      <IconWidget infer="Clone" />
    </Button>
  )
}

Copy.displayName = 'Copy'
