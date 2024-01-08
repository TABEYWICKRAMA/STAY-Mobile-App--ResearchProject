//current user and broker
import {createSelector} from 'reselect';
import {RootState} from '../configureStore';

const selectStress = (state: RootState) => state.imageReduser;

export const selectStressState = createSelector(
  [selectStress],
  stress => stress,
);

export const selectVideoStressState = createSelector(
  [selectStress],
  stress => stress.stressVideo,
);
export const selectAudioStressState = createSelector(
  [selectStress],
  stress => stress.stressAudio,
);
