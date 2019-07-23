import React from 'react'
import { render } from '@testing-library/react'

import { ThemeProvider } from 'emotion-theming'
import theme from '../../../__mocks__/theme'
import { Link, A } from '..'

describe('Links', () => {
  const example = 'example'

  it('Renders a Link and A component without crashing', () => {
    render(
      <ThemeProvider theme={theme}>
        <Link to="/">{example}</Link>
      </ThemeProvider>,
    )
    render(
      <ThemeProvider theme={theme}>
        <A href="http://www.google.com">{example}</A>
      </ThemeProvider>,
    )
  })
})
