import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {DashoardScreen} from '../../screens/DashoardScreen/DashoardScreen';

import {SplashScreen} from '../../screens/SplashScreen';
import {UploadVideoScreen} from '../../screens/UploadVideoScreen';
import {UploadAudioScreen} from '../../screens/UploadAudioScreen';

export const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="DashoardScreen"
        component={DashoardScreen}
        options={{title: 'Greeting', headerShown: false}}
      />

      <Stack.Screen
        name="UploadVideoScreen"
        component={UploadVideoScreen}
        options={{title: 'Package Item', headerShown: false}}
      />
      <Stack.Screen
        name="UploadAudioScreen"
        component={UploadAudioScreen}
        options={{title: 'UploadAudioScreen', headerShown: false}}
      />
    </Stack.Navigator>
  );
};
