import { serialize } from 'next-mdx-remote/serialize'

import { getSharedComponents } from '../lib/graphql/queries/shared/getSharedComponents'

async function getLayoutData() {
  const data = await getSharedComponents()

  const footer = data?.footer ?? null
  const header = data?.header ?? null

  if (footer !== null) {
    for (const block of footer.companyInfos) {
      const mdxInfo = await serialize(block.information)
      block['informationMdx'] = mdxInfo
    }
  }
  return { footer, header }
}
export default getLayoutData
