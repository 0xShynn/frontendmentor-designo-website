import { gql } from 'graphql-request'

import gqlClient from '../../config/graphQLClient'

const GET_PROJECTS_PAGE_PATHS = gql`
  query ProjectsPagePaths {
    projectsPages {
      slug
    }
  }
`

export async function getProjectsPagePaths() {
  const data = await gqlClient.request(GET_PROJECTS_PAGE_PATHS)
  return data
}
