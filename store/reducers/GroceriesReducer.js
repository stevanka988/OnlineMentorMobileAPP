import produce from 'immer';
import {
  SET_GROCERIES,
  SET_IMPORTED_GROCERIES,
  CLEAR_IMPORTED_GROCERIES,
  UPDATE_IMPORTED_GROCERIES,
  GROCERY_INIT_DATA
} from '../actionTypes/GroceriesActionTypes';

const initialState = {
  groceries: [],
  importedGrocery: []
};

export default (state = initialState, action) =>
  produce(state, draft => {
    /*eslint-disable indent */
    switch (action.type) {
      case SET_GROCERIES:
        draft.groceries = action.payload;
        break;
      case SET_IMPORTED_GROCERIES:
        draft.importedGrocery = [...draft.importedGrocery, action.payload];
        break;
      case UPDATE_IMPORTED_GROCERIES:
        draft.importedGrocery = action.payload;
        break;
      case CLEAR_IMPORTED_GROCERIES:
        draft.importedGrocery = [];
        break;
      case GROCERY_INIT_DATA:
        return initialState;
    }
  });
