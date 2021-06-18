import {combineReducers} from 'redux';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './userSlice';
import exerciseReducer from './exerciseSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  exercise: exerciseReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = getDefaultMiddleware({serializableCheck: false});

export const store = configureStore({reducer: persistedReducer, middleware});
export const persistor = persistStore(store);
