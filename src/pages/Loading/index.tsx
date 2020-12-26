import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Logo} from './styles';
import {useNavigation} from '@react-navigation/native';
import LogoImage from '../../assets/disney.png';

const Loading: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Subscribe');
    }, 1500);
  }, [navigation]);

  return (
    <>
      <LinearGradient
        colors={['#121f54', '#10194a', '#182d70', '#074a9e']}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Logo source={LogoImage} resizeMode="contain" />
      </LinearGradient>
    </>
  );
};

export default Loading;
