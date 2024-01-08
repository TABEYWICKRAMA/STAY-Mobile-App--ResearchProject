import axiosInstance from '../api_service_provider';
import {endPoints} from '../end_points';

// upload Voice
const uploadAudio = async (file: any) => {
  let formData: any = new FormData();
  formData.append('filePath', file);

  const response = await axiosInstance.post(endPoints.AUDIO_UPLOAD, formData, {
    headers: {
      'Content-Type': `multipart/form-data`,
    },
  });
  return response;
};

// upload Video
const uploadVideo = async (file: any) => {
  let formData = new FormData();
  formData.append('filePath', file);

  const response = await axiosInstance.post(endPoints.VIDEO_UPLOAD, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      // Accept: '*/*',
    },
  });
  return response;
};

const UploadService = {
  uploadAudio,
  uploadVideo,
};
export default UploadService;
