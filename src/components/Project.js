import { Flex, Heading } from '@chakra-ui/layout'
import { Box, Text } from '@chakra-ui/react'
import NextImage from 'next/image'

const Project = ({ title, image, description }) => {
  return (
    <Flex
      rounded="2xl"
      overflow="hidden"
      direction={{ base: 'column', md: 'row', lg: 'column' }}
      maxW={{ base: '327px', md: 'unset', lg: '350px' }}
      w="full"
      mx="auto"
    >
      <Box pos="relative" w={{ base: 'full', md: '339px', lg: 'full' }}>
        <NextImage
          src={image.url}
          layout="responsive"
          width={image?.width ?? 0}
          height={image?.height ?? 0}
        />
      </Box>
      <Flex
        bg="secondary.verylightpeach"
        w="full"
        flex="1"
        px={{ base: 6, md: 0 }}
        align="center"
        transition="0.2s"
        _hover={{
          bg: 'primary.peach',
          cursor: 'pointer',
          '.title, .desc': {
            color: 'white',
          },
        }}
      >
        <Box textAlign="center" py="8" maxW="280px" mx="auto">
          <Heading
            as="h3"
            variant="h3"
            color="primary.peach"
            mb="4"
            className="title"
          >
            {title}
          </Heading>
          <Text color="primary.black" className="desc">
            {description}
          </Text>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Project
