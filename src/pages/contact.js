import { Box, Flex, Heading } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'

import Layout from '../components/Layout'
import getLayoutData from '../utils/getLayoutData'

export const getStaticProps = async () => {
  const data = await getLayoutData()

  return {
    props: {
      data,
    },
  }
}

const Contact = ({ data }) => {
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
