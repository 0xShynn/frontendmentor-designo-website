import { Stack } from '@chakra-ui/react'

import CityLogo from './CityLogo'

const OfficeLogosContainer = ({ data, pt }) => {
  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      spacing={{ base: 16, md: 20, lg: 28, xl: 40 }}
      pt={pt || 0}
      pb={{ base: 28, xl: 36 }}
    >
      {data.map((logo, i) => (
        <CityLogo
          key={i}
          title={logo.country}
          image={logo.image}
          link={logo.button}
          index={i}
        />
      ))}
    </Stack>
  )
}

export default OfficeLogosContainer
