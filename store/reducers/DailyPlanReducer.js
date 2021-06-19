import produce from 'immer';
import { SET_DAILY_MEAL_LIST, DAILY_MEAL_INIT_DATA } from '../actionTypes/DailyPlanActionTypes';

const initialState = {
  dailyMeals: []
};

export default (state = initialState, action) =>
  produce(state, draft => {
    /*eslint-disable indent */
    switch (action.type) {
      case SET_DAILY_MEAL_LIST:
        draft.dailyMeals = action.payload;
        break;
      case DAILY_MEAL_INIT_DATA:
        return initialState;
    }
  });
