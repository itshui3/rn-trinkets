// external deps
import React from 'react';
import {
    StyleSheet,
    View,
    StyleProp,
    ViewStyle
} from 'react-native';

import { Screen, Drawer } from './sections';

interface InjectionProps {
    styleProp?: StyleProp<ViewStyle>;
}
export const Injection: React.FC<InjectionProps> = ({
    styleProp
}) => {
    return (
        <View style={[styleProp]}>
            <View style={styles.screen}>
                <Screen />
            </View>
            <View style={styles.drawer}>
                <Drawer />
            </View>
        </ View>
    )
}

const styles = StyleSheet.create({
    screen: {
      flex: 0.8,
      paddingTop: 30
    },
    drawer: {
      flex: 0.2,
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    }
  });
  