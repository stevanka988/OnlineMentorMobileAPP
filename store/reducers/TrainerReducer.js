import produce from 'immer';
import { SET_TRAINER, TRAINER_INIT_DATA } from '../actionTypes/TrainerActionTypes';

const initialState = {
  trainer: []
};

export default (state = initialState, action) =>
  produce(state, draft => {
    /*eslint-disable indent */
    switch (action.type) {
      case SET_TRAINER:
        draft.trainer = action.payload;
        break;
      case TRAINER_INIT_DATA:
        return initialState;
    }
  });
