import { gql } from 'graphql-request'

import gqlClient from '../../config/graphQLClient'

const GET_CONTACT_PAGE = gql`
  query ContactPage {
    page(where: { slug: "contact" }, stage: PUBLISHED) {
      id
      content {
        blocks {
          ... on OfficeLogo {
            id
            country
            button {
              label
              url
            }
            image {
              altText
              url
              width
              height
            }
          }
        }
        title
        slug
      }
    }
  }
`

export async function getContactPage() {
  const data = await gqlClient.request(GET_CONTACT_PAGE)
  return data
}
