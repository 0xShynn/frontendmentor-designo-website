import { Box } from '@chakra-ui/react'

const Banner = ({ children }) => {
  return (
    <Box
      color="white"
      px={{ base: 6, lg: 20 }}
      py="16"
      bg="primary.peach"
      bgImage="/images/bg-pattern-call-to-action.svg"
      bgPos={{ base: '45% center', md: '0% center', lg: 'center right' }}
      bgRepeat="no-repeat"
      rounded="2xl"
      mx={{ base: 6, xl: 'auto' }}
      pos="relative"
      maxW="1110px"
    >
      {children}
    </Box>
  )
}

export default Banner
