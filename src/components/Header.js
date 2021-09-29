import { IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Box, Flex, HStack, Link, Text } from '@chakra-ui/layout'

import LogoDark from '../assets/brand/logo-dark.png'
import CloseIcon from '../assets/icons/ui/CloseIcon'
import HamburgerMenuIcon from '../assets/icons/ui/HamburgerMenuIcon'

import CustomImage from './utils/CustomImage'
import CustomLink from './utils/CustomLink'

const Header = () => {
  const { isOpen, onToggle } = useDisclosure()
  const navLinks = ['Our Company', 'Locations', 'Contact']
  return (
    <Box maxW="1110px" w="full">
      <Flex
        justify="space-between"
        align="center"
        py={{ base: 6 }}
        px={{ base: 6 }}
      >
        <CustomLink href="/">
          <CustomImage image={LogoDark} w="202px" display="flex" />
        </CustomLink>

        <HStack spacing="8" display={{ base: 'none', md: 'flex' }}>
          {navLinks.map((link, i) => (
            <Link
              key={i}
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

      {isOpen ? (
        <Box
          w="full"
          bg="rgba(0,0,0,0.5)"
          h="100vh"
          zIndex="overlay"
          display={{ md: 'none' }}
        >
          <Box bg="primary.black" px="6" py="12">
            <Text
              color="white"
              fontSize="24px"
              textTransform="uppercase"
              letterSpacing="2px"
              lineHeight="25px"
            >
              NAV
            </Text>
          </Box>
        </Box>
      ) : null}
    </Box>
  )
}

export default Header
