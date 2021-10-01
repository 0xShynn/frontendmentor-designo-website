import { gql } from 'graphql-request'

const GET_FOOTER = gql`
    footers(where: {slug: "primary"}, stage: PUBLISHED) {
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
    socialMedias {
      title
      logo {
        url
        altText
      }
    }
  }
`

export default GET_FOOTER
