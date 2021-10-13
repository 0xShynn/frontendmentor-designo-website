import { NextSeo } from 'next-seo'

import FeaturesContainer from '../components/FeaturesContainer'
import HeroMain from '../components/HeroMain'
import Layout from '../components/Layout'
import PageContainer from '../components/PageContainer'
import ProjectTilesContainer from '../components/ProjectTilesContainer'
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
      <PageContainer>
        {homeHeroBlocks && <HeroMain data={homeHeroBlocks} />}
        {homeProjectsTile && <ProjectTilesContainer data={homeProjectsTile} />}
        {homeFeaturesBlocks && <FeaturesContainer data={homeFeaturesBlocks} />}
      </PageContainer>
    </Layout>
  )
}
