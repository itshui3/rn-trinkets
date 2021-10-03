// external deps
import React from 'react';
import {
    View,
    Animated,
    StyleProp,
    ViewStyle,
    Text
} from 'react-native';

import { SwivelStyles as styles } from './Swivel.style';
interface SwivelProps {
    styleProp?: StyleProp<ViewStyle>;
}
const Component: React.FC<SwivelProps> = ({
    styleProp
}) => {

    return (
        <View style={[styleProp, styles.container]}>
            <Text>Swivel</Text>
        </View>
    );
}

export const Swivel = {
    SwivelFC: Component,
    SwivelTitle: 'swivel'
}