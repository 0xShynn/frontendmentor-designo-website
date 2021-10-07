import { Flex, Heading } from '@chakra-ui/layout'
import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

import Banner from '../components/Banner'
import Layout from '../components/Layout'
import Project from '../components/Project'
import { getProjectsPage } from '../lib/graphql/queries/pages/getProjectsPage'
import { getProjectsPagePaths } from '../lib/graphql/queries/paths/getProjectsPagePaths'
import getLayoutData from '../utils/getLayoutData'

const ProjectsPage = ({ data, page }) => {
  const { projectsPage } = page
  const title = projectsPage?.title ?? ''
  const description = projectsPage?.description
  const projects = projectsPage?.projects ?? []
  // const projectsTile = projectsPage?.projectsTile ?? []

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
        {(title || description) && (
          <Banner noPadding>
            <Flex justify="center" align="center" direction="column">
              <Box textAlign="center">
                <Heading as="h1" variant="h1" mb="6">
                  {title}
                </Heading>
                <Text maxW="390px" mx="auto">
                  {description}
                </Text>
              </Box>
            </Flex>
          </Banner>
        )}

        {projects && (
          <SimpleGrid
            columns={{ base: 1, lg: 3 }}
            w="full"
            px={{ base: 6, md: 8, xl: 0 }}
            spacing="6"
            py="20"
          >
            {projects.map((project, i) => (
              <Project
                title={project.title}
                image={project.image}
                description={project.description}
                key={i}
              />
            ))}
          </SimpleGrid>
        )}
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
