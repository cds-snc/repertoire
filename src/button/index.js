import React from 'react'
import styled from '@emotion/styled'
import {
  fontSize,
  fontWeight,
  lineHeight,
  space,
  colorStyle,
  color,
  textAlign,
  width,
  height,
  maxWidth,
  maxHeight,
  minHeight,
  minWidth,
  borders,
} from 'styled-system'
import { cleanProps } from '../utils/cleanProps'
import PropTypes from 'prop-types'

const BaseButton = styled('button', {
  shouldForwardProp: prop => cleanProps(prop),
})`
  font-family: ${({ theme }) => theme.fontSans};
  margin: 0;
  border: 0;
  ${fontSize};
  ${fontWeight};
  ${lineHeight};
  ${colorStyle};
  ${color};
  ${space};
  ${textAlign};
  ${width};
  ${height};
  ${maxWidth};
  ${maxHeight};
  ${minHeight};
  ${minWidth};
  ${borders};
`

BaseButton.propTypes = {
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...colorStyle.propTypes,
  ...color.propTypes,
  ...textAlign.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...maxWidth.propTypes,
  ...maxHeight.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...borders.propTypes,
}

export const Button = props => (
  <BaseButton
    fontSize={[2, null, 3]}
    fontWeight="normal"
    lineHeight={[2, null, 3]}
    colors="button"
    mt={[2, null, 3]}
    py={1}
    px={[2, null, 3]}
    {...props}
  />
)

Button.propTypes = {
  children: PropTypes.node,
}
