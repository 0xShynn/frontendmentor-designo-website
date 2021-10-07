export default function rotateBackgroundImage(index) {
  switch (index) {
    case 0:
      return '-90deg'
    case 1:
      return '180deg'
    case 2:
      return '0deg'
    default:
      return '0deg'
  }
}
