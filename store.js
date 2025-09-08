

const { createStore, combineReducers, applyMiddleware, compose } = window.Redux;

function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function colorChanger(state = "blue", action) {
  switch (action.type) {
    case "CHANGE":
      return (state = "green");
    default:
      return state;
  }
}

function userData(state='',action){
    switch(action.type){ 
        
        case 'FETCH':
            return "fetching data"
        case 'FETCH_DONE':
            return "Fetching done"
        default:
            return state
    }
}

function middleware(store) {
  return function (next) {
    return function (action) {
        console.log(action);
        
        
     if(typeof action==='function') {
        return action(store.dispatch,store.getState)
     }
     return next(action)
    };
  };
}

const rootreducer = combineReducers({
  count: counterReducer,
  color: colorChanger,
  data:userData
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(
  rootreducer,
  composeEnhancers(applyMiddleware(middleware))
);

window.store = store;
