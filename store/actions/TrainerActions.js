import {
  UPDATE_TRAINER,
  GET_TRAINER,
  SET_TRAINER,
  TRAINER_INIT_DATA
} from '../actionTypes/TrainerActionTypes';

export const updateTrainer = payload => ({
  type: UPDATE_TRAINER,
  payload
});

export const getTrainer = () => ({
  type: GET_TRAINER
});

export const setTrainer = payload => ({
  type: SET_TRAINER,
  payload
});

export const trainerInitialData = () => ({
  type: TRAINER_INIT_DATA
});
