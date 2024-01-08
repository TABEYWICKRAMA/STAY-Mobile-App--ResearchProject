import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {createStore, compose, applyMiddleware, AnyAction} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk, {ThunkAction} from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';

import {rootReducer} from './rootReducer';
// import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ["root"], // or blacklist to exclude specific reducers
};
const presistedReducer = persistReducer(persistConfig, rootReducer);
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWare = [thunk];
const middlewareEnhancer = applyMiddleware(...middleWare);
const enhancers = [middlewareEnhancer];

const composedEnhancers = composeEnhancers(...enhancers);
const store = createStore(presistedReducer, composedEnhancers);
// const storee = createStore(
//   presistedReducer,
//   // composeWithDevTools(applyMiddleware(...middleWare)),
//   composeEnhancers(applyMiddleware(...middleWare)),
// );
const persistor = persistStore(store);
export {persistor, store};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type RootStore = ReturnType<typeof rootReducer>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
