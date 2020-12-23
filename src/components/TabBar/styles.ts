import styled from 'styled-components/native';

export const Container = styled.View`
  height: 60px;
  background-color: #1a1c29;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-top-width: 1px;
  border-top-color: #2e2f3b;
`;

export const TabItem = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px 15px;
`;

export const AvatarUser = styled.Image`
  width: 33px;
  height: 33px;
  border-radius: 16px;
  border-width: 1px;
  border-color: #f1f1f2;
`;
