import { Box, Flex, Heading, Text } from '@chakra-ui/react'

import rotateBackgroundImage from '../utils/rotateBackgroundImage'

import CustomImage from './utils/CustomImage'

const Feature = ({ title, description, image, index }) => {
  return (
    <Flex
      w="full"
      justify="center"
      align="center"
      direction={{ base: 'column', md: 'row', lg: 'column' }}
      maxW={{ base: '350px', md: '690px' }}
      px={{ base: 6, md: 0 }}
    >
      {image && (
        <Box pos="relative" mb={{ base: 12, md: 0, lg: 12 }}>
          <CustomImage
            image={image.url}
            width="202px"
            height="202px"
            pos="absolute"
            top="0"
            left="0"
            zIndex="overlay"
          />
          <CustomImage
            image="/images/bg-pattern-hero-home.svg"
            width="202px"
            height="202px"
            transform={`rotate(${rotateBackgroundImage(index)})`}
          />
        </Box>
      )}
      {(title || description) && (
        <Box
          textAlign={{ base: 'center', md: 'left', lg: 'center' }}
          ml={{ md: 12, lg: 0 }}
          flex="1"
        >
          <Heading as="h3" variant="h3" mb={{ base: 8, md: 4 }}>
            {title}
          </Heading>

          <Text>{description}</Text>
        </Box>
      )}
    </Flex>
  )
}

export default Feature
