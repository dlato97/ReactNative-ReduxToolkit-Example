import {createReducer} from '@reduxjs/toolkit';
import {addProduct, deleteProduct} from '../actions/HomeActions';

export const homeReducer = createReducer([], {
  [addProduct.type]: (state, action) => state.push(action.payload),
  [deleteProduct.type]: (state, action) =>
    state.filter((p) => p.id !== action.payload),
});
