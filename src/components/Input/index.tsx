import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import {Container, TextInput, LabelInput, Icon} from './styles';

interface InputProps extends TextInputProps {
  textName: string;
  icon?: string;
}

const Input: React.FC<InputProps> = ({textName, icon, ...props}) => {
  const [onFoused, setOnFoused] = useState(false);

  return (
    <Container onFoused={onFoused}>
      {onFoused ? (
        <LabelInput style={{fontSize: 12, top: 5}}>{textName}</LabelInput>
      ) : (
        <LabelInput>{textName}</LabelInput>
      )}
      <TextInput
        onFocus={() => setOnFoused(true)}
        onBlur={() => setOnFoused(false)}
        {...props}
      />
      <Icon name={icon} size={27} color="#c9cacc" />
    </Container>
  );
};

export default Input;
