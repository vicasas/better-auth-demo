import { render, screen, within } from '@testing-library/react'
import HomePage from '@/app/page'

describe('<HomePage />', () => {
  it('should render the Next.js logo image', () => {
    render(<HomePage />)

    const nextLogo = screen.getByRole('img', { name: /Next.js logo/i })

    expect(nextLogo).toBeInTheDocument()
    expect(nextLogo).toHaveAttribute('src', '/next.svg')
    expect(nextLogo).toHaveAttribute('width', '180')
    expect(nextLogo).toHaveAttribute('height', '38')
  })

  const linkTests = [
    {
      text: 'Deploy now',
      href: 'https://vercel.com/new',
      imgAlt: 'Vercel logomark',
    },
    { text: 'Read our docs', href: 'https://nextjs.org/docs' },
    { text: 'Learn', href: 'https://nextjs.org/learn' },
    { text: 'Example', href: 'https://vercel.com/templates' },
    { text: 'Go to nextjs.org', href: 'https://nextjs.org' },
  ]

  linkTests.forEach(({ text, href, imgAlt }) => {
    it(`should render the "${text}" link`, () => {
      render(<HomePage />)

      const link = screen.getByRole('link', { name: new RegExp(text, 'i') })

      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', expect.stringContaining(href))
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')

      expect(Boolean(within(link).queryByRole('img'))).toBe(Boolean(imgAlt))
    })
  })
})
