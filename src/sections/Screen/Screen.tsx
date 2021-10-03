// external deps
import React from 'react';
import {
    View,
    StyleProp,
    ViewStyle
} from 'react-native';

// animation components
// ...

interface ScreenProps {
    styleProp?: StyleProp<ViewStyle>;
}
export const Screen: React.FC<ScreenProps> = ({
    styleProp
}) => {
    return (
        <View style={[styleProp]}>
            {/* render animation content */}
        </View>
    );
}
