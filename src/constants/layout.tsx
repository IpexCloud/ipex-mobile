import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default {
  window: {
    width,
    height,
  },
  font: {
    xsmall: height / 50,
    small: height / 40,
    medium: height / 35,
    large: height / 30,
    xlarge: height / 20,
  },
  isSmallDevice: width < 375,
}
