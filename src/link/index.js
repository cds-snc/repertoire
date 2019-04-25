import React from 'react'
import { asAnchor } from '../utils/asAnchor'
import PropTypes from 'prop-types'
import { Li } from '../list-item'

const BaseAnchor = asAnchor('a')

export const A = props => (
  <BaseAnchor
    fontSize={[2, null, 3]}
    lineHeight={[2, null, 3]}
    mb={4}
    colors="link"
    {...props}
  >
    {props.children}
  </BaseAnchor>
)

A.propTypes = {
  children: PropTypes.any,
}

export const FooterLink = props => (
  <Li ml={3} mb={0} display="inline-block">
    <BaseAnchor
      fontSize={[1, null, 2]}
      lineHeight={[1, null, 2]}
      colors="footerLink"
      {...props}
    >
      {props.children}
    </BaseAnchor>
  </Li>
)

FooterLink.propTypes = {
  children: PropTypes.any,
}
