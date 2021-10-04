const heading = {
  // style object for base or default style
  baseStyle: { fontWeight: '600' },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    h1: {
      fontSize: ['32px', '32px', '48px'],
      lineHeight: ['36px', '36px', '48px'],
    },
    h2: {
      fontSize: '40px',
      lineHeight: '48px',
      letterSpacing: '2px',
    },
    h3: {
      fontSize: '20px',
      lineHeight: '26px',
      letterSpacing: '5px',
      textTransform: 'uppercase',
    },
  },
  // default values for `size` and `variant`
  defaultProps: {},
}

export default heading
