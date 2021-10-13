import { useContext } from 'react'

import Icon from '@chakra-ui/icon'
import { Box, Divider, Flex, Link, Stack, HStack } from '@chakra-ui/layout'
import { Heading, Text } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'

import PageSlugContext from '../contexts/PageSlugContext'
import renderSocialIcons from '../utils/renderSocialIcons'

import Banner from './Banner'
import NavLinks from './NavLinks'
import CustomImage from './utils/CustomImage'
import CustomLink from './utils/CustomLink'

const Footer = ({ data }) => {
  const companyInfos = data?.companyInfos ?? []
  const logo = data?.logo ?? {}
  const navLinks = data?.navigation?.pages ?? []
  const socialLinks = data?.socialMedias ?? []
  const banner = data?.banner ?? {}

  const pageSlug = useContext(PageSlugContext)

  return (
    <Box w="full" bg="primary.black" role="contentinfo">
      <Box bg="white" pos="relative">
        <Box w="full" h="50%" bg="primary.black" pos="absolute" bottom="0" />
        {banner && pageSlug !== 'contact' && (
          <Banner>
            <Flex
              maxW={{ base: '435px', lg: 'unset' }}
              mx="auto"
              direction={{ base: 'column', lg: 'row' }}
              justify="space-between"
              align="center"
            >
              {(banner.title || banner.subtitle) && (
                <Flex
                  direction="column"
                  textAlign={{ base: 'center', lg: 'left' }}
                  maxW={{ base: 'full', lg: '460px' }}
                >
                  <Heading as="h3" variant="h1" mb="6">
                    {banner.title}
                  </Heading>
                  <Text mb={{ base: 6, lg: 0 }}>{banner.subtitle}</Text>
                </Flex>
              )}
              {banner.button && (
                <CustomLink
                  href={banner.button.url}
                  variant="dark"
                  display="inline-flex"
                >
                  {banner.button.label}
                </CustomLink>
              )}
            </Flex>
          </Banner>
        )}
      </Box>

      <Flex
        direction={{ base: 'column' }}
        align="center"
        px={{ base: 6, md: 8, xl: 0 }}
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
            as="nav"
            aria-label="footer navigation"
          >
            <NavLinks
              data={navLinks}
              linksColor="light"
              display={{ base: 'none', md: 'flex' }}
            />
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
          <NavLinks data={navLinks} linksColor="light" />
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
            as="address"
            fontStyle="normal"
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
                aria-label={`${item.title} logo`}
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
