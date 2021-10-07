import { gql } from 'graphql-request'

import gqlClient from '../../config/graphQLClient'

const GET_PROJECTS_PAGE = gql`
  query ProjectPage($slug: String!) {
    projectsPage(where: { slug: $slug }) {
      id
      title
      slug
      projects {
        title
        description
        image {
          width
          url
          altText
          height
        }
      }
      description
      projectsTiles {
        title
        imageBackground {
          url
          width
          altText
          imageSize
        }
        button {
          label
          url
        }
      }
    }
  }
`

export async function getProjectsPage(variables) {
  const data = await gqlClient.request(GET_PROJECTS_PAGE, variables)
  return data
}
