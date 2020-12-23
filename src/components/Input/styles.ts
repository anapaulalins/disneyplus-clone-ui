import styled, {css} from 'styled-components/native';
import IconEye from 'react-native-vector-icons/MaterialCommunityIcons';
interface PropsInput {
  onFoused: boolean;
}

export const Container = styled.View<PropsInput>`
  background-color: #31333f;
  width: 100%;
  border-radius: 4px;
  padding: 0 10px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #31333f;
  height: 58px;

  ${(props) =>
    props.onFoused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: #6f6f76;
      padding-top: 12px;
    `}
`;

export const TextInput = styled.TextInput`
  width: 100%;
  color: #f4f5f5;
  flex: 1;
`;

export const LabelInput = styled.Text`
  position: absolute;
  color: #8f9197;
  margin-left: 15px;
`;

export const Icon = styled(IconEye)`
  position: absolute;
  right: 10px;
`;
