import { Box, Flex, Heading, Link, Text } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'

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
          direction={{ base: 'column', lg: 'row' }}
          px={{ base: 6, lg: 24 }}
          py={{ base: 16, md: 16, lg: 28, xl: 36 }}
          mb={{ base: 0, md: 24 }}
          rounded={{ base: 'none', md: '2xl' }}
          w="full"
          h={{ base: '843px', lg: 'auto' }}
          pos="relative"
          overflow="hidden"
          bgImage={'images/bg-pattern-hero-home.svg'}
          bgPos={{
            base: '0 90px',
            md: '205px 105px',
            lg: '405px 105px',
            xl: '100% 0',
          }}
          bgRepeat="no-repeat"
          align="center"
        >
          <Box
            maxW={{ base: '540px', lg: '440px', xl: '540px' }}
            textAlign={{ base: 'center', lg: 'left' }}
            mx="auto"
          >
            <Heading as="h1" variant="h1" color="white" mb="8">
              {heroHome.title}
            </Heading>

            <Text
              color="white"
              maxW="445px"
              mb={{ base: 6, lg: 8 }}
              mx={{ base: 'auto', xl: 0 }}
            >
              {heroHome.description}
            </Text>

            <Link
              textTransform="uppercase"
              variant="dark"
              display="inline-block"
              mb={{ base: 12, lg: 0 }}
            >
              {heroHome.button.label}
            </Link>
          </Box>

          <Flex
            w={{ base: '200%', lg: '100%' }}
            justify="center"
            pos={{ base: 'relative', lg: 'unset' }}
            top="-150px"
          >
            <CustomImage
              pos={{ base: 'static', lg: 'absolute' }}
              top={{ base: 0, lg: '-50px', xl: '-30px' }}
              right={{ base: 0, lg: '-70px', xl: '-70px' }}
              image={heroHome.image.url}
              width={heroHome.image.width}
              height={heroHome.image.height}
            />
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  )
}
