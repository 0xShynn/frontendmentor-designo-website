import { Flex, Icon, Link, Text } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

const AuthorBanner = () => {
  return (
    <Flex justify="center" px="6">
      <Flex
        py="4"
        px="6"
        textAlign="center"
        align="center"
        mb="16"
        bg="secondary.darkgrey"
        rounded="lg"
      >
        <Text color="white" mt="0.5">
          Code challenge by{' '}
          <Link
            href="https://www.frontendmentor.io"
            target="_blank"
            fontWeight="semibold"
            _hover={{ textDecoration: 'underline' }}
          >
            Frontend Mentor
          </Link>{' '}
          | Made by{' '}
          <Link
            href="https://anhek.dev"
            target="_blank"
            fontWeight="semibold"
            _hover={{ textDecoration: 'underline' }}
          >
            Antonin Nhek
          </Link>
        </Text>
        <Link
          href="https://github.com/anhek/frontendmentor-designo-website"
          target="_blank"
          aria-label="Link to the Github repo of the code challenge"
          ml="4"
        >
          <Icon
            as={FaGithub}
            boxSize="8"
            color="white"
            transition="0.2s"
            _hover={{ color: 'primary.peach' }}
          />
        </Link>
      </Flex>
    </Flex>
  )
}

export default AuthorBanner
