/* jshint ignore:start */

// header style
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '@lib/color';
import fonts from '@lib/font';

const baseStyles = StyleSheet.create ({
  content: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },


});

export default baseStyles;
