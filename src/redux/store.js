// import { createStore, applyMiddleware } from 'redux';
// import { persistStore } from 'redux-persist';
// import logger from 'redux-logger';

import rootReducer from './root-reducer';

// const middlewares = [];

// if (process.env.NODE_ENV === 'development') {
//   middlewares.push(logger);
// }

// export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// export const persistor = persistStore(store);


import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist'
import logger from 'redux-logger';

const middleware = [
    ...getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true
    }),
    logger
  ];;

export const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV !== "production",
    // enhancers: [reduxBatch]
  });

export const persistor = persistStore(store);


export default store; 
