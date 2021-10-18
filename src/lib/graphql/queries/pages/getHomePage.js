import { gql } from 'graphql-request'

import gqlClient from '../../config/graphQLClient'

const GET_HOME_PAGE = gql`
  query HomePage {
    page(where: { slug: "home" }, stage: PUBLISHED) {
      id
      slug
      content {
        blocks {
          ... on Hero {
            id
            title
            image {
              altText
              url
              height
              width
            }
            description
            button {
              label
              url
            }
          }
          ... on Feature {
            id
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
            button {
              label
              url
            }
            imageBackground {
              height
              altText
              url
              width
              imageSize
            }
          }
        }
        id
        title
      }
    }
  }
`

export async function getHomePage() {
  const data = await gqlClient.request(GET_HOME_PAGE)
  return data
}
