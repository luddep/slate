/** @jsx h */

import { h } from '../../../helpers'

export const input = (
  <value>
    <block>
      <cursor />one
    </block>
    <block>two</block>
  </value>
)

export const run = editor => {
  editor.moveNodes({ depth: 1, to: [1] })
}

export const output = (
  <value>
    <block>two</block>
    <block>
      <cursor />one
    </block>
  </value>
)
