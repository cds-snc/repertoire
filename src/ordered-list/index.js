import {
  fontSize,
  lineHeight,
  space,
  color,
  fontWeight,
  textAlign,
  display,
  maxWidth,
  minWidth,
  width,
  height,
  maxHeight,
  minHeight,
  size,
} from 'styled-system'
import styled from '@emotion/styled'
import { cleanProps } from '../utils/cleanProps'

export const OrderedList = styled('ol', {
  shouldForwardProp: prop => cleanProps(prop),
})`
  font-family: ${({ theme }) => theme.fontSans};
  margin: 0;
  padding: 0;
  ${fontSize};
  ${lineHeight};
  ${space};
  ${color};
  ${fontWeight};
  ${textAlign};
  ${display};
  ${maxWidth};
  ${minWidth};
  ${width};
  ${height};
  ${maxHeight};
  ${minHeight};
  ${size};
`
OrderedList.propTypes = {
  ...fontSize.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...display.propTypes,
  ...maxWidth.propTypes,
  ...minWidth.propTypes,
  ...height.propTypes,
  ...width.propTypes,
  ...maxHeight.propTypes,
  ...minHeight.propTypes,
  ...size.propTypes,
}

export { Ol } from './presets'
