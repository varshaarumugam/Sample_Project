/* eslint-disable no-unused-vars */
/*jshint esversion: 6 */
/* jshint ignore:start */

import {combineReducers} from 'redux';
import StartUpReducer from '@redux/StartUp';

const rootReducer = combineReducers ({
  startUp: StartUpReducer,
});

export default rootReducer;
