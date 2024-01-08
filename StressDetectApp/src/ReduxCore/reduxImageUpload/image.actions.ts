import UploadService from '../../data/rest/services/upload.service';
import {AppThunk} from '../configureStore';
import {ActionTypes} from './actionTypeEnums';

//post Stress Video
export const uploadVideo =
  (file: any): AppThunk =>
  async dispatch => {
    console.log('Video post dispatched ...!', file);
    return UploadService.uploadVideo(file).then(
      response => {
        dispatch({
          type: ActionTypes.POST_VIDEO,
          payload: {stressVideo: response.data.response},
        });
        console.log('Video post Successfully ==>>>', response.data.response);
        return Promise.resolve(response);
      },
      error => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        dispatch({
          type: ActionTypes.POST_VIDEO_FAILED,
        });
        console.log('Video post FAILED------->>>>>' + message + ' ====');
        return Promise.reject(message);
      },
    );
  };

//post Stress Audio
export const uploadAudio =
  (file: any): AppThunk =>
  async dispatch => {
    return UploadService.uploadAudio(file).then(
      response => {
        dispatch({
          type: ActionTypes.POST_AUDIO,
          payload: {stressAudio: response.data.response},
        });
        console.log('Audio post Successfully ===>>>', response.data.response);
        return Promise.resolve(response);
      },
      error => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        dispatch({
          type: ActionTypes.POST_AUDIO_FAILED,
        });
        console.log('Audio post FAILED------->>>>>' + message + ' ====');
        return Promise.reject(message);
      },
    );
  };
