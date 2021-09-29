import { Box, Flex } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'

import Header from '../components/Header'

export default function Home() {
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
      </Flex>

      <Box role="contentinfo"></Box>
    </Box>
  )
}
