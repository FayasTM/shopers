import { configureStore } from "@reduxjs/toolkit";
import shoppersReducer from "./shoppersSlice"; // Import the reducer
import { 
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  WebStorage } from 'redux-persist'

import createWebStorage from "redux-persist/es/storage/createWebStorage";

export function createPersistedStore():WebStorage {
  const isServer = typeof window === 'undefined';

  //we will create dummy server
  if(isServer){
    return{
      getItem(){
        return Promise.resolve(null);
      },
      setItem(){
        return Promise.resolve();
      },
      removeItem(){
        return Promise.resolve();
      }
    };
  }
 return createPersistedStore("local");
}

const storage = 
  typeof window !== "undefined" 
  ? createWebStorage("local") 
  : createPersistedStore;




const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, shoppersReducer);

export const store = configureStore({
  reducer: {
    shoppers: persistedReducer, 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:{
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
