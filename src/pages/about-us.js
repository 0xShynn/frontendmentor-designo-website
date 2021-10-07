import { Flex } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { themeContent, themeMain } from '../constants/heroTheme'
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

  const contentHeroes =
    page?.content.find((item) => item.slug === 'content-heroes').blocks ?? []

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
            imageSide="left"
            theme={themeMain}
          />
        )}

        {contentHeroes[0] && (
          <Hero
            title={contentHeroes[0].title}
            content={contentHeroes[0].content}
            image={contentHeroes[0].image}
            imageSide="left"
            theme={themeContent}
          />
        )}

        {contentHeroes[1] && (
          <Hero
            title={contentHeroes[1].title}
            content={contentHeroes[1].content}
            image={contentHeroes[1].image}
            imageSide="right"
            theme={themeContent}
          />
        )}
      </Flex>
    </Layout>
  )
}

export default AboutUs
