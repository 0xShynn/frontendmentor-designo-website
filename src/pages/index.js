import { Flex } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'

import FeaturesContainer from '../components/FeaturesContainer'
import HeroMain from '../components/HeroMain'
import Layout from '../components/Layout'
import ProjectsTile from '../components/ProjectsTile'
import { getHomePage } from '../lib/graphql/queries/pages/getHomePage'
import getLayoutData from '../utils/getLayoutData'

export const getStaticProps = async () => {
  const data = await getLayoutData()
  const { page } = await getHomePage()
  return { props: { data, page } }
}

export default function Home({ data, page }) {
  const homeHeroBlocks =
    page?.content.find((block) => block.id === 'ckucqkp9seg5d0c60wvntwnf9')
      ?.blocks[0] ?? null

  const homeProjectsTile =
    page?.content.find((block) => block.id === 'cku8f53wwln1s0d00907fraol')
      ?.blocks ?? null

  const homeFeaturesBlocks =
    page?.content.find((block) => block.id === 'cku8fxhiom2890d00z4hzzy9w')
      ?.blocks ?? null

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
        {homeHeroBlocks && <HeroMain data={homeHeroBlocks} />}
        {homeProjectsTile && <ProjectsTile data={homeProjectsTile} />}
        {homeFeaturesBlocks && <FeaturesContainer data={homeFeaturesBlocks} />}
      </Flex>
    </Layout>
  )
}
