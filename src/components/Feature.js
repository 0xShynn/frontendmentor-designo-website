import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import rotateBackgroundImage from '../utils/rotateBackgroundImage'

import CustomImage from './utils/CustomImage'

const Feature = ({ title, description, image, index }) => {
  const MotionFlex = motion(Flex)
  const MotionBox = motion(Box)

  const FramerFeature = {
    hidden: {
      y: -30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const FramerItem = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: 'afterChildren',
      },
    },
  }

  return (
    <MotionFlex
      variants={FramerFeature}
      w="full"
      justify="center"
      align="center"
      direction={{ base: 'column', md: 'row', lg: 'column' }}
      maxW={{ base: '350px', md: '690px' }}
      px={{ base: 6, md: 0 }}
    >
      {image && (
        <MotionBox
          pos="relative"
          mb={{ base: 12, md: 0, lg: 12 }}
          whileHover={{
            scale: 1.1,
          }}
        >
          <MotionBox variants={FramerItem}>
            <CustomImage
              image={image.url}
              width="202px"
              height="202px"
              pos="absolute"
              top="0"
              left="0"
              zIndex="overlay"
              alt={image.altText}
            />
          </MotionBox>
          <MotionBox variants={FramerItem}>
            <CustomImage
              image="/images/bg-pattern-hero-home.svg"
              width="202px"
              height="202px"
              transform={`rotate(${rotateBackgroundImage(index)})`}
              alt=""
            />
          </MotionBox>
        </MotionBox>
      )}

      {(title || description) && (
        <MotionBox
          variants={FramerItem}
          textAlign={{ base: 'center', md: 'left', lg: 'center' }}
          ml={{ md: 12, lg: 0 }}
          flex="1"
          color="primary.black"
        >
          <Heading as="h3" variant="h3" mb={{ base: 8, md: 4 }}>
            {title}
          </Heading>

          <Text>{description}</Text>
        </MotionBox>
      )}
    </MotionFlex>
  )
}

export default Feature
