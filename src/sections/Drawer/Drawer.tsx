// external deps
import React from 'react';
import {
    View,
    StyleProp,
    ViewStyle
} from 'react-native';

interface DrawerProps {
    styleProp?: StyleProp<ViewStyle>;
    animations: string[];
}
export const Drawer: React.FC<DrawerProps> = ({
    styleProp,
    animations
}) => {
    console.log('animations: ', animations);
    return (
        <View style={[styleProp]}>
            {/* row list of animations */}
        </View>
    );
}
