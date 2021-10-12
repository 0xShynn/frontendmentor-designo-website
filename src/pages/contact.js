import { Flex } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import OfficeLogosContainer from '../components/OfficeLogosContainer'
import PageContainer from '../components/PageContainer'
import { themeMain } from '../constants/heroTheme'
import { getContactPage } from '../lib/graphql/queries/pages/getContactPage'
import getLayoutData from '../utils/getLayoutData'

export const getStaticProps = async () => {
  const data = await getLayoutData()
  const { page } = await getContactPage()

  return {
    props: {
      data,
      page,
    },
  }
}

const Contact = ({ data, page }) => {
  console.log(page)
  const officeLogos =
    page.content.find((item) => item.slug === 'office-logos').blocks ?? []

  return (
    <Layout data={data}>
      <NextSeo title="Contact Us" description="Description" />
      <PageContainer>
        <Hero
          title="Contact Us"
          content="Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line."
          theme={themeMain}
        >
          <Box maxW="540px" w="full" bg="red.100">
            HEl
          </Box>
        </Hero>

        {officeLogos && <OfficeLogosContainer data={officeLogos} />}
      </PageContainer>
    </Layout>
  )
}

export default Contact
