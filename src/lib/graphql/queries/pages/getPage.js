import { gql } from 'graphql-request'

import gqlClient from '../../config/graphQLClient'

const GET_PAGE = gql`
  query Page($slug: String!) {
    page(where: { slug: $slug }) {
      id
      content {
        title
        blocks {
          ... on OfficeLogo {
            id
            image {
              altText
              width
              url
              height
            }
            country
            button {
              url
              label
            }
          }
          ... on ContentHero {
            id
            title
            image {
              url
              width
              height
              altText
            }
            content
          }
          ... on Hero {
            id
            title
            description
            picture: image {
              height
              width
              url
              altText
            }
          }
        }
        slug
      }
    }
  }
`

export async function getPage(variables) {
  const { page } = await gqlClient.request(GET_PAGE, variables)
  return page
}
