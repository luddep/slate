/** @jsx h */

import { h } from '../../../helpers'

export const run = editor => {
  editor.deleteBackward()
}

export const input = (
  <value>
    
      <block void>
        <cursor />{' '}
      </block>
    
  </value>
)

export const output = (
  <value>
    <document />
    <selection focused />
  </value>
)
