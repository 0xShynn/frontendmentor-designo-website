import CustomLink from './utils/CustomLink'

const NavLinks = ({ data, linksColor }) => {
  return data.map((link, i) => (
    <CustomLink
      key={i}
      href={`/${link.slug}`}
      textTransform="uppercase"
      fontSize="14px"
      letterSpacing="2px"
      lineHeight="14px"
      color={linksColor === 'light' ? 'white' : 'primary.black'}
      _hover={{ textDecoration: 'underline' }}
    >
      {link.title}
    </CustomLink>
  ))
}

export default NavLinks
