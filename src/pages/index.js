import { Box, Flex, Heading, Link, SimpleGrid, Text } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'
import Image from 'next/image'

export default function Home() {
  return (
    <Box>
      {/* Edit the Head info */}
      <NextSeo title="Home" description="Description" />

      <Flex
        role="main"
        bg="white"
        direction="column"
        align="center"
        justify="center"
        py="12"
        px="6"
      >
        <Heading as="h1">Next Chakra UI Starter</Heading>

        <Text mb="12">
          Get started by editing <code>pages/index.js</code>
        </Text>

        <SimpleGrid columns={[1, 2]} spacing={12} maxW="600px">
          <Link href="https://nextjs.org/docs">
            <Heading as="h3" fontSize="lg">
              Documentation &rarr;
            </Heading>
            <Text>
              Find in-depth information about Next.js features and API.
            </Text>
          </Link>

          <Link href="https://nextjs.org/learn">
            <Heading as="h3" fontSize="lg">
              Learn &rarr;
            </Heading>
            <Text>
              Learn about Next.js in an interactive course with quizzes!
            </Text>
          </Link>

          <Link href="https://github.com/vercel/next.js/tree/master/examples">
            <Heading as="h3" fontSize="lg">
              Examples &rarr;
            </Heading>
            <Text>
              Discover and deploy boilerplate example Next.js projects.
            </Text>
          </Link>

          <Link href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <Heading as="h3" fontSize="lg">
              Deploy &rarr;
            </Heading>
            <Text>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </Text>
          </Link>
        </SimpleGrid>
      </Flex>

      <Box role="contentinfo">
        <Flex justify="center" p="6">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </Flex>
      </Box>
    </Box>
  )
}
