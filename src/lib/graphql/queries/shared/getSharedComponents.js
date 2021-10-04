import { gql } from 'graphql-request'

import gqlClient from '../../config/graphQLClient'

const GET_SHARED_COMPONENTS = gql`
  query getSharedComponents {
    footer(where: { slug: "primary" }, stage: PUBLISHED) {
      id
      navigation {
        pages {
          title
          slug
        }
      }
      companyInfos {
        title
        information
      }
      logo {
        url
        width
        height
        altText
      }
      socialMedias {
        title
        socialLink
        url
      }
      slug
    }
    header(stage: PUBLISHED, where: { slug: "primary" }) {
      id
      navigation {
        slug
        pages {
          title
          slug
        }
      }
      logo {
        altText
        height
        width
        url
      }
      slug
    }
  }
`

export async function getSharedComponents() {
  const data = await gqlClient.request(GET_SHARED_COMPONENTS)
  return data
}
