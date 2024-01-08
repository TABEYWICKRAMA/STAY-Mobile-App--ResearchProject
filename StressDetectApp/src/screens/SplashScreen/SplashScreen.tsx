import React from 'react';
import {View, Image} from 'react-native';
import styles from './Splash.styles';
import SplashContent from './SplashContent';
export interface Props {}

interface State {}
export class SplashScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    console.log('-------------->>>>>>>> Splash Screen init');
    return (
      <View style={styles.home}>
        <SplashContent />
      </View>
    );
  }
}
