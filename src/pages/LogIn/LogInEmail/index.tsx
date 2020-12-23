import React from 'react';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  Container,
  SingUpArea,
  SingUpAreaButton,
  SingUpAreaText,
  Title,
  SingUpAreaTextButton,
} from './styles';
import Button from '../../../components/Button';

const LoginEmail: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{flex: 1}}>
      <Container>
        <Header />
        <Title>Log in with your email</Title>
        <Input
          textName="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="send"
          selectionColor="#1a8b98"
        />
        <Button onPress={() => navigation.navigate('LoginPassword')}>
          continue
        </Button>
        <SingUpArea>
          <SingUpAreaText>New to Disney+?</SingUpAreaText>
          <SingUpAreaButton>
            <SingUpAreaTextButton>sing up</SingUpAreaTextButton>
          </SingUpAreaButton>
        </SingUpArea>
      </Container>
    </ScrollView>
  );
};

export default LoginEmail;
