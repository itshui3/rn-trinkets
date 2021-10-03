// external deps
import React from 'react';
import {
    View,
    Animated,
    StyleProp,
    ViewStyle
} from 'react-native';

interface SwivelProps {
    styleProp?: StyleProp<ViewStyle>;
}
const Component: React.FC<SwivelProps> = ({
    styleProp
}) => {

    return (
        <View style={[styleProp]}>
        </View>
    );
}

export const Swivel = {
    SwivelFC: Component,
    SwivelTitle: 'swivel'
}