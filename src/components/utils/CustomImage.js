import { Box } from '@chakra-ui/layout'
import NextImage from 'next/image'

const CustomImage = (props) => {
  const {
    image,
    height,
    width,
    layout,
    objectFit,
    objectPosition,
    alt,
    ...rest
  } = props
  return (
    <Box {...rest}>
      <NextImage
        src={image}
        height={height ?? null}
        width={width ?? null}
        layout={layout ?? null}
        objectFit={objectFit ?? null}
        objectPosition={objectPosition ?? null}
        alt={alt}
      />
    </Box>
  )
}

export default CustomImage
