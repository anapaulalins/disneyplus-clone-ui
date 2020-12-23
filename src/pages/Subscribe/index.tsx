import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  ImageSubscribe,
  TextContainer,
  TextButtonSing,
  ButtonSingIn,
  TextSubscribe,
  ContainerSingUp,
} from './styles';

import ImageSub from '../../assets/primaryImage.jpg';
import Button from '../../components/Button';

const Subscribe: React.FC = () => {
  const navigation = useNavigation();

  const hadleSingIn = useCallback(() => {
    navigation.navigate('LoginEmail');
  }, [navigation]);

  return (
    <Container>
      <ImageSubscribe source={ImageSub} resizeMode="contain" />

      <ContainerSingUp>
        <Button>Sing Up</Button>

        <TextContainer>
          <TextSubscribe>
            Subscribe for R$27.90/month or save 16% when you sing up just for a
            year R$279.90/year.
          </TextSubscribe>
        </TextContainer>
      </ContainerSingUp>

      <ButtonSingIn onPress={hadleSingIn}>
        <TextButtonSing>Log in</TextButtonSing>
      </ButtonSingIn>
    </Container>
  );
};

export default Subscribe;
