// external deps
import React from 'react';
import {
    FlatList,
    View,
    StyleProp,
    ViewStyle,
    Text,
    TouchableOpacity
} from 'react-native';

// global deps
import { TitleData } from '../../animations';
// local deps
import { DrawerStyles as styles } from './Drawer.style';

const renderAnimationTitle = (switchAnimation: (s: string) => void) => ({item}: {item: TitleData}) => {
    return (
        <TouchableOpacity
        style={styles.titleBtn}
        onPress={() => switchAnimation(item.title)}
        >
            <Text>{item.title}</Text>
        </TouchableOpacity>
    );
}

interface DrawerProps {
    styleProp?: StyleProp<ViewStyle>;
    animations: TitleData[];
    switchAnimation: (s: string) => void;
}
export const Drawer: React.FC<DrawerProps> = ({
    styleProp,
    animations,
    switchAnimation
}) => {
    
    return (
        <View style={[styleProp]}>
            <FlatList
                style={styles.titleList}
                data={animations}
                renderItem={renderAnimationTitle(switchAnimation)}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
