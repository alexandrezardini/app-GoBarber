import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { Form } from '@unform/mobile';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 50 : 40}px;
`;

export const FormContent = styled(Form)`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4e4e8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const BackBottom = styled.TouchableOpacity`
  margin-top: 40px;
`;
export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;
export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;
