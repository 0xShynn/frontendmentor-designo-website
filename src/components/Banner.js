import { Box, Flex, Heading, Text } from '@chakra-ui/react'

import CustomLink from './utils/CustomLink'

const Banner = ({ title, subtitle, button }) => {
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
      <Flex
        maxW={{ base: '435px', lg: 'unset' }}
        mx="auto"
        direction={{ base: 'column', lg: 'row' }}
        justify="space-between"
        w="full"
        align="center"
      >
        <Flex
          direction="column"
          textAlign={{ base: 'center', lg: 'left' }}
          maxW={{ base: 'full', lg: '460px' }}
        >
          <Heading as="h3" variant="h1" mb="6">
            {title}
          </Heading>
          <Text mb="6">{subtitle}</Text>
        </Flex>
        <CustomLink href={button.url} variant="dark" display="inline-flex">
          {button.label}
        </CustomLink>
      </Flex>
    </Box>
  )
}

export default Banner
