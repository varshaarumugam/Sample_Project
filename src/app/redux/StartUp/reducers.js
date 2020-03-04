/* jshint ignore:start */

import StartUpType from './types';

const initialState = {
  loading: false,
  error: null,
  userDetails: {},
};

// reducer
const StartUpReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case StartUpType.FETCH_STARTUP_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case StartUpType.FETCH_STARTUP_USERDETAILS:
      return {
        ...state,
        userDetails: action.payload,
        loading: false,
      };

    case StartUpType.FETCH_STARTUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default StartUpReducer;
