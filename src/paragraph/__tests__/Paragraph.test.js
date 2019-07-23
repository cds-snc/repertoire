import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../../../__mocks__/theme'
import { Paragraph, P, Lead } from '..'

describe('Paragraph', () => {
  const example = 'example'
  const wrapper = (
    <ThemeProvider theme={theme}>
      <Paragraph color="black">{example}</Paragraph>
    </ThemeProvider>
  )

  it('Renders a Paragraph component, P and Lead presets without crashing', () => {
    render(wrapper)
    render(
      <ThemeProvider theme={theme}>
        <P>{example}</P>
      </ThemeProvider>,
    )
    render(
      <ThemeProvider theme={theme}>
        <Lead>{example}</Lead>
      </ThemeProvider>,
    )
  })
})
