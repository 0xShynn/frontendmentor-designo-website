import { Flex, Heading } from '@chakra-ui/layout'
import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { gt } from 'lodash'
import { NextSeo } from 'next-seo'
import NextImage from 'next/image'

import Banner from '../components/Banner'
import Layout from '../components/Layout'
import { getProjectsPage } from '../lib/graphql/queries/pages/getProjectsPage'
import { getProjectsPagePaths } from '../lib/graphql/queries/paths/getProjectsPagePaths'
import getLayoutData from '../utils/getLayoutData'

const ProjectsPage = ({ data, page }) => {
  const { projectsPage } = page
  const title = projectsPage?.title ?? ''
  const description = projectsPage?.description
  const projects = projectsPage?.projects ?? []
  const projectsTile = projectsPage?.projectsTile ?? []

  return (
    <Layout data={data}>
      <NextSeo title="Home" description="Description" />
      <Flex
        direction="column"
        align="center"
        justify="center"
        maxW="1110px"
        mx="auto"
      >
        <Banner>
          <Flex justify="center" align="center" direction="column">
            <Box maxW="390px" mx="auto" textAlign="center">
              <Heading as="h1" variant="h1" mb="6">
                {title}
              </Heading>
              <Text>{description}</Text>
            </Box>
          </Flex>
        </Banner>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          w="full"
          px="6"
          spacing="6"
          py="20"
        >
          {projects.map((project, i) => (
            <Box key={i} rounded="2xl" overflow="hidden">
              <Box bg="secondary.verylightpeach">
                <Box pos="relative">
                  <NextImage
                    src={project.image.url}
                    layout="responsive"
                    width={project.image?.width ?? 0}
                    height={project.image?.height ?? 0}
                  />
                </Box>
                <Box textAlign="center" py="8" px="6">
                  <Heading as="h3" variant="h3" color="primary.peach" mb="4">
                    {project.title}
                  </Heading>
                  <Text color="primary.black">{project.description}</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const { projectsPages } = await getProjectsPagePaths()

  return {
    paths: projectsPages.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const slug = params.slug
  const data = await getLayoutData()
  const page = await getProjectsPage({ slug })

  return {
    props: { params, data, page },
    revalidate: 60 * 60,
  }
}

export default ProjectsPage
