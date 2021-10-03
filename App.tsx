// external deps
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Injection } from './src/Injection';

export default function App() {

  return (
    <View style={styles.container}>
      <Injection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  }
});
