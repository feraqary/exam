// third-party
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// project imports
import snackbarReducer from './slices/snackbar';
import customerReducer from './slices/customer';
import contactReducer from './slices/contact';
import productReducer from './slices/product';
import chatReducer from './slices/chat';
import calendarReducer from './slices/calendar';
import mailReducer from './slices/mail';
import userReducer from './slices/user';
import cartReducer from './slices/cart';
import kanbanReducer from './slices/kanban';
import menuReducer from './slices/menu';
import countriesReducer from './slices/country-section/slice/country';
import companiesReducer from './slices/company-section/slice/company';
import serviceUpdate from './slices/services/slice/services';
import signupSlice from './slices/user-registration/slice/user-registration';
import userManagement from './slices/Management_/slice/users';
import locationApi from './slices/location/locationHooks';
// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  snackbar: snackbarReducer,
  cart: persistReducer(
    {
      key: 'cart',
      storage,
      keyPrefix: 'berry-'
    },
    cartReducer
  ),
  kanban: kanbanReducer,
  customer: customerReducer,
  contact: contactReducer,
  product: productReducer,
  chat: chatReducer,
  calendar: calendarReducer,
  mail: mailReducer,
  user: userReducer,
  menu: menuReducer,
  countries: countriesReducer,
  companies: companiesReducer,
  serviceUpdate: serviceUpdate,
  signUp: signupSlice,
  usermanagement: userManagement
});

//Reducer
export default reducer;

// ----------------------------------------------------------------------
