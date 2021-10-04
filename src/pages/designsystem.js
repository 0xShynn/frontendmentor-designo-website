import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'

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
        <HStack spacing="4">
          <Flex bg="black" p="4">
            <Link href="#" variant="dark">
              Learn More
            </Link>
          </Flex>
          <Flex bg="white" p="4" borderWidth="1px">
            <Link href="#" variant="light">
              Learn More
            </Link>
          </Flex>
        </HStack>
        <Box bg="primary.peach" w="full" p="6">
          <form>
            <FormControl id="name" isRequired>
              <FormLabel color="white">Name</FormLabel>
              <Input
                type="name"
                variant="flushed"
                placeholder="Name"
                _placeholder={{ color: 'white', opacity: '0.5' }}
                color="white"
                px="4"
              />
            </FormControl>
            <FormControl>
              <Input
                type="email"
                variant="flushed"
                required
                placeholder="Email"
                _placeholder={{ color: 'white', opacity: '0.5' }}
                color="white"
                px="4"
              />
            </FormControl>
            <Button type="submit" mt="6">
              Send
            </Button>
          </form>
        </Box>
      </VStack>
    </Box>
  )
}

export default DesignSystem
