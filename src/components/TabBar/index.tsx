import React, {useCallback} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import IconHome from 'react-native-vector-icons/Entypo';
import IconSearch from 'react-native-vector-icons/Feather';
import IconDownload from 'react-native-vector-icons/MaterialIcons';
import {Container, TabItem, AvatarUser} from './styles';

import Avatar from '../../assets/little-mermaid.png';

const TabBar: React.FC<BottomTabBarProps> = ({state, navigation}) => {
  const navigationScreen = useCallback(
    (screenName: string) => {
      navigation.navigate(screenName);
    },
    [navigation],
  );

  return (
    <Container>
      <TabItem onPress={() => navigationScreen('Home')}>
        <IconHome
          name="home"
          size={30}
          style={{opacity: state.index === 0 ? 1 : 0.5}}
          color="#fbf8ee"
        />
      </TabItem>
      <TabItem onPress={() => navigationScreen('Search')}>
        <IconSearch
          name="search"
          size={30}
          style={{opacity: state.index === 1 ? 1 : 0.5}}
          color="#fbf8ee"
        />
      </TabItem>
      <TabItem onPress={() => navigationScreen('Download')}>
        <IconDownload
          name="file-download"
          size={30}
          style={{opacity: state.index === 2 ? 1 : 0.5}}
          color="#fbf8ee"
        />
      </TabItem>
      <TabItem onPress={() => navigationScreen('Profile')}>
        <AvatarUser source={Avatar} />
      </TabItem>
    </Container>
  );
};

export default TabBar;
