import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './Navigations/RootNavigator/RootNavigator';
// import {configureAppStore} from './ReduxCore/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ToastProvider} from 'react-native-toast-notifications';
import {persistor, store} from './ReduxCore/configureStore';
import {LogBox} from 'react-native';


Icon.loadFont();
const App = () => {
  // const {store, persistor} = configureAppStore();
  // console.disableYellowBox = true;
  LogBox.ignoreAllLogs(true);
  return (
    // <ToastProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>{StackNavigation()}</NavigationContainer>
      </PersistGate>
    </Provider>
    // </ToastProvider>
  );
};

export default App;
