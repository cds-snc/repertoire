/** @jsx jsx **/
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'
import PropTypes from 'prop-types'

import {
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexBasis,
  flexDirection,
  width,
  height,
  maxWidth,
  maxHeight,
  minHeight,
  minWidth,
  color,
  borders,
  borderColor,
  flex,
  justifySelf,
  display,
  alignSelf,
  space,
  textAlign,
  position,
  top,
  right,
  bottom,
  left,
  zIndex,
} from 'styled-system'
import { cleanProps } from '../utils/cleanProps'

export const Container = styled('div', {
  shouldForwardProp: prop => cleanProps(prop),
})`
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${flex}
  ${flexWrap}
  ${flexBasis}
  ${flexDirection}
  ${width}
  ${minWidth}
  ${maxWidth}
  ${height}
  ${minHeight}
  ${maxHeight}
  ${color}
  ${display}
  ${space}
  ${justifySelf}
  ${alignSelf}
  ${borders}
  ${borderColor}
  ${textAlign}
  ${position}
  ${top}
  ${bottom}
  ${left}
  ${right}
  ${zIndex}
`

Container.propTypes = {
  ...alignItems.propTypes,
  ...alignContent.propTypes,
  ...justifyContent.propTypes,
  ...flex.propTypes,
  ...flexWrap.propTypes,
  ...flexBasis.propTypes,
  ...flexDirection.propTypes,
  ...width.propTypes,
  ...minWidth.propTypes,
  ...maxWidth.propTypes,
  ...maxHeight.propTypes,
  ...minHeight.propTypes,
  ...height.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...space.propTypes,
  ...justifySelf.propTypes,
  ...alignSelf.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...textAlign.propTypes,
  ...position.propTypes,
  ...top.propTypes,
  ...bottom.propTypes,
  ...left.propTypes,
  ...right.propTypes,
  ...zIndex.propTypes,
}

export const Content = props => (
  <main
    css={css`
      flex: 1 0 auto;
    `}
  >
    <Container m="auto" width={[9 / 10, null, 4 / 5]} {...props}>
      {props.children}
    </Container>
  </main>
)

Content.propTypes = {
  children: PropTypes.any,
}

export const CenterContent = props => (
  <Container maxWidth="750px" m="auto" {...props}>
    {props.children}
  </Container>
)

CenterContent.propTypes = {
  children: PropTypes.any,
}
