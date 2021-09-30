import { IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Box, Flex, HStack, Link, VStack } from '@chakra-ui/layout'
import { motion, AnimatePresence } from 'framer-motion'

import LogoDark from '../assets/brand/logo-dark.png'
import CloseIcon from '../assets/icons/ui/CloseIcon'
import HamburgerMenuIcon from '../assets/icons/ui/HamburgerMenuIcon'
import navLinks from '../utils/navLinks'

import CustomImage from './utils/CustomImage'
import CustomLink from './utils/CustomLink'

const FramerContainer = {
  hidden: {
    opacity: 0.9,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

const FramerMenu = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.125,
      staggerChildren: 0.125,
    },
  },
}

const FramerItem = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: {
    opacity: 0,
  },
}

const Header = () => {
  const { isOpen, onToggle } = useDisclosure()
  const MotionBox = motion(Box)
  const MotionVStack = motion(VStack)
  const MotionLink = motion(Link)
  return (
    <Box maxW="1110px" w="full">
      <Flex
        justify="space-between"
        align="center"
        py={{ base: 6, md: 16 }}
        px={{ base: 6 }}
      >
        <CustomLink href="/">
          <CustomImage
            image={LogoDark}
            maxW="202px"
            display="flex"
            alt="Designo Logo"
          />
        </CustomLink>

        <HStack
          spacing="8"
          display={{ base: 'none', md: 'flex' }}
          role="navigation"
        >
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href="/"
              textTransform="uppercase"
              fontSize="14px"
              letterSpacing="2px"
              lineHeight="14px"
              _hover={{ textDecoration: 'underline' }}
            >
              {link}
            </Link>
          ))}
        </HStack>

        <Box display={{ base: 'block', md: 'none' }}>
          <IconButton
            colorScheme="whiteAlpha"
            aria-label="Open Menu"
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon color="primary.black" boxSize="20px" />
              ) : (
                <HamburgerMenuIcon color="primary.black" boxSize="24px" />
              )
            }
            zIndex="overlay"
          />
        </Box>
      </Flex>
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            w="full"
            bg="rgba(0,0,0,0.5)"
            h="100vh"
            position="absolute"
            zIndex="overlay"
            display={{ md: 'none' }}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={FramerContainer}
          >
            <MotionVStack
              bg="primary.black"
              px="6"
              py="12"
              spacing="8"
              align="flex-start"
              variants={FramerMenu}
            >
              {navLinks.map((link, i) => (
                <MotionLink
                  key={i}
                  href="/"
                  color="white"
                  fontSize="24px"
                  textTransform="uppercase"
                  letterSpacing="2px"
                  lineHeight="25px"
                  _hover={{ textDecoration: 'underline' }}
                  variants={FramerItem}
                >
                  {link}
                </MotionLink>
              ))}
            </MotionVStack>
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  )
}

export default Header
