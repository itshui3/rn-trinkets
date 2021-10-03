// external deps
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Injection } from './src/Injection';

export default function App() {

  return (
    <View style={styles.container}>
      <Injection
        styleProp={styles.injection}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingTop: 35
  },
  injection: {
    flex: 1
  }
});
