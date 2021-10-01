import { Box, Heading } from '@chakra-ui/layout'

const ProjectsPage = ({ params }) => {
  return (
    <Box>
      <Heading>{params.slug}</Heading>
    </Box>
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
  return {
    props: { params },
  }
}

export default ProjectsPage
