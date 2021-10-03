// external deps
import React from 'react';
import {
    View,
    StyleProp,
    ViewStyle
} from 'react-native';

interface DrawerProps {
    styleProp?: StyleProp<ViewStyle>;
}
export const Drawer: React.FC<DrawerProps> = ({
    styleProp
}) => {
    return (
        <View style={[styleProp]}>
            {/* row list of animations */}
        </View>
    );
}
