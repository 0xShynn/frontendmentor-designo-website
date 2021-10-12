import { Flex } from '@chakra-ui/react'

const PageContainer = ({ children }) => {
  return (
    <Flex
      bg="white"
      direction="column"
      align="center"
      justify="center"
      maxW="1110px"
      mx="auto"
      px={{ base: 0, md: 8, xl: 0 }}
      role="main"
    >
      {children}
    </Flex>
  )
}

export default PageContainer
