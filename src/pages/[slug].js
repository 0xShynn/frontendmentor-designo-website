import { Flex, Heading } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'

import Layout from '../components/Layout'
import getLayoutData from '../utils/getLayoutData'

const ProjectsPage = ({ params, data }) => {
  return (
    <Layout data={data}>
      <NextSeo title="Home" description="Description" />
      <Flex bg="white" direction="column" align="center" justify="center">
        <Heading>{params.slug}</Heading>
      </Flex>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: 'web-design' } },
      { params: { slug: 'app-design' } },
      { params: { slug: 'graphic-design' } },
    ],
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const data = await getLayoutData()
  return {
    props: { params, data },
  }
}

export default ProjectsPage
