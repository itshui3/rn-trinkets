// external deps
import React from 'react';
import {
    View,
    StyleProp,
    ViewStyle,
    Text
} from 'react-native';

// animation components
// ...

interface ScreenProps {
    styleProp?: StyleProp<ViewStyle>;
    Animation: React.FC;
}
export const Screen: React.FC<ScreenProps> = ({
    styleProp,
    Animation
}) => {
    return (
        <View style={[styleProp]}>
            {/* render animation content */}
            <Animation />
            
        </View>
    );
}
