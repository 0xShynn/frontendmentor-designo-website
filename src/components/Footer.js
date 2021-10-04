import Icon from '@chakra-ui/icon'
import { Box, Divider, Flex, Link, Stack, HStack } from '@chakra-ui/layout'
import { MDXRemote } from 'next-mdx-remote'

import renderSocialIcons from '../utils/renderSocialIcons'

import CustomImage from './utils/CustomImage'
import CustomLink from './utils/CustomLink'

const FooterNav = ({ data }) => {
  return data.map((link, i) => (
    <CustomLink
      key={i}
      href={`/${link.slug}`}
      textTransform="uppercase"
      fontSize="14px"
      letterSpacing="2px"
      lineHeight="14px"
      color="white"
      bg="red.100"
      _hover={{ textDecoration: 'underline' }}
    >
      {link.title}
    </CustomLink>
  ))
}

const Footer = ({ data }) => {
  const companyInfos = data?.companyInfos ?? []
  const logo = data?.logo ?? {}
  const navLinks = data?.navigation?.pages ?? []
  const socialLinks = data?.socialMedias ?? []

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
          <CustomLink href="/" cursor="pointer">
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
            align="center"
            spacing="8"
            display={{ base: 'none', md: 'flex' }}
            role="navigation"
          >
            <FooterNav data={navLinks} display={{ base: 'none', md: 'flex' }} />
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
          <FooterNav data={navLinks} />
        </Stack>

        <Flex
          justify={{ base: 'center', md: 'space-between' }}
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'center', md: 'flex-end' }}
          w="full"
        >
          <Stack
            spacing={{ base: 10, md: 16, lg: 28, xl: 36 }}
            direction={{ base: 'column', md: 'row' }}
            textAlign={{ base: 'center', md: 'left' }}
            mb={{ base: 10, md: 0 }}
          >
            {companyInfos &&
              companyInfos.map((block, i) => (
                <Box key={i} color="white" opacity="0.5">
                  <MDXRemote {...block.informationMdx} />
                </Box>
              ))}
          </Stack>

          <HStack spacing="4">
            {socialLinks.map((item, i) => (
              <Link
                key={i}
                href={item.url}
                color="primary.peach"
                display="inline-block"
                _hover={{ color: 'secondary.lightpeach' }}
              >
                <Icon boxSize="24px">{renderSocialIcons(item.socialLink)}</Icon>
              </Link>
            ))}
          </HStack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Footer
