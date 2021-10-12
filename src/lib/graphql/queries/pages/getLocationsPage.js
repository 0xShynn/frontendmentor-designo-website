import { gql } from 'graphql-request'

import gqlClient from '../../config/graphQLClient'

const GET_LOCATIONS_PAGE = gql`
  query LocationsPage {
    page(where: { slug: "locations" }) {
      id
      content {
        blocks {
          ... on OfficeLocation {
            id
            address
            contact
            country
            mapLocation {
              latitude
              longitude
            }
            mapImage {
              height
              altText
              width
              url
            }
          }
        }
      }
    }
  }
`

export async function getLocationsPage() {
  const data = await gqlClient.request(GET_LOCATIONS_PAGE)
  return data
}
