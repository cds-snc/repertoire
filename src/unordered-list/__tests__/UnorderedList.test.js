import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../__mocks__/theme'
import { UnorderedList, Ul } from '..'

describe('Unordered List', () => {
  const example = 'example'
  const wrapper = (
    <ThemeProvider theme={theme}>
      <UnorderedList
        fontSize={[1, null, 2]}
        lineHeight={[1, null, 2]}
        pl={[5, null, 6]}
        mb={4}
      >
        <li>{example}</li>
      </UnorderedList>
    </ThemeProvider>
  )

  it('renders an UnorderedList and Ul component without crashing', () => {
    render(wrapper)
    render(
      <ThemeProvider theme={theme}>
        <Ul>{example}</Ul>
      </ThemeProvider>,
    )
  })

  it('UL accepts a listStyleType prop', () => {
    render(wrapper)
    render(
      <ThemeProvider theme={theme}>
        <Ul listStyleType="square">{example}</Ul>
      </ThemeProvider>,
    )
  })
})
