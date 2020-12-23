import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Loading from '../pages/Loading';
import Subscribe from '../pages/Subscribe';
import LoginEmail from '../pages/LogIn/LogInEmail';
import LoginPassword from '../pages/LogIn/LogInPassword';
import TabRoutes from './tab.routes';

const Route = createStackNavigator();

const Routes: React.FC = () => (
  <Route.Navigator
    initialRouteName="Loading"
    screenOptions={{
      headerShown: false,
    }}>
    <Route.Screen name="Loading" component={Loading} />
    <Route.Screen name="Subscribe" component={Subscribe} />
    <Route.Screen name="LoginEmail" component={LoginEmail} />
    <Route.Screen name="LoginPassword" component={LoginPassword} />
    <Route.Screen name="TabRoutes" component={TabRoutes} />
  </Route.Navigator>
);

export default Routes;
