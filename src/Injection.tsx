// external deps
import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    StyleProp,
    ViewStyle,
    Text
} from 'react-native';

import { Screen, Drawer } from './sections';
import { animations, animationsTitleData } from './animations';

const Blank: React.FC = () => <View />;

interface InjectionProps {
    styleProp?: StyleProp<ViewStyle>;
}
export const Injection: React.FC<InjectionProps> = ({
    styleProp
}) => {
    const [currentAnimation, setCurrentAnimation] = useState('');
    const handleSwitchAnimation = (title: keyof typeof animations & string) => {
        setCurrentAnimation(title);
    }

    const animation = currentAnimation ? animations[currentAnimation] : Blank;
    return (
        <View style={[styleProp]}>
            <Screen
            Animation={animation}
            styleProp={styles.screen}
            />

            <Drawer
            animations={animationsTitleData}
            styleProp={styles.drawer}
            switchAnimation={handleSwitchAnimation}
            />

        </ View>
    )
}

const styles = StyleSheet.create({
    screen: {
      flex: 0.8
    },
    drawer: {
      flex: 0.2,
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    }
  });
  