import { gql } from 'graphql-request'

import gqlClient from '../../graphQLClient'
import GET_FOOTER from '../shared/getFooter'

const GET_HOME_PAGE = gql`
  query HomePage {
    page(where: { slug: "home" }, stage: PUBLISHED) {
      id
      slug
      content {
        blocks {
          ... on Feature {
            title
            description
            illustration {
              url
              width
              height
              altText
            }
          }
          ... on ProjectsTile {
            id
            title
            imageBackground {
              height
              altText
              url
              width
            }
          }
        }
        id
        title
      }
    }
    ${GET_FOOTER}
  }
`

export async function getHomePage() {
  const data = await gqlClient.request(GET_HOME_PAGE)
  return data
}
