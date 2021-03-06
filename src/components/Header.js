import { IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Box, Flex, HStack, VStack } from '@chakra-ui/layout'
import { motion, AnimatePresence } from 'framer-motion'

import CloseIcon from '../assets/icons/ui/CloseIcon'
import HamburgerMenuIcon from '../assets/icons/ui/HamburgerMenuIcon'

import NavLinks from './NavLinks'
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

const Header = ({ data }) => {
  const { isOpen, onToggle } = useDisclosure()

  const MotionBox = motion(Box)
  const MotionVStack = motion(VStack)

  const logo = data?.logo ?? {}
  const navLinks = data?.navigation?.pages ?? []

  return (
    <Box maxW="1110px" w="full" mx="auto">
      <Flex
        justify="space-between"
        align="center"
        py={{ base: 6, md: 16 }}
        px={{ base: 6, md: 8, xl: 0 }}
        role="banner"
      >
        <CustomLink href="/">
          <CustomImage
            image={logo.url}
            w="202px"
            display="flex"
            width={logo.width}
            height={logo.height}
            alt={logo.altText}
          />
        </CustomLink>

        <HStack
          spacing="8"
          display={{ base: 'none', md: 'flex' }}
          as="nav"
          aria-label="primary navigation"
        >
          <NavLinks data={navLinks} linksColor="dark" />
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
              {navLinks.map((link) => (
                <MotionBox key={link.id} variants={FramerItem}>
                  <CustomLink
                    href={`/${link.slug}`}
                    color="white"
                    fontSize="24px"
                    textTransform="uppercase"
                    letterSpacing="2px"
                    lineHeight="25px"
                    _hover={{ textDecoration: 'underline' }}
                  >
                    {link.title}
                  </CustomLink>
                </MotionBox>
              ))}
            </MotionVStack>
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  )
}

export default Header
