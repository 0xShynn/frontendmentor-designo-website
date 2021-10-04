import { Link } from '@chakra-ui/layout'
import NextLink from 'next/link'

const CustomLink = (props) => {
  const { href, children } = props
  const internal = href && (href.startsWith('/') || href.startsWith('#'))

  if (internal) {
    return (
      <NextLink href={href} passHref>
        <Link {...props}>{children}</Link>
      </NextLink>
    )
  }
  return (
    <Link target="_blank" rel="noreferrer noopener" {...props}>
      {children}
    </Link>
  )
}

export default CustomLink
