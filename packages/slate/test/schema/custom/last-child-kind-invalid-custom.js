/** @jsx h */

import h from '../../helpers/h'

export const schema = {
  blocks: {
    paragraph: {},
    quote: {
      last: [{ object: 'block' }],
      normalize: (editor, { code, path }) => {
        if (code === 'last_child_object_invalid') {
          editor.wrapBlockByPath(path, 'paragraph')
        }
      },
    },
  },
}

export const input = (
  <value>
    <document>
      <quote>text</quote>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <quote>
        <block>text</block>
      </quote>
    </document>
  </value>
)
