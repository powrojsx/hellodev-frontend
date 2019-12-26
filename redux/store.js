import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers/rootReducer';
import { rootSaga } from './sagas/rootSaga';

export function configureStore(preloadedState, { isServer, req = null }) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(sagaMiddleware)
  );

  if (req || !isServer) {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  }

  return store;
}
