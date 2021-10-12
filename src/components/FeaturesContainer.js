import { Stack } from '@chakra-ui/react'

import Feature from './Feature'

const FeaturesContainer = ({ data }) => {
  return (
    <Stack
      w="full"
      justify="center"
      align={{ base: 'center', lg: 'flex-start' }}
      direction={{ base: 'column', lg: 'row' }}
      spacing={{ base: 20, md: 8 }}
      mb="32"
      role="complementary"
    >
      {data.map((feature, i) => (
        <Feature
          title={feature.title}
          description={feature.description}
          image={feature.illustration}
          index={i}
          key={i}
        />
      ))}
    </Stack>
  )
}

export default FeaturesContainer
