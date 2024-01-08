import {AnyAction} from 'redux';
import {ImageObject} from '../../data/common_models/ImageModel';
import {ActionTypes} from './actionTypeEnums';

export interface IBrokerState {
  stressVideo: string;
  stressVideoOb: ImageObject;
  isstressAudioUploaded: boolean;
  stressAudio: string;
  stressAudioOb: ImageObject;
  isstressVideoUploaded: boolean;
}

export const initState: IBrokerState = {
  stressVideo: '',
  stressVideoOb: {},
  isstressAudioUploaded: false,
  stressAudio: '',
  stressAudioOb: {},
  isstressVideoUploaded: false,
};
export const imageReducer = (
  state: IBrokerState = initState,
  action: AnyAction,
) => {
  const {type, payload} = action;
  switch (type) {
    case ActionTypes.POST_VIDEO: {
      return {
        ...state,
        stressVideo: payload.stressVideo,
      };
    }

    case ActionTypes.POST_VIDEO_FAILED: {
      return {
        ...state,
      };
    }

    case ActionTypes.POST_AUDIO: {
      return {
        ...state,
        stressAudio: payload.stressAudio,
      };
    }
    case ActionTypes.POST_AUDIO_FAILED: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default imageReducer;
