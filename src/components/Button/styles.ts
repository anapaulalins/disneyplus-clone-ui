import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  padding: 15px 0;
  background-color: #0072d2;
  align-items: center;
  border-radius: 3px;
  margin-top: 20px;
`;

export const TextButton = styled.Text`
  text-transform: uppercase;
  color: #e2e0da;
  font-weight: bold;
  letter-spacing: 1px;
`;
