import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <StatusBar
      barStyle="light-content"
      backgroundColor="rgba(0,0,0,0)"
      translucent
    />
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </>
);

export default App;
