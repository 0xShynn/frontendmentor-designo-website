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
      >
        <Box
          bg="primary.peach"
          px="24"
          py="36"
          rounded="2xl"
          w="full"
          pos="relative"
          overflow="hidden"
          mb="24"
          bgImage={'images/bg-pattern-hero-home.svg'}
          bgPos="right"
          bgRepeat="no-repeat"
        >
          <Box maxW="540px">
            <Heading as="h1" variant="h1" color="white" mb="8">
              {heroHome.title}
            </Heading>
            <Text color="white" maxW="445px" mb="8">
              {heroHome.description}
            </Text>
            <Link
              textTransform="uppercase"
              variant="dark"
              display="inline-block"
            >
              {heroHome.button.label}
            </Link>
          </Box>
          <CustomImage
            pos="absolute"
            top="-50px"
            right="-70px"
            image={heroHome.image.url}
            width={heroHome.image.width}
            height={heroHome.image.height}
          />
        </Box>
      </Flex>
    </Layout>
  )
}
