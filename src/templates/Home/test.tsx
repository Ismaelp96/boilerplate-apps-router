import { screen } from '@testing-library/react'

import Home from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home />)
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument()
  })

  it('should render the sections', () => {
    renderWithTheme(<Home />)
    expect(screen.getByLabelText(/News/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Most popular/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Upcomming/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Free Games/i)).toBeInTheDocument()
  })
})
