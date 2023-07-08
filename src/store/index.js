// third-party
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { persistStore } from 'redux-persist';
import { locationApi } from './slices/location/locationHooks';

// project imports
import rootReducer from './reducer';
// .concat(locationApi.middleware)
// ==============================|| REDUX - MAIN STORE ||============================== //

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, immutableCheck: false })
});

const persister = persistStore(store);
setupListeners(store.dispatch);

const { dispatch } = store;

const useDispatch = () => useAppDispatch();
const useSelector = useAppSelector;
export { store, persister, dispatch, useSelector, useDispatch };
