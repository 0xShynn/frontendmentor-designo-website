import { Box } from '@chakra-ui/react'

const Banner = ({ children, noPadding }) => {
  return (
    <Box
      maxW="1110px"
      px={{ base: noPadding ? 0 : 6, md: 8, xl: 0 }}
      w="full"
      mx="auto"
      boxSizing="border-box"
    >
      <Box
        color="white"
        px={{ base: 6, lg: 20 }}
        py="16"
        bg="primary.peach"
        bgImage="/images/bg-pattern-call-to-action.svg"
        bgPos={{ base: '45% center', md: '0% center', lg: 'center right' }}
        bgRepeat="no-repeat"
        rounded={{ base: noPadding ? 'none' : '2xl', md: '2xl' }}
        pos="relative"
      >
        {children}
      </Box>
    </Box>
  )
}

export default Banner
