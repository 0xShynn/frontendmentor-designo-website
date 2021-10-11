import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'

import CustomImage from './utils/CustomImage'

const Hero = ({ title, content, mdxContent, image, imageSide, theme }) => {
  return (
    <Flex
      bg={theme?.bg ?? 'primary.peach'}
      rounded={{ base: 'none', md: '2xl' }}
      mb={{ base: theme?.name === 'main' ? 0 : 28, md: 28, xl: 36 }}
      overflow="hidden"
      direction={{
        base: imageSide === 'right' ? 'column' : 'column-reverse',
        lg: 'row-reverse',
      }}
      w="full"
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
        py={{ base: 20, md: 20, lg: 24, xl: theme?.name === 'main' ? 32 : 40 }}
        px={{ base: 4, md: 16, lg: 16, xl: 20 }}
        textAlign={{ base: 'center', lg: 'left' }}
        color="white"
        bgImage={
          theme?.name === 'main'
            ? 'images/bg-pattern-two-circles2.svg'
            : 'images/bg-pattern-three-circles.svg'
        }
        bgPos={
          theme?.name === 'main'
            ? { base: '-190px -130px', md: '135% 130%', lg: '0 100%' }
            : {
                base: '0 bottom',
                md: 'right 130%',
                lg: '-200% bottom',
                xl: '-300% bottom',
              }
        }
        bgSize={
          theme?.name === 'main'
            ? { base: '150%', md: '180%', lg: '200%' }
            : null
        }
        bgRepeat="no-repeat"
      >
        <Heading
          as={theme?.name === 'main' ? 'h1' : 'h2'}
          variant={theme?.name === 'main' ? 'h1' : 'h2'}
          letterSpacing="0"
          mb={{ base: 6, lg: 10 }}
          color={theme?.title ?? 'red'}
        >
          {title}
        </Heading>

        {content && <Text color={theme?.text}>{content}</Text>}

        {mdxContent && (
          <Box color={theme?.text ?? 'red'}>
            <MDXRemote {...mdxContent} />
          </Box>
        )}
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
