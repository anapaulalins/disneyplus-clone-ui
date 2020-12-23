import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #1b1d2a;
`;

export const ImageSubscribe = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
`;

export const ContainerSingUp = styled.View`
  position: absolute;
  bottom: 100px;
  width: 90%;
  align-items: center;
`;

export const TextContainer = styled.View`
  margin-top: 10px;
  width: 80%;
`;

export const TextSubscribe = styled.Text`
  color: #86878c;
  font-size: 12px;
  text-align: center;
`;

export const ButtonSingIn = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px 0;
  align-items: center;
  border-top-width: 1px;
  border-top-color: #40424d;
`;

export const TextButtonSing = styled.Text`
  text-transform: uppercase;
  color: #e2e0da;
  font-weight: bold;
  letter-spacing: 1px;
`;
