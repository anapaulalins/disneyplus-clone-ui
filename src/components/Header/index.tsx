import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, ButtonBack, ImageHeader} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

import ImageDisney from '../../assets/disney.png';

const Header: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ButtonBack onPress={() => navigation.goBack()}>
        <Icon name="leftcircle" size={25} color="#fdfdfd" />
      </ButtonBack>

      <ImageHeader source={ImageDisney} />
    </Container>
  );
};

export default Header;
