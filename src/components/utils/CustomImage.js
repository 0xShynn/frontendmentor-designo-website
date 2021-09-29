import { Box } from '@chakra-ui/layout'
import NextImage from 'next/image'

const CustomImage = (props) => {
  const { image, ...rest } = props
  return (
    <Box {...rest}>
      <NextImage src={image} />
    </Box>
  )
}

export default CustomImage
