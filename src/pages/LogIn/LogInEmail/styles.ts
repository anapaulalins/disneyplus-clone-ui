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

export const SingUpArea = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

export const SingUpAreaText = styled.Text`
  color: #a5a6aa;
`;

export const SingUpAreaButton = styled.TouchableOpacity`
  margin-left: 3px;
`;
export const SingUpAreaTextButton = styled.Text`
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
`;
