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
  display,
} from 'styled-system'
import { cleanProps } from '../cleanProps'
import PropTypes from 'prop-types'

export const asAnchor = AnchorType => {
  const Anchor = props => <AnchorType {...props}>{props.children}</AnchorType>

  Anchor.propTypes = {
    children: PropTypes.any,
  }

  const StyledAnchor = styled(Anchor, {
    shouldForwardProp: prop => cleanProps(prop),
  })`
    font-family: ${({ theme }) => theme.fontSans};
    margin: 0;
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
    ${display};
  `

  StyledAnchor.propTypes = {
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
    ...display.propTypes,
  }

  return StyledAnchor
}
