import { Flex, Heading } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'

import Layout from '../components/Layout'
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
  return (
    <Layout data={data}>
      <NextSeo title="Contact Us" description="Description" />
      <Flex bg="white" direction="column" align="center" justify="center">
        <Heading>Contact Us</Heading>
      </Flex>
    </Layout>
  )
}

export default Contact
