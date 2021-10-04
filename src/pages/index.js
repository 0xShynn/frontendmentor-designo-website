import { Box, Flex, Heading, Link, Text } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'
import NextImage from 'next/image'

import Layout from '../components/Layout'
import CustomImage from '../components/utils/CustomImage'
import { getHomePage } from '../lib/graphql/queries/pages/getHomePage'
import getLayoutData from '../utils/getLayoutData'

export const getStaticProps = async () => {
  const data = await getLayoutData()
  const { page } = await getHomePage()
  return { props: { data, page } }
}

export default function Home({ data, page }) {
  const hero = page?.content.filter(
    (block) => block.id === 'ckucqkp9seg5d0c60wvntwnf9'
  )
  const heroHome = hero[0].blocks[0]
  return (
    <Layout data={data}>
      {/* Edit the Head info */}
      <NextSeo title="Home" description="Description" />
      <Flex
        bg="white"
        direction="column"
        align="center"
        justify="center"
        maxW="1110px"
        mx="auto"
        px={{ base: 0, md: 6 }}
        boxSizing="content-box"
      >
        <Flex
          bg="primary.peach"
          direction={{ base: 'column', xl: 'row' }}
          px={{ base: 6, xl: 24 }}
          py={{ base: 16, md: 16, xl: 36 }}
          rounded={{ base: 'none', md: '2xl' }}
          w="full"
          h={{ base: '843px' }}
          pos="relative"
          overflow="hidden"
          mb="24"
          bgImage={'images/bg-pattern-hero-home.svg'}
          bgPos={{ base: '0 90px', md: '205px 105px', xl: 'right' }}
          bgRepeat="no-repeat"
          align="center"
        >
          <Box
            maxW="540px"
            textAlign={{ base: 'center', xl: 'left' }}
            mx="auto"
          >
            <Heading as="h1" variant="h1" color="white" mb="8">
              {heroHome.title}
            </Heading>
            <Text
              color="white"
              maxW="445px"
              mb="6"
              mx={{ base: 'auto', xl: 0 }}
            >
              {heroHome.description}
            </Text>
            <Link
              textTransform="uppercase"
              variant="dark"
              display="inline-block"
              mb="12"
            >
              {heroHome.button.label}
            </Link>
          </Box>
          <Flex w="200%" justify="center" pos="relative" top="-150px">
            <CustomImage
              pos={{ base: 'static', xl: 'absolute' }}
              top={{ md: 0, xl: '-50px' }}
              right={{ md: 0, xl: '-70px' }}
              image={heroHome.image.url}
              width={heroHome.image.width}
              height={heroHome.image.height}
              display={{ md: 'inline-block' }}
            />
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  )
}
