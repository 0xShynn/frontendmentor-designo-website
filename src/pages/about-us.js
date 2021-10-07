import { Flex } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { getPage } from '../lib/graphql/queries/pages/getPage'
import getLayoutData from '../utils/getLayoutData'

export const getStaticProps = async () => {
  const data = await getLayoutData()
  const page = await getPage({ slug: 'about-us' })

  return {
    props: {
      page,
      data,
    },
  }
}

const AboutUs = ({ data, page }) => {
  const topHero =
    page?.content.find((item) => item.slug === 'about-us-hero').blocks[0] ?? {}

  return (
    <Layout data={data}>
      <NextSeo title="About Us" description="Description" />
      <Flex
        bg="white"
        direction="column"
        align="center"
        justify="center"
        maxW="1110px"
        mx="auto"
        px={{ base: 0, md: 8, xl: 0 }}
      >
        {topHero && (
          <Hero
            title={topHero.title}
            content={topHero.description}
            image={topHero.picture}
          />
        )}
      </Flex>
    </Layout>
  )
}

export default AboutUs
