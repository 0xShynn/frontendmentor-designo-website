import { Box, Flex, Heading, Stack } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'
import NextImage from 'next/image'

const LocationItem = ({ title, address, contact, map }) => {
  return (
    <Stack
      direction={{ base: 'column-reverse' }}
      spacing={{ base: 0, md: 8 }}
      px={{ md: 8 }}
    >
      <Flex
        bg="secondary.verylightpeach"
        flex="1"
        direction={{ base: 'column' }}
        py={{ base: 20, md: 20, lg: 24, xl: 24 }}
        px={{ base: 4, md: 16, lg: 16, xl: 20 }}
        textAlign={{ base: 'center', md: 'left' }}
        rounded={{ base: 'unset', md: '2xl' }}
        bgPos={{
          base: 'top bottom',
          md: '0 bottom',
          lg: '-200% bottom',
          xl: '0 bottom',
        }}
        bgImage={'images/bg-pattern-three-circles.svg'}
        bgRepeat="no-repeat"
      >
        {title && (
          <Heading
            as="h2"
            variant="h1"
            letterSpacing="0"
            mb={{ base: 6, lg: 8 }}
            color="primary.peach"
          >
            {title}
          </Heading>
        )}
        {(address || contact) && (
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 8, md: 28 }}
          >
            {address && (
              <Box color="primary.black">
                <MDXRemote {...address} />
              </Box>
            )}

            {contact && (
              <Box color="primary.black">
                <MDXRemote {...contact} />
              </Box>
            )}
          </Stack>
        )}
      </Flex>

      {map && (
        <Box
          pos="relative"
          w={{ base: 'full' }}
          h="326px"
          rounded={{ base: 'unset', md: '2xl' }}
          overflow="hidden"
        >
          <NextImage
            src={map.url}
            layout="fill"
            objectFit="cover"
            width={map.width}
            height={map.height}
          />
        </Box>
      )}
    </Stack>
  )
}

export default LocationItem
