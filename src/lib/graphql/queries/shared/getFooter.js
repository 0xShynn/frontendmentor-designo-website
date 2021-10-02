import { gql } from 'graphql-request'

const GET_FOOTER = gql`
  footer(where: {slug: "primary"}, stage: PUBLISHED) {
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
      altText
    }
    socialMedias {
      title
      logo {
        url
        altText
      }
    }
    slug
  }
`

export default GET_FOOTER
