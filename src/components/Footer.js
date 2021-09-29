import { Box, Divider, Flex, Link, Stack, Text } from '@chakra-ui/layout'
import { chakra } from '@chakra-ui/system'

import LogoLight from '../assets/brand/logo-light.png'
import navLinks from '../utils/navLinks'

import CustomImage from './utils/CustomImage'
import CustomLink from './utils/CustomLink'

const Footer = () => {
  return (
    <Box w="full" bg="primary.black" role="contentinfo">
      <Flex direction={{ base: 'column' }} align="center" px="6" py="12">
        <CustomLink href="/">
          <CustomImage
            image={LogoLight}
            w="202px"
            display="flex"
            alt="Designo Logo"
          />
        </CustomLink>

        <Divider borderColor="white" opacity="0.1" my="8" />

        <Stack
          direction={{ base: 'column', md: 'row' }}
          align="center"
          spacing="8"
          mb="12"
        >
          {navLinks.map((link, i) => (
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
          ))}
        </Stack>

        <Stack spacing="10">
          <Text color="white" opacity="0.5" textAlign="center">
            <chakra.span fontWeight="700">Designo Central Office</chakra.span>
            <br />
            3886 Wellington Street <br />
            Toronto, Ontario M9C 3J5
          </Text>

          <Text color="white" opacity="0.5" textAlign="center">
            <chakra.span fontWeight="700">
              Contact Us (Central Office)
            </chakra.span>
            <br />P : +1 253-863-8967
            <br />M : contact@designo.co
          </Text>
        </Stack>
      </Flex>
    </Box>
  )
}

export default Footer
