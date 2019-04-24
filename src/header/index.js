import styled from '@emotion/styled'
import {
  fontSize,
  lineHeight,
  space,
  color,
  fontWeight,
  textAlign,
} from 'styled-system'
import { cleanProps } from '../utils/cleanProps'
import PropTypes from 'prop-types'

export const Header = styled('h1', {
  shouldForwardProp: prop => cleanProps(prop),
})`
  font-family: ${({ theme }) => theme.fontSans};
  margin: 0;
  ${fontSize};
  ${lineHeight};
  ${space};
  ${color};
  ${fontWeight};
  ${textAlign};
`

Header.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  ...fontSize.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
}

Header.defaultProps = {
  as: 'h1',
}

export { H1, H2, H3, H4, H5, H6 } from './presets'
