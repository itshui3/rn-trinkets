// external deps
import React from 'react';
import { View, Text } from 'react-native';

const Component = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                padding: 8
            }}
        >
            <View
                style={{
                    width: 187,
                    height: 200,
                    backgroundColor: 'blue'
                }}
            />
            <View
                style={{
                    width: 187,
                    height: 200,
                    backgroundColor: 'green'
                }}
            />
        </View>
    );
}

export const ViewTwoCol = {
    component: Component,
    title: 'viewTwoCol'
}
