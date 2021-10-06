import { Box, Flex, Heading, Text } from '@chakra-ui/layout'

import CustomImage from '../components/utils/CustomImage'

import CustomLink from './utils/CustomLink'

const HeroMain = ({ data }) => {
  const { title, description, button, image } = data

  return (
    <Flex
      bg="primary.peach"
      direction={{ base: 'column', lg: 'row' }}
      px={{ base: 6, md: 8, lg: 20, xl: 24 }}
      py={{ base: 16, md: 16, lg: 28, xl: 36 }}
      mb="28"
      rounded={{ base: 'none', md: '2xl' }}
      w="full"
      h={{ base: '843px', lg: 'auto' }}
      pos="relative"
      overflow="hidden"
      bgImage={'images/bg-pattern-hero-home.svg'}
      bgPos={{
        base: '0 90px',
        md: '205px 105px',
        lg: '405px 105px',
        xl: '100% 0',
      }}
      bgRepeat="no-repeat"
      align="center"
    >
      <Box
        maxW={{ base: '540px', lg: '440px', xl: '540px' }}
        textAlign={{ base: 'center', lg: 'left' }}
        w={{ base: 'full', lg: 'max-content' }}
        mx="auto"
      >
        {title && (
          <Heading as="h1" variant="h1" color="white" mb="8">
            {title}
          </Heading>
        )}

        {description && (
          <Text
            color="white"
            maxW="445px"
            mb={{ base: 6, lg: 8 }}
            mx={{ base: 'auto', xl: 0 }}
          >
            {description}
          </Text>
        )}

        {button && (
          <CustomLink
            href="/"
            textTransform="uppercase"
            variant="dark"
            display="inline-block"
            mb={{ base: 12, lg: 0 }}
          >
            {button.label}
          </CustomLink>
        )}
      </Box>

      {image && (
        <Flex
          w={{ base: '200%', lg: '100%' }}
          pos={{ base: 'relative', lg: 'unset' }}
          justify="center"
          top="-150px"
        >
          <CustomImage
            pos={{ base: 'static', lg: 'absolute' }}
            top={{ base: 0, lg: '-50px', xl: '-40px' }}
            right={{ base: 0, lg: '-70px', xl: '-70px' }}
            image={image.url}
            width={image.width}
            height={image.height}
          />
        </Flex>
      )}
    </Flex>
  )
}

export default HeroMain
