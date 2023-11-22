import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium button by default', () => {
    renderWithTheme(<Button>Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      heighht: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
  })

  it('should render the samll size', () => {
    renderWithTheme(<Button size="small">Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      heighht: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Buy now</Button>)
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      heighht: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })
})
