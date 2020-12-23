import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import {
  Container,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
  Title,
} from './styles';

const LoginPassword: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{flex: 1}}>
      <Container>
        <Header />
        <Title>Enter your password</Title>

        <Input
          icon="eye-off"
          textName="Password"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="send"
          selectionColor="#1a8b98"
        />

        <Button onPress={() => navigation.navigate('TabRoutes')}>log in</Button>

        <ForgotPasswordButton>
          <ForgotPasswordButtonText>Forgot Password?</ForgotPasswordButtonText>
        </ForgotPasswordButton>
      </Container>
    </ScrollView>
  );
};

export default LoginPassword;
