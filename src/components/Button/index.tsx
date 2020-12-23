import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';
import {Container, TextButton} from './styles';

interface PropsButton extends RectButtonProperties {}

const Button: React.FC<PropsButton> = ({children, ...props}) => {
  return (
    <Container {...props}>
      <TextButton>{children}</TextButton>
    </Container>
  );
};

export default Button;
