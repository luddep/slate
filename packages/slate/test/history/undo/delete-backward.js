/** @jsx h */

import h from '../../helpers/h'

export default function (editor) {
  editor.deleteBackward()
  editor.undo()
}

export const input = (
  <value>
    <document>
      <block>Hello</block>
      <block>
        <cursor />world!
      </block>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <block>Hello</block>
      <block>
        <cursor />world!
      </block>
    </document>
  </value>
)
