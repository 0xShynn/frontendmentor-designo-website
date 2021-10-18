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
        id
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
        id
        title
        socialLink
        url
      }
      slug
      banner {
        title
        subtitle
        button {
          url
          label
        }
      }
    }
    header(stage: PUBLISHED, where: { slug: "primary" }) {
      id
      navigation {
        id
        slug
        pages {
          id
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
