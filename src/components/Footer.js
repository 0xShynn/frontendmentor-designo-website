import Icon from '@chakra-ui/icon'
import {
  Box,
  Divider,
  Flex,
  Link,
  Stack,
  HStack,
  Text,
} from '@chakra-ui/layout'
import { chakra } from '@chakra-ui/system'

import LogoLight from '../assets/brand/logo-light.png'
import IconFacebook from '../assets/icons/socials/IconFacebook'
import IconInstagram from '../assets/icons/socials/IconInstagram'
import IconPinterest from '../assets/icons/socials/IconPinterest'
import IconTwitter from '../assets/icons/socials/IconTwitter'
import IconYoutube from '../assets/icons/socials/IconYoutube'
import navLinks from '../utils/navLinks'

import CustomImage from './utils/CustomImage'
import CustomLink from './utils/CustomLink'

const socialLinks = [
  {
    icon: <IconFacebook />,
    url: '/',
  },
  {
    icon: <IconYoutube />,
    url: '/',
  },
  {
    icon: <IconTwitter />,
    url: '/',
  },
  {
    icon: <IconPinterest />,
    url: '/',
  },
  {
    icon: <IconInstagram />,
    url: '/',
  },
]
const FooterNav = () => {
  return navLinks.map((link, i) => (
    <Link
      key={i}
      href="/"
      textTransform="uppercase"
      fontSize="14px"
      letterSpacing="2px"
      lineHeight="14px"
      color="white"
      _hover={{ textDecoration: 'underline' }}
    >
      {link}
    </Link>
  ))
}

const Footer = () => {
  return (
    <Box w="full" bg="primary.black" role="contentinfo">
      <Flex
        direction={{ base: 'column' }}
        align="center"
        px="6"
        py={{ base: 16, md: 20 }}
        maxW="1110px"
        mx="auto"
      >
        <Flex justify={{ base: 'center', md: 'space-between' }} w="full">
          <CustomLink href="/">
            <CustomImage
              image={LogoLight}
              w="202px"
              display="flex"
              alt="Designo Logo"
            />
          </CustomLink>
          <HStack
            align="center"
            spacing="8"
            display={{ base: 'none', md: 'flex' }}
            role="navigation"
          >
            <FooterNav display={{ base: 'none', md: 'flex' }} />
          </HStack>
        </Flex>

        <Divider borderColor="white" opacity="0.1" my={{ base: 8, md: 10 }} />

        <Stack
          display={{ base: 'flex', md: 'none' }}
          direction={{ base: 'column', md: 'row' }}
          align="center"
          spacing="8"
          mb="12"
          role="navigation"
        >
          <FooterNav />
        </Stack>

        <Flex
          justify={{ base: 'center', md: 'space-between' }}
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'center', md: 'flex-end' }}
          w="full"
        >
          <Stack
            spacing={{ base: 10, sm: 12, md: 16, lg: 28, xl: 36 }}
            direction={{ base: 'column', md: 'row' }}
            textAlign={{ base: 'center', md: 'left' }}
            mb={{ base: 10, md: 0 }}
          >
            <Text color="white" opacity="0.5">
              <chakra.span fontWeight="700">Designo Central Office</chakra.span>
              <br />
              3886 Wellington Street <br />
              Toronto, Ontario M9C 3J5
            </Text>

            <Text color="white" opacity="0.5">
              <chakra.span fontWeight="700">
                Contact Us (Central Office)
              </chakra.span>
              <br />P : +1 253-863-8967
              <br />M : contact@designo.co
            </Text>
          </Stack>

          <HStack spacing="4">
            {socialLinks.map((item, i) => (
              <Link key={i} href={item.url}>
                <Icon
                  color="primary.peach"
                  boxSize="24px"
                  transition="0.3s"
                  _hover={{ color: 'secondary.lightpeach' }}
                >
                  {item.icon}
                </Icon>
              </Link>
            ))}
          </HStack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Footer
