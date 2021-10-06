import { Box } from '@chakra-ui/react'

const Banner = ({ children }) => {
  return (
    <Box maxW="1110px" mx={{ base: 6, lg: 'auto' }} px={{ base: 0, lg: 8 }}>
      <Box
        color="white"
        px={{ base: 6, lg: 20 }}
        py="16"
        bg="primary.peach"
        bgImage="/images/bg-pattern-call-to-action.svg"
        bgPos={{ base: '45% center', md: '0% center', lg: 'center right' }}
        bgRepeat="no-repeat"
        rounded="2xl"
        pos="relative"
      >
        {children}
      </Box>
    </Box>
  )
}

export default Banner
