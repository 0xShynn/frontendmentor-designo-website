export const sharedBaseStyle = {
  // Write here some shared `base style` between Link and Button components
}

const sharedStyle = {
  rounded: 'lg',
  py: 4,
  px: 6,
  fontSize: '15px',
  fontWeight: '600',
  letterSpacing: '1px',
  textTransform: 'uppercase',
}

export const light = {
  light: {
    ...sharedStyle,
    bg: 'primary.peach',
    color: 'white',
    _hover: {
      color: 'white',
      bg: 'secondary.lightpeach',
    },
    _disabled: {
      _hover: {},
    },
  },
}

export const dark = {
  dark: {
    ...sharedStyle,
    bg: 'white',
    color: 'primary.black',
    _hover: {
      color: 'white',
      bg: 'secondary.lightpeach',
    },
    _disabled: {
      _hover: {},
    },
  },
}

// Add new shared variants here and don't forget to import them inside > theme/components/`component`.js
