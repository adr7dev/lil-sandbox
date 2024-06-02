import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import RootLayout from './layout'

test('loads and displays greeting', async () => {
  render(<RootLayout>Lorem ipsum</RootLayout>, { container: document })

  expect(screen.getByText('Lorem ipsum')).toBeInTheDocument()
})
