// import external dependencies
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// import internal dependencies
import rootReducer from './rootReducer';

const middleware =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(thunk)
    : compose(
        applyMiddleware(thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      );

const store = createStore(rootReducer, {}, middleware);

export default store;
