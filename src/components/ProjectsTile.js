import { Box, Flex, Grid, GridItem, Heading } from '@chakra-ui/react'

import CustomLink from './utils/CustomLink'

const Tile = ({ title, bgImage }) => {
  const mobileBgImage =
    bgImage?.find((bgImage) => bgImage.imageSize === 'mobile') ?? null
  const tabletBgImage =
    bgImage?.find((bgImage) => bgImage.imageSize === 'tablet') ?? null
  const desktopBgImage =
    bgImage?.find((bgImage) => bgImage.imageSize === 'desktop') ?? null

  return (
    <Flex
      py={{ base: 24, md: 16, lg: 20, xl: 24 }}
      px="6"
      bg="red.100"
      rounded="2xl"
      h="full"
      align="center"
      justify="center"
      direction="column"
      bgImage={{
        base: mobileBgImage.url,
        md: tabletBgImage.url,
        lg: desktopBgImage.url,
      }}
      bgPos="center"
      bgSize="cover"
      textAlign="center"
    >
      <Heading as="h2" variant="h3" color="white">
        {title}
      </Heading>
      <CustomLink href="/" color="white">
        View Projects
      </CustomLink>
    </Flex>
  )
}

const ProjectsTile = ({ data }) => {
  return (
    <Box p="6" w="full" mb="24">
      <Grid
        gap={6}
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(2, 1fr)"
      >
        {data.map((tile, i) => {
          return (
            <GridItem
              key={i}
              colSpan={{ base: '2', lg: '1' }}
              rowSpan={
                tile.title === 'Web Design' ? { base: '1', lg: '2' } : '1'
              }
            >
              <Tile title={tile.title} bgImage={tile.imageBackground} />
            </GridItem>
          )
        })}
      </Grid>
    </Box>
  )
}

export default ProjectsTile
