import produce from 'immer';
import { SET_GALLERY, RESET_GALLERY, GALLERY_INIT_DATA } from '../actionTypes/GalleryActionTypes';

const initialState = {
  userGallery: []
};

export default (state = initialState, action) =>
  produce(state, draft => {
    /*eslint-disable indent */
    switch (action.type) {
      case SET_GALLERY:
        draft.userGallery = action.payload;
        break;
      case RESET_GALLERY:
        return initialState;
      case GALLERY_INIT_DATA:
        return initialState;
    }
  });
