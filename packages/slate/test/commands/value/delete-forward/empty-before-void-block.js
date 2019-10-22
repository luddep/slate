/** @jsx h */

import { h } from '../../../helpers'

export const run = editor => {
  editor.deleteForward()
}

export const input = (
  <value>
    <block>
      <cursor />
    </block>
    <block void>
      <text />
    </block>
  </value>
)

export const output = (
  <value>
    <block void>
      <cursor />
    </block>
  </value>
)
