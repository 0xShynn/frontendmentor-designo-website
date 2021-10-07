import { Box, Flex, Heading, Text } from '@chakra-ui/react'

import CustomImage from './utils/CustomImage'

const Hero = ({ title, content, image }) => {
  return (
    <Flex
      bg="primary.peach"
      rounded={{ base: 'none', md: '2xl' }}
      mb={{ md: 28, xl: 36 }}
      overflow="hidden"
      direction={{ base: 'column', lg: 'row-reverse' }}
      w="full"
      bgImage={{
        base: 'images/bg-pattern-hero-about-mobile.svg',
        md: 'images/bg-pattern-hero-home.svg',
      }}
      bgPos={{
        base: '-500px 200px',
        sm: '-400px 200px',
        md: '0 0',
      }}
      bgSize={{ lg: '150%' }}
      bgRepeat="no-repeat"
    >
      <CustomImage
        // attributes for the NextImage element
        image={image.url}
        width={image.width}
        height={image.height}
        objectFit="cover"
        objectPosition="center"
        layout="fill"
        // down here attributes goes to box
        w={{ base: 'full', lg: '476px' }}
        h={{ base: '320px', lg: 'auto' }}
        overflow="hidden"
        pos="relative"
      />

      <Box
        flex="1"
        py={{ base: 16, lg: 24, xl: 32 }}
        px={{ base: 4, md: 16, lg: 16, xl: 20 }}
        textAlign={{ base: 'center', lg: 'left' }}
        color="white"
      >
        <Heading as="h1" variant="h1" mb={{ base: 6, lg: 10 }}>
          {title}
        </Heading>
        <Text>{content}</Text>
      </Box>
    </Flex>
  )
}

export default Hero
