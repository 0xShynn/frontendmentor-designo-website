import { Box } from '@chakra-ui/layout'
import NextImage from 'next/image'

const CustomImage = (props) => {
  const { image, height, width, layout, ...rest } = props
  return (
    <Box {...rest}>
      <NextImage
        src={image}
        height={height ? height : null}
        width={width ? width : null}
      />
    </Box>
  )
}

export default CustomImage
