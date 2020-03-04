/* jshint ignore:start */

import axios from 'axios';
import constant from '@config/constant';
import startUpAction from './actions';

export function get_details () {
  return dispatch => {
    dispatch (startUpAction.fetchStartUpBegin ());
    return (
      axios
        .get (`${constant.Host}/posts?_start=5&_limit=5`, {})
        //.get ('http://jsonplaceholder.typicode.com/posts?_start=5&_limit=5', {})
        .then (res => {
          if (res) {
            console.log ('res', res);
            dispatch (startUpAction.fetchStartupUserdetails (res.data));
          }
        })
        .catch (message => {
          dispatch (startUpAction.fetchStartUpFailure (message));
        })
    );
  };
}
