/* eslint-disable no-unused-vars */

import { GraphQLClient } from 'graphql-request'

const qglClient = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API)

export default qglClient
