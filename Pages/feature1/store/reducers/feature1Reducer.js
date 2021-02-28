import {createReducer} from '@reduxjs/toolkit';
import {addItem, deleteItem} from '../actions/feature1Actions';

export const feature1Reducer = createReducer([], {
  [addItem.type]: (state, action) => void state.push(action.payload),
  [deleteItem.type]: (state, action) =>
    state.filter((p) => p.id !== action.payload),
});
