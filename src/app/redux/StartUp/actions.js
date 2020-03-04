/* jshint ignore:start */
import StartUpType from './types';

// actions
const fetchStartUpBegin = () => ({
  type: StartUpType.FETCH_STARTUP_BEGIN,
});

const fetchStartupUserdetails = payload => ({
  type: StartUpType.FETCH_STARTUP_USERDETAILS,
  payload: payload,
});

const fetchStartUpFailure = payload => ({
  type: StartUpType.FETCH_STARTUP_FAILURE,
  payload: payload,
});

export default {
  fetchStartUpBegin,
  fetchStartupUserdetails,
  fetchStartUpFailure,
};
