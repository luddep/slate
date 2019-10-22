/** @jsx h */

import h from '../../helpers/h'

export const schema = {
  blocks: {
    paragraph: {},
    quote: {
      nodes: [
        {
          match: [{ type: 'paragraph' }],
        },
      ],
    },
  },
}

export const input = (
  <value>
    <document>
      <quote>
        <block void>
          <text />
        </block>
      </quote>
    </document>
  </value>
)

export const output = (
  <value>
    <document />
  </value>
)
