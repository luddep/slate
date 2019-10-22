/** @jsx h */

import { h } from '../../../helpers'

export const run = editor => {
  editor.setBlocks({ type: 'code' })
}

export const input = (
  <value>
    <block>
      <inline>
        <anchor />word
      </inline>
    </block>
    <block>
      <inline>
        <focus />another
      </inline>
    </block>
  </value>
)

export const output = (
  <value>
    <block>
      <inline>
        <anchor />word
      </inline>
    </block>
    <block>
      <inline>
        <focus />another
      </inline>
    </block>
  </value>
)
