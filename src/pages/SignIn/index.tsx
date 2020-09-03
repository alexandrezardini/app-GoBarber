import React from 'react';
import { Image } from 'react-native';
import { Container, Title } from './styles';
import logo from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logo} />
      <Title>Faça seu Logon</Title>
    </Container>
  );
};

export default SignIn;
