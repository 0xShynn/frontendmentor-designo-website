import { gql } from 'graphql-request'

const GET_HEADER = gql`
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
`

export default GET_HEADER
