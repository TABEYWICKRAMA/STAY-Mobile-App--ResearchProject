import {combineReducers} from 'redux';
import imageReducer from './reduxImageUpload/image.reducer';

export const rootReducer = combineReducers({
  imageReduser: imageReducer,
});
