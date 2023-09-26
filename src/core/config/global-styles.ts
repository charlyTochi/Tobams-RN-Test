import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import colors from './colors';
const regularFontFamily = 'Poppins-Regular';
const boldFontFamily = 'Poppins-Bold';
const mediumFontFamily = 'Poppins-Medium';
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paragraph: {
    fontSize: RFPercentage(1.8),
    fontFamily: regularFontFamily,
  },
  small: {
    fontSize: RFPercentage(1.6),
  },
  header: {
    fontSize: RFPercentage(3.9),
    fontFamily: 'Poppins-ExtraBold',
  },
  heading1: {
    fontSize: RFPercentage(2.9),
  },
  heading2: {
    fontSize: RFPercentage(2.7),
  },
  heading3: {
    fontSize: RFPercentage(2.5),
  },
  heading4: {
    fontSize: RFPercentage(2.3),
  },
  heading5: {
    fontSize: RFPercentage(2.1),
  },
  heading6: {
    fontSize: RFPercentage(2.0),
  },

  fontWeightBold: {
    fontFamily: boldFontFamily,
  },
  fontWeightNormal: {
    fontFamily: regularFontFamily,
  },
  textMuted: {
    color: colors.grey,
  },
  textDark: {
    color: colors.black,
  },
});
