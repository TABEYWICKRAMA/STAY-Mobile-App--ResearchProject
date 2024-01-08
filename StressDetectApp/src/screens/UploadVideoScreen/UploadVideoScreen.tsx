import React from 'react';
import DashboardContent from './UploadVideoScreenContent';
import UploadVideoScreenContent from './UploadVideoScreenContent';

export interface Props {
  activeIndex: number;
}

interface State {}

export class UploadVideoScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    console.log('-------------->>>>>>>> Dashboard Screen init');
    return <UploadVideoScreenContent />;
  }
}
