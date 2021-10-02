import { Box, Flex } from '@chakra-ui/layout'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { NextSeo } from 'next-seo'

import Footer from '../components/Footer'
import Header from '../components/Header'
import { getHomePage } from '../lib/graphql/queries/pages/getHomePage'

export const getStaticProps = async () => {
  const data = await getHomePage()

  const footer = data?.footer ?? null
  const header = data?.header ?? null

  let mdxBlocks = []
  if (footer !== null) {
    for (const block of footer.companyInfos) {
      const mdxInfo = await serialize(block.information)
      mdxBlocks.push(mdxInfo)
    }
  }

  return { props: { data, mdxBlocks } }
}

export default function Home({ data, mdxBlocks }) {
  return (
    <Box>
      {/* Edit the Head info */}
      <NextSeo title="Home" description="Description" />

      <Flex
        role="main"
        bg="white"
        direction="column"
        align="center"
        justify="center"
      >
        <Header />
        {mdxBlocks &&
          mdxBlocks.map((block, i) => <MDXRemote {...block} key={i} />)}
      </Flex>
      <Footer />
    </Box>
  )
}
