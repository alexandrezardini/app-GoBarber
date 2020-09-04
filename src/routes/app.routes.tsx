import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
    initialRouteName="SignIn"
  >
    <App.Screen name="Dashboard" component={Dashboard} />
  </App.Navigator>
);

export default AuthRoutes;
