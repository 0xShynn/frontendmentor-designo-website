import { Box, Grid, GridItem } from '@chakra-ui/react'

import Tile from './Tile'

const ProjectTilesContainer = ({ data }) => {
  const tilesCount = data.length
  return (
    <Box
      w="full"
      mb="28"
      px={{ base: 6, md: 0 }}
      role="region"
      aria-label="projects container"
    >
      <Grid
        gap={6}
        templateColumns="repeat(2, 1fr)"
        templateRows={`repeat(${tilesCount === 3 ? '2' : '1'}, 1fr)`}
      >
        {data.map((tile, i) => {
          return (
            <GridItem
              key={i}
              colSpan={{ base: '2', lg: '1' }}
              rowSpan={
                i === 0 && tilesCount === 3 ? { base: '1', lg: '2' } : '1'
              }
            >
              <Tile
                title={tile.title}
                bgImage={tile.imageBackground}
                button={tile.button}
              />
            </GridItem>
          )
        })}
      </Grid>
    </Box>
  )
}

export default ProjectTilesContainer
