// Initial state for the reducer
const initialState = {
  count: 0
};

// 1. The reducer tells the store how the state looks like and how it is changed
// reducer gets triggered when the store is called
// always make sure the reducer is a pure function
function rootReducer(state = initialState, action) {
  if (action.type === "INCREMENT") {
    let newState = Object.assign({}, state);
    newState.count++;
    return newState;
  }
  if (action.type === "DECREMENT") {
    let newState = Object.assign({}, state);
    newState.count--;
    return newState;
  }
  return state;
}

// 2. create a store (a place where the state lives)
// A store must take in a reducer function
// The reducer is run and initial state defined
const store = Redux.createStore(rootReducer);

// When we want to see the current state, call getState()
console.log("get the initial state", store.getState());

// *********** Dispatch with action "INCREMENT"
// 3. Whenever we want to make a change to the state, call dispatch
// to change the state, dispatch an action
// actions are objects
// actions contain the key "type"
store.dispatch({
  type: "INCREMENT" // "INCREMENT" is the action
});
console.log("get the state after dispatch", store.getState());

store.dispatch({
  type: "INCREMENT"
});
console.log("get the state after dispatch", store.getState());

store.dispatch({
  type: "INCREMENT"
});
console.log("get the state after dispatch", store.getState());

// *********** Dispatch with action "DECREMENT"
store.dispatch({
  type: "DECREMENT"
});
console.log("get the state after dispatch", store.getState());

// *********** Dispatch with action using a function that returns an object
function increment() {
  return { type: "INCREMENT" };
}

store.dispatch(increment());
console.log("get the state after dispatch", store.getState());
