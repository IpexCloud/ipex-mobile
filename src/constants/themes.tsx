import { Platform } from 'react-native'
import colors from './colors'
import layout from './layout'

const theme = {
  colors: {
    primary: colors.primary, // button background
    secondary: 'blue',
    white: colors.white,
    black: colors.black,
    grey0: colors.gray100,
    grey1: colors.gray200,
    grey2: colors.gray300,
    grey3: colors.gray350,
    grey4: colors.gray400,
    grey5: colors.gray600,
    greyOutline: colors.gray600,
    searchBg: colors.gray600,
    success: colors.primary,
    error: colors.error,
    warning: colors.warning,
    divider: colors.gray350,
    // platform: {
    //   ios: {
    //     primary: '#fff',
    //     secondary: '#fff',
    //     grey: '#fff',
    //     searchBg: '#fff',
    //     success: '#fff',
    //     error: '#fff',
    //     warning: '#fff',
    //   },
    //   android: {
    //     primary: '#fff',
    //     secondary: '#fff',
    //     grey: '#fff',
    //     searchBg: '#fff',
    //     success: '#fff',
    //     error: '#fff',
    //     warning: '#fff',
    //   },
    // },
  },
  Button: {
    titleStyle: {
      fontFamily: 'Graphik-Regular',
      color: colors.white,
    },
    buttonStyle: {
      borderRadius: 5,
    },
  },
  Input: {
    inputStyle: {
      fontFamily: 'Graphik-Regular',
    },
  },
  SearchBar: {
    inputStyle: {
      fontFamily: 'Graphik-Regular',
    },
  },
  Avatar: {
    overlayContainerStyle: {
      backgroundColor: colors.gray300,
    },
  },
  Header: {
    containerStyle: {
      backgroundColor: colors.background,
      height: layout.window.height / 8,
      ...Platform.select({
        ios: {
          shadowColor: colors.gray400,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
        },
        android: {
          elevation: 5,
        },
      }),
    },
  },
}

export default theme
