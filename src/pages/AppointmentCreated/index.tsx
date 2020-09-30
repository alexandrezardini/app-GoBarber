import React from 'react';
import { View, Text, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

const AppointmentCreated: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>Appointment Created</Text>
    </View>
  );
};

export default AppointmentCreated;
