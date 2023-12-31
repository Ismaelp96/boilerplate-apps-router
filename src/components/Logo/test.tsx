import { screen } from '@testing-library/react'

import { renderWithTheme } from '@/utils/tests/helpers'
import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    // renderizar o componente `render`
    //selecionar o elemento a ser itado `screen` (queries) - getByLabel...
    // expect - assertion - asserção - comparação - análise (espero que renderize a logo branca)
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a white label by default', () => {
    // renderizar o componente `render`
    //selecionar o elemento a ser testado `screen` (queries) - getByLabel...
    // expect - assertion - asserção - comparação - análise (espero que renderize a logo branca)
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })
  test('should render a bigger logo', () => {
    // renderizar o componente `render`
    //selecionar o elemento a ser testado `screen` (queries) - getByLabel...
    // expect - assertion - asserção - comparação - análise (espero que renderize a logo branca)
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })
  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
