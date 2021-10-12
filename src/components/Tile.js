import { Box, Flex, Heading, LinkBox, LinkOverlay } from '@chakra-ui/react'
import NextLink from 'next/link'

const Tile = ({ title, button, bgImage }) => {
  const mobileBgImage =
    bgImage?.find((bgImage) => bgImage.imageSize === 'mobile') ?? null
  const tabletBgImage =
    bgImage?.find((bgImage) => bgImage.imageSize === 'tablet') ?? null
  const desktopBgImage =
    bgImage?.find((bgImage) => bgImage.imageSize === 'desktop') ?? null

  return (
    <LinkBox
      h="full"
      pos="relative"
      sx={{
        ':hover > .bg': {
          bgColor: 'primary.blendpeach',
          bgBlendMode: 'soft-light',
          opacity: '0.7',
        },
      }}
    >
      <Box zIndex="overlay" pos="relative" h="full">
        <Flex
          direction="column"
          textAlign="center"
          align="center"
          justify="center"
          h="full"
          py={{ base: 24, md: 16, lg: 20, xl: 24 }}
        >
          <Heading
            as="h2"
            variant="h2"
            color="white"
            textTransform="uppercase"
            fontWeight="600"
            mb={{ base: 4, xl: 6 }}
          >
            {title}
          </Heading>
          <NextLink href={`/${button.url}`} passHref>
            <LinkOverlay
              fontSize="15px"
              fontWeight="600"
              letterSpacing="5px"
              textTransform="uppercase"
              color="white"
            >
              {button.label}
            </LinkOverlay>
          </NextLink>
        </Flex>
      </Box>
      <Box
        className="bg"
        transition="0.2s"
        zIndex="base"
        pos="absolute"
        w="full"
        h="full"
        rounded="2xl"
        bgImage={{
          base: mobileBgImage.url,
          md: tabletBgImage.url,
          lg: desktopBgImage.url,
        }}
        bgBlendMode="multiply"
        bgColor="hsla(207, 100%, 0%, 0.6)"
        bgPos="center"
        bgSize="cover"
        top="0"
      />
    </LinkBox>
  )
}

export default Tile
