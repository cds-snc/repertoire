import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { TopBanner } from '../'
import { render, cleanup } from 'react-testing-library'

describe('<TopBanner />', () => {
  afterEach(cleanup)

  it('renders using the bg color prop coTopBrrectly', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={{ colors: { blue: '#005ea5' } }}>
        <TopBanner lang="en" bg="blue" />
      </ThemeProvider>,
    )
    const test = getByTestId('background-color')
    expect(test).toHaveStyleRule('background-color', '#005ea5')
  })

  it('renders with a black bg if no bg color prop specified', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={{ colors: { black: '#000000' } }}>
        <TopBanner lang="en" />
      </ThemeProvider>,
    )
    const test = getByTestId('background-color')
    expect(test).toHaveStyleRule('background-color', '#000000')
  })
})
