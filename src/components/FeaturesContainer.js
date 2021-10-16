import { useMemo } from 'react'

import { Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import Feature from './Feature'

const FeaturesContainer = ({ data }) => {
  const MotionStack = motion(Stack)
  const { ref, inView } = useInView({ threshold: 0.75, triggerOnce: true })

  return useMemo(() => {
    const FramerFeaturesContainer = {
      hidden: { opacity: 0 },
      visible: {
        opacity: inView ? 1 : 0,
        transition: {
          staggerChildren: 1,
        },
      },
    }

    return (
      <MotionStack
        ref={ref}
        initial="hidden"
        animate="visible"
        variants={FramerFeaturesContainer}
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
      </MotionStack>
    )
  }, [ref, data, inView])
}

export default FeaturesContainer
