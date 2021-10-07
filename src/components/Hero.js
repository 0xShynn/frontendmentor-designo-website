import { Box, Flex, Heading, Text } from '@chakra-ui/react'

import CustomImage from './utils/CustomImage'

const Hero = ({ title, content, image, imageSide, theme }) => {
  return (
    <Flex
      bg={theme.bg ?? 'primary.peach'}
      rounded={{ base: 'none', md: '2xl' }}
      mb={{ base: theme.name === 'main' ? 0 : 28, md: 28, xl: 36 }}
      overflow="hidden"
      direction={{
        base: imageSide === 'right' ? 'column' : 'column-reverse',
        lg: 'row-reverse',
      }}
      w="full"
      // bgImage={{
      //   base: 'images/bg-pattern-hero-about-mobile.svg',
      //   md: 'images/bg-pattern-hero.svg',
      // }}
      // bgPos={{
      //   base: '-500px 200px',
      //   sm: '-400px 200px',
      //   md: '0 0',
      // }}
      // bgSize="cover"
      // bgRepeat="no-repeat"
    >
      {image && imageSide === 'right' && (
        <CustomImage
          // attributes for the NextImage element
          image={image.url}
          objectFit="cover"
          objectPosition="center"
          layout="fill"
          // down here attributes goes to box
          w={{ base: 'full', lg: '476px' }}
          h={{ base: '320px', lg: 'auto' }}
          overflow="hidden"
          pos="relative"
        />
      )}

      <Box
        flex="1"
        py={{ base: 16, lg: 24, xl: theme.name === 'main' ? 32 : 40 }}
        px={{ base: 4, md: 16, lg: 16, xl: 20 }}
        textAlign={{ base: 'center', lg: 'left' }}
        color="white"
      >
        <Heading
          as={theme.name === 'main' ? 'h1' : 'h2'}
          variant={theme.name === 'main' ? 'h1' : 'h2'}
          letterSpacing="0"
          mb={{ base: 6, lg: 10 }}
          color={theme.title ?? 'red'}
        >
          {title}
        </Heading>
        <Text color={theme.text}>{content}</Text>
      </Box>

      {image && imageSide === 'left' && (
        <CustomImage
          // attributes for the NextImage element
          image={image.url}
          objectFit="cover"
          objectPosition="center"
          layout="fill"
          // down here attributes goes to box
          w={{ base: 'full', lg: '476px' }}
          h={{ base: '320px', lg: 'auto' }}
          overflow="hidden"
          pos="relative"
        />
      )}
    </Flex>
  )
}

export default Hero
