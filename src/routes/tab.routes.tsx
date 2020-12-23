import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabBar from '../components/TabBar';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Download from '../pages/DownloadPage';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Download" component={Download} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default TabRoutes;
