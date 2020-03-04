/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Platform,
  YellowBox,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from '@app/redux/store';
import {Root} from 'native-base';
import styles from './style';
import FlatlistScreen from '@components/FlatlistComponent/FlatlistComponent';
const store = configureStore ();
if (__DEV__) {
  /* eslint no-undef: 0 */
  XMLHttpRequest = GLOBAL.originalXMLHttpRequest
    ? GLOBAL.originalXMLHttpRequest
    : GLOBAL.XMLHttpRequest;
}
class App extends Component {
  render () {
    YellowBox.ignoreWarnings ([
      'ViewPagerAndroid',
      'Remote debugger is in a background tab which may cause apps to perform slowly',
    ]);
    console.disableYellowBox = true;
    return (
      <Fragment>
        <SafeAreaView style={styles.topnotchContainer} />
        <SafeAreaView style={styles.bottomnotchContainer}>
          <Provider store={store}>
            <Root>
              <FlatlistScreen />
            </Root>
          </Provider>
        </SafeAreaView>

      </Fragment>
    );
  }
}

export default App;
