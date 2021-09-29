import { Box, Flex } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'

import Footer from '../components/Footer'
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

      <Footer />
    </Box>
  )
}
