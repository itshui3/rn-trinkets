// external deps
import React from 'react';
import {
    View,
    Animated,
    StyleProp,
    ViewStyle,
    Text,
    TouchableOpacity,
    useWindowDimensions
} from 'react-native';

import { SwivelStyles as styles } from './Swivel.style';
interface SwivelProps {
    styleProp?: StyleProp<ViewStyle>;
}
const Component: React.FC<SwivelProps> = ({
    styleProp
}) => {
    const { width, height } = useWindowDimensions();

    return (
        <View style={[styleProp, styles.container]}>
            <TouchableOpacity style={[styles.swivel]} />
            <TouchableOpacity style={[styles.block, styles.a]} />
            <TouchableOpacity style={[styles.block, styles.b]} />
            <TouchableOpacity style={[styles.block, styles.c]} />
            <TouchableOpacity style={[styles.block, styles.d]} />
        </View>
    );
}

export const Swivel = {
    SwivelFC: Component,
    SwivelTitle: 'swivel'
}