import { Flex } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'

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
  const selectedHero = page?.content.filter(
    (block) => block.id === 'ckucqkp9seg5d0c60wvntwnf9'
  )
  const homeHeroBlocks = selectedHero[0]?.blocks[0] ?? null

  const selectedProjectsTile = page?.content.filter(
    (block) => block.id === 'cku8f53wwln1s0d00907fraol'
  )
  const homeProjectsTile = selectedProjectsTile[0]?.blocks ?? null

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
      </Flex>
    </Layout>
  )
}
