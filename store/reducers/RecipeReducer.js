import produce from 'immer';
import { SET_RECIPE_TYPES, SET_RECIPIES, RECIPE_INIT_DATA } from '../actionTypes/RecipeActionTypes';

const initialState = {
  recipeTypes: [],
  recipeList: []
};

export default (state = initialState, action) =>
  produce(state, draft => {
    /*eslint-disable indent */
    switch (action.type) {
      case SET_RECIPE_TYPES:
        draft.recipeTypes = action.payload;
        break;
      case SET_RECIPIES:
        draft.recipeList = action.payload;
        break;
      case RECIPE_INIT_DATA:
        return initialState;
    }
  });
