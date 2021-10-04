import Icon from '@chakra-ui/icon'

import IconFacebook from '../assets/icons/socials/IconFacebook'
import IconInstagram from '../assets/icons/socials/IconInstagram'
import IconPinterest from '../assets/icons/socials/IconPinterest'
import IconTwitter from '../assets/icons/socials/IconTwitter'
import IconYoutube from '../assets/icons/socials/IconYoutube'

function renderSocialIcons(icon) {
  switch (icon) {
    case 'Facebook':
      return <IconFacebook />
    case 'Twitter':
      return <IconTwitter />
    case 'Pinterest':
      return <IconPinterest />
    case 'Instagram':
      return <IconInstagram />
    case 'Youtube':
      return <IconYoutube />
    default:
      return <Icon />
  }
}

export default renderSocialIcons
