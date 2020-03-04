/* jshint ignore:start */

import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '@lib/color';
import fonts from '@lib/font';
const {width, height} = Dimensions.get ('window');

const styles = StyleSheet.create ({
  imgView: {
    flexDirection: 'row',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderColor: colors.gray,
    borderWidth: wp ('0.4%'),
  },
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 40,
    padding: 16,
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: hp ('8%'),
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: colors.black,
    backgroundColor: colors.white,
  },
  loader: {
    marginTop: hp ('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
