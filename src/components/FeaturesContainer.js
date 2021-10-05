import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'

import CustomImage from './utils/CustomImage'

const Feature = ({ title, description, image, index }) => {
  function rotateBackgroundImage(index) {
    switch (index) {
      case 0:
        return '-90deg'
      case 1:
        return '180deg'
      case 2:
        return '0deg'
      default:
        return '0deg'
    }
  }

  return (
    <Flex
      w="full"
      justify="center"
      align="center"
      direction="column"
      textAlign="center"
      maxW="350px"
      px="6"
    >
      <Box pos="relative" mb="12">
        <CustomImage
          image={image.url}
          width="202px"
          height="202px"
          pos="absolute"
          zIndex="overlay"
        />
        <CustomImage
          image="/images/bg-pattern-hero-home.svg"
          width="202px"
          height="202px"
          transform={`rotate(${rotateBackgroundImage(index)})`}
        />
      </Box>
      <Heading as="h3" variant="h3" mb="8">
        {title}
      </Heading>
      <Text>{description}</Text>
    </Flex>
  )
}

const FeaturesContainer = ({ data }) => {
  console.log(data)
  return (
    <Stack
      w="full"
      justify="center"
      align="center"
      direction={{ base: 'column', md: 'row' }}
      spacing="20"
      mb="32"
    >
      {data.map((feature, i) => (
        <Feature
          title={feature.title}
          description={feature.description}
          image={feature.illustration}
          index={i}
          key={i}
        />
      ))}
    </Stack>
  )
}

export default FeaturesContainer
