import React from 'react'
import { Text } from '.'
import PropTypes from 'prop-types'

export const P = props => (
  <Text
    fontSize={[2, null, 3]}
    lineHeight={[2, null, 3]}
    mb={4}
    color="black"
    as="p"
    {...props}
  >
    {props.children}
  </Text>
)

P.propTypes = {
  children: PropTypes.any,
}

export const Lead = props => (
  <Text
    as="p"
    fontSize={[3, null, 4]}
    lineHeight={[3, null, 4]}
    mb={4}
    color="black"
    {...props}
  >
    {props.children}
  </Text>
)

Lead.propTypes = {
  children: PropTypes.any,
}
