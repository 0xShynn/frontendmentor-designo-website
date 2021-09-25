// Docs : https://chakra-ui.com/docs/theming/customize-theme#scaling-out-your-project
// theme/index.js
import { extendTheme } from '@chakra-ui/react'

import breakpoints from './breakpoints'
import colors from './colors'
import Button from './components/button'
import Heading from './components/heading'
import Link from './components/link'
import Text from './components/text'
import fonts from './fonts'
import global from './global'
import textStyles from './textStyles'

const overrides = {
  styles: {
    global,
  },
  colors,
  breakpoints,
  fonts,
  textStyles,
  components: {
    Button,
    Heading,
    Link,
    Text,
  },
}

export default extendTheme(overrides)
