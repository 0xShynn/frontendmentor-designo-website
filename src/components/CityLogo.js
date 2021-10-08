import { Box, Flex, Heading } from '@chakra-ui/react'

import rotateBackgroundImage from '../utils/rotateBackgroundImage'

import CustomImage from './utils/CustomImage'
import CustomLink from './utils/CustomLink'

const CityLogo = ({ title, image, link, index }) => {
  return (
    <Flex align="center" direction="column">
      {image && (
        <Box pos="relative" mb={{ base: 12 }}>
          <CustomImage
            image={image.url}
            width="202px"
            height="202px"
            pos="absolute"
            top="0"
            left="0"
            zIndex="overlay"
          />
          <CustomImage
            image="/images/bg-pattern-hero-home.svg"
            width="202px"
            height="202px"
            transform={`rotate(${rotateBackgroundImage(index)})`}
          />
        </Box>
      )}

      <Flex align="center" direction="column">
        <Heading as="h3" variant="h3" mb="8" color="primary.black">
          {title}
        </Heading>
        <CustomLink href={link.url} variant="light" display="inline-flex">
          {link.label}
        </CustomLink>
      </Flex>
    </Flex>
  )
}

export default CityLogo
