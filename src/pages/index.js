import { Box, Flex, Heading } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'

import Layout from '../components/Layout'
import getLayoutData from '../utils/getLayoutData'

export const getStaticProps = async () => {
  const data = await getLayoutData()
  return { props: { data } }
}

export default function Home({ data }) {
  return (
    <Layout data={data}>
      {/* Edit the Head info */}
      <NextSeo title="Home" description="Description" />
      <Flex bg="white" direction="column" align="center" justify="center">
        <Heading>HELLO</Heading>
      </Flex>
    </Layout>
  )
}
