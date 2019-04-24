import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { UnorderedList, Ul } from '../'
import { render, cleanup } from 'react-testing-library'
import { mount } from 'enzyme'

describe('<UnorderedList />', () => {
  afterEach(cleanup)

  it('properly renders child components', () => {
    const { getAllByText } = render(<UnorderedList>foo</UnorderedList>)

    const test = getAllByText(/foo/)
    expect(test).toHaveLength(1)
  })

  it('uses the typography props to properly set font weight, font size, text alignment and line height in CSS', () => {
    const { getByText } = render(
      <ThemeProvider
        theme={{ fontSizes: ['14px'], lineHeights: ['0', '1.35'] }}
      >
        <UnorderedList
          fontSize={0}
          fontWeight="400"
          lineHeight={1}
          textAlign="left"
        >
          foo
        </UnorderedList>
      </ThemeProvider>,
    )

    const test = getByText('foo')
    expect(test).toHaveStyleRule('font-size', '14px')
    expect(test).toHaveStyleRule('font-weight', '400')
    expect(test).toHaveStyleRule('line-height', '1.35')
    expect(test).toHaveStyleRule('text-align', 'left')
  })

  it('uses the color props to set font color and background color in CSS', () => {
    const { getByText } = render(
      <ThemeProvider theme={{ colors: { blue: '#005ea5' } }}>
        <UnorderedList bg="blue" color="blue">
          test
        </UnorderedList>
      </ThemeProvider>,
    )

    const test = getByText(/test/)
    expect(test).toHaveStyleRule('background-color', '#005ea5')
    expect(test).toHaveStyleRule('color', '#005ea5')
  })

  it('uses the space props to set padding and margins in CSS', () => {
    const SPACING = ['0px', '5px']
    const { getByText } = render(
      <ThemeProvider theme={{ space: SPACING }}>
        <UnorderedList m="auto" ml={1} p={0} px={1}>
          foo
        </UnorderedList>
      </ThemeProvider>,
    )

    const test = getByText(/foo/)
    expect(test).toHaveStyleRule('margin', 'auto')
    expect(test).toHaveStyleRule('margin-left', '5px')
    expect(test).toHaveStyleRule('padding', '0px')
    expect(test).toHaveStyleRule('padding-left', '5px')
    expect(test).toHaveStyleRule('padding-right', '5px')
  })

  it('uses the layout props to set width, height, and display related CSS values', () => {
    const { getByText } = render(
      <UnorderedList
        width="100"
        minWidth="50"
        maxWidth="150"
        height="400"
        minHeight="50"
        maxHeight="150"
        display="block"
      >
        foo
      </UnorderedList>,
    )

    const test = getByText(/foo/)
    expect(test).toHaveStyleRule('width', '100')
    expect(test).toHaveStyleRule('min-width', '50')
    expect(test).toHaveStyleRule('max-width', '150')
    expect(test).toHaveStyleRule('height', '400')
    expect(test).toHaveStyleRule('min-height', '50')
    expect(test).toHaveStyleRule('max-height', '150')
    expect(test).toHaveStyleRule('display', 'block')
  })

  it('sets left padding to 0 and list style type to none when listStyleType=none', () => {
    const { getByText } = render(<Ul listStyleType="none">foo</Ul>)

    const test = getByText(/foo/)
    expect(test).toHaveStyleRule('list-style-type', 'none')
    expect(test).toHaveStyleRule('padding-left', '0')
  })

  it('renders as a ul', () => {
    let wrapper = mount(<UnorderedList />).find('ul')
    expect(wrapper.is('ul')).toBeTruthy()
  })
})
