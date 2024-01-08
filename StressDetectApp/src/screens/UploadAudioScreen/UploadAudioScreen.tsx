import React from 'react';
import DashboardContent from './UploadAudioScreenContent';
import UploadAudioScreenContent from './UploadAudioScreenContent';

export interface Props {
  activeIndex: number;
}

interface State {}

export class UploadAudioScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    console.log('-------------->>>>>>>> Dashboard Screen init');
    return <UploadAudioScreenContent />;
  }
}
