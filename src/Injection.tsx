// external deps
import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    StyleProp,
    ViewStyle
} from 'react-native';

import { Screen, Drawer } from './sections';
import { animations } from './animations';

const Blank: React.FC = () => <View />;

interface InjectionProps {
    styleProp?: StyleProp<ViewStyle>;
}
export const Injection: React.FC<InjectionProps> = ({
    styleProp
}) => {
    const [currentAnimation, setCurrentAnimation] = useState('');

    const animationTitles = Object.keys(animations);
    const animation = currentAnimation ? animations[currentAnimation] : Blank;
    return (
        <View style={[styleProp]}>
            <View style={styles.screen}>
                <Screen Animation={animation} />
            </View>
            <View style={styles.drawer}>
                <Drawer animations={animationTitles} />
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
  