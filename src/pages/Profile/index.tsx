import React from 'react';
import { View, Text, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

const Profile: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
