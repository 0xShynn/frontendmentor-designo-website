import { useState } from 'react'

import { Box, Flex, Heading, Icon, Stack } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'
import { HiLocationMarker } from 'react-icons/hi'
import ReactMapGL, { Marker } from 'react-map-gl'

const LocationItem = ({
  title,
  address,
  contact,
  mapLocation,
  slug,
  index,
}) => {
  const [viewport, setViewport] = useState({
    latitude: mapLocation.latitude,
    longitude: mapLocation.longitude,
    width: '100%',
    height: '100%',
    zoom: 13,
  })

  return (
    <Stack
      direction={{
        base: 'column-reverse',
        lg: index % 2 === 0 ? 'row' : 'row-reverse',
      }}
      spacing={{ base: 0, md: 8 }}
      id={slug}
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
            variant={{ base: 'h1', lg: 'h2' }}
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
            spacing={{ base: 8, md: 28, lg: 20, xl: 28 }}
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

      {mapLocation && (
        <Box
          pos="relative"
          overflow="hidden"
          rounded={{ base: 'unset', md: '2xl' }}
          w={{ base: 'full', lg: '350px' }}
          h={{ base: '326px', lg: 'auto' }}
        >
          <ReactMapGL
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxApiAccessToken="pk.eyJ1IjoiYW5oZWsiLCJhIjoiY2t1bXlrcTltMG9pNjMwdGg2cTFmZzhleSJ9.oqlfTue82ExvrT1lVYgniw"
            onViewportChange={(viewport) => setViewport(viewport)}
            {...viewport}
          >
            <Marker
              latitude={mapLocation.latitude}
              longitude={mapLocation.longitude}
            >
              <Icon
                as={HiLocationMarker}
                boxSize="36px"
                color="primary.peach"
              />
            </Marker>
          </ReactMapGL>
        </Box>
      )}
    </Stack>
  )
}

export default LocationItem
