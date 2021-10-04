import { Flex } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'

import HeroMain from '../components/HeroMain'
import Layout from '../components/Layout'
import { getHomePage } from '../lib/graphql/queries/pages/getHomePage'
import getLayoutData from '../utils/getLayoutData'

export const getStaticProps = async () => {
  const data = await getLayoutData()
  const { page } = await getHomePage()
  return { props: { data, page } }
}

export default function Home({ data, page }) {
  const hero =
    page?.content.filter((block) => block.id === 'ckucqkp9seg5d0c60wvntwnf9') ??
    {}
  const heroHome = hero[0]?.blocks[0] ?? null

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
        {heroHome && <HeroMain data={heroHome} />}
      </Flex>
    </Layout>
  )
}
