import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1a1c29;
  padding: 22px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 15px;
  letter-spacing: 1px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 10px;
  width: 155px;
  align-items: center;
`;

export const ForgotPasswordButtonText = styled.Text`
  color: #71aada;
`;
