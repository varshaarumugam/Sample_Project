/* jshint ignore:start */
const round = number => Math.round (number * 100) / 100;

const monitorReducerEnhancer = createStore => (
  reducer,
  initialState,
  enhancer
) => {
  const monitoredReducer = (state, action) => {
    const start = Date.now ();
    const newState = reducer (state, action);
    const end = Date.now ();
    const diff = round (end - start);

    return newState;
  };

  return createStore (monitoredReducer, initialState, enhancer);
};

export default monitorReducerEnhancer;
