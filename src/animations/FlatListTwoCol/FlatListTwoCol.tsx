// external deps
import React from 'react';
import { FlatList, View, Text } from 'react-native';

interface Item {
    id: string;
    text: string;
    color: string;
}

const data = [
    { id: '1', text: 'hello', color: 'green' },
    { id: '2', text: 'world', color: 'blue' }
];

const renderItem = ({item}: {item: Item}) => {
    return (
        <View
            style={{
                height: 200,
                backgroundColor: item.color,
                width: 100
            }}
        >
            <Text>{item.text}</Text>
        </View>
    );
}

const Component = () => {
    return (
        <FlatList
            style={{
                flexDirection: 'row',
                // width: '100%'
            }}
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    );
}

export const FlatListTwoCol = {
    component: Component,
    title: 'flatListTwoCol'
}
