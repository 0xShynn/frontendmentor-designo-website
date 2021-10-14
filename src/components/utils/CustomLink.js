import { Link } from '@chakra-ui/layout'
import { motion } from 'framer-motion'
import NextLink from 'next/link'

const CustomLink = (props) => {
  const { href, children } = props
  const internal = href && (href.startsWith('/') || href.startsWith('#'))
  const MotionLink = motion(Link)

  const FramerTap = {
    init: { y: 0 },
    tap: { y: 3 },
  }

  if (internal) {
    return (
      <NextLink href={href} passHref>
        <MotionLink
          initial="init"
          whileTap="tap"
          variants={FramerTap}
          {...props}
        >
          {children}
        </MotionLink>
      </NextLink>
    )
  }
  return (
    <MotionLink
      initial="init"
      whileTap="tap"
      variants={FramerTap}
      target="_blank"
      rel="noreferrer noopener"
      {...props}
    >
      {children}
    </MotionLink>
  )
}

export default CustomLink
