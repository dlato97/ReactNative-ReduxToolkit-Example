import {combineReducers, configureStore} from '@reduxjs/toolkit';
import homeReducer from '../Pages/home/store/homeStore';
import {feature1Reducer} from '../Pages/feature1/store/reducers/feature1Reducer';

const rootReducer = combineReducers({
  home: homeReducer,
  feature1: feature1Reducer,
});

const store = configureStore({reducer: rootReducer});

export default store;
