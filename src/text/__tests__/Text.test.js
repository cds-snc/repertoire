import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { render, cleanup } from 'react-testing-library'
import { mount } from 'enzyme'
import { Text, P, Lead } from '..'

describe('<Text />', () => {
  afterEach(cleanup)

  it('Properly render child components', () => {
    const { getAllByText } = render(<Text>foo</Text>)

    const test = getAllByText(/foo/)
    expect(test).toHaveLength(1)
  })

  it('uses the typography props to properly set font weight, font size, text alignment and line height in CSS', () => {
    const { getByText } = render(
      <ThemeProvider
        theme={{ fontSizes: ['14px'], lineHeights: ['0', '1.35'] }}
      >
        <Text fontSize={0} fontWeight="400" lineHeight={1} textAlign="left">
          foo
        </Text>
      </ThemeProvider>,
    )

    const test = getByText('foo')
    expect(test).toHaveStyleRule('font-size', '14px')
    expect(test).toHaveStyleRule('font-weight', '400')
    expect(test).toHaveStyleRule('line-height', '1.35')
    expect(test).toHaveStyleRule('text-align', 'left')
  })

  it('uses the space props to set padding and margins in CSS', () => {
    const SPACING = ['0px', '5px']
    const { getByText } = render(
      <ThemeProvider theme={{ space: SPACING }}>
        <Text m="auto" ml={1} p={0} px={1}>
          foo
        </Text>
      </ThemeProvider>,
    )

    const test = getByText(/foo/)
    expect(test).toHaveStyleRule('margin', 'auto')
    expect(test).toHaveStyleRule('margin-left', '5px')
    expect(test).toHaveStyleRule('padding', '0px')
    expect(test).toHaveStyleRule('padding-left', '5px')
    expect(test).toHaveStyleRule('padding-right', '5px')
  })

  it('uses the color props to set color and background color', () => {
    const { getByText } = render(
      <ThemeProvider theme={{ colors: { blue: '#005ea5', red: 'iamred' } }}>
        <Text color="blue" bg="red">
          foo
        </Text>
      </ThemeProvider>,
    )

    const test = getByText('foo')
    expect(test).toHaveStyleRule('color', '#005ea5')
    expect(test).toHaveStyleRule('background-color', 'iamred')
  })

  it('renders as span by default', () => {
    let wrapper = mount(<Text />).find('span')
    expect(wrapper.is('span')).toBeTruthy()
  })

  it('renders the P preset as a paragraph', () => {
    let wrapper = mount(<P />).find('p')
    expect(wrapper.is('p')).toBeTruthy()
  })

  it('renders the Lead preset as a paragraph', () => {
    let wrapper = mount(<Lead />).find('p')
    expect(wrapper.is('p')).toBeTruthy()
  })
})
