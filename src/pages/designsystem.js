import { Box, Heading, HStack, Link, Text, VStack } from '@chakra-ui/react'

const DesignSystem = () => {
  return (
    <Box p="6">
      <VStack spacing="6" align="flex-start">
        <Heading as="h1" variant="h1">
          Award-winning custom designs and digital branding solutions
        </Heading>
        <Heading as="h2" variant="h2">
          Let’s talk about your project
        </Heading>
        <Heading as="h3" variant="h3">
          RESOURCEFUL
        </Heading>
        <Text>
          Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients’ needs.
        </Text>
        <HStack>
          <Link href="#" variant="dark">
            Learn More
          </Link>
          <Link href="#" variant="light">
            Learn More
          </Link>
        </HStack>
      </VStack>
    </Box>
  )
}

export default DesignSystem
