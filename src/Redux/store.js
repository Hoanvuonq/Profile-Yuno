import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './Reducer/reducer';

const store = configureStore({
  reducer: {
    menu: menuReducer
  }
});

export default store;
