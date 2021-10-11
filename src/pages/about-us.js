import { Flex } from '@chakra-ui/layout'
import { Stack } from '@chakra-ui/react'
import { serialize } from 'next-mdx-remote/serialize'
import { NextSeo } from 'next-seo'

import CityLogo from '../components/CityLogo'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import { themeContent, themeMain } from '../constants/heroTheme'
import { getPage } from '../lib/graphql/queries/pages/getPage'
import getLayoutData from '../utils/getLayoutData'

export const getStaticProps = async () => {
  const data = await getLayoutData()
  const page = await getPage({ slug: 'about-us' })
  const contentHeroes =
    page.content.find((item) => item.slug === 'content-heroes').blocks ?? []

  for (const block of contentHeroes) {
    const mdxContent = await serialize(block.content)
    block['mdxContent'] = mdxContent
  }

  return {
    props: {
      page,
      data,
      contentHeroes,
    },
  }
}

const AboutUs = ({ data, page, contentHeroes }) => {
  const topHero =
    page.content.find((item) => item.slug === 'about-us-hero').blocks[0] ?? {}

  const officeLogos =
    page.content.find((item) => item.slug === 'office-logos').blocks ?? []

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
            imageSide="right"
            theme={themeMain}
          />
        )}

        {contentHeroes[0] && (
          <Hero
            title={contentHeroes[0].title}
            mdxContent={contentHeroes[0].mdxContent}
            image={contentHeroes[0].image}
            imageSide="left"
            theme={themeContent}
          />
        )}

        {officeLogos && (
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            spacing={{ base: 16, md: 20, lg: 28, xl: 40 }}
            pt={{ base: 0, md: 0 }}
            pb={{ base: 28, xl: 36 }}
          >
            {officeLogos.map((logo, i) => (
              <CityLogo
                key={i}
                title={logo.country}
                image={logo.image}
                link={logo.button}
                index={i}
              />
            ))}
          </Stack>
        )}

        {contentHeroes[1] && (
          <Hero
            title={contentHeroes[1].title}
            mdxContent={contentHeroes[1].mdxContent}
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
