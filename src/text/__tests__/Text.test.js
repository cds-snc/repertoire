import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../__mocks__/theme'
import { Text } from '..'

describe('Text', () => {
  const example = 'example'

  it('Renders a Text component preset without crashing', () => {
    render(
      <ThemeProvider theme={theme}>
        <Text>{example}</Text>
      </ThemeProvider>,
    )
  })
})
