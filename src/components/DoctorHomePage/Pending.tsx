import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../styles';

export function Pending() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pendente</Text>
    </View>
  );
}