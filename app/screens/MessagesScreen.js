import React, { useState } from 'react';
import { FlatList, View } from 'react-native'


import Screen from '../components/Screen';
import { ListItem, ListItemDeleteAction, ListItemSeperator } from '../components/lists'

const initialMessages= [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    }
]

function MessagesScreen({children}) {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = message  => { 
        setMessages(messages.filter(m => m.id !== message.id))
    }

    return (
        <Screen>
            <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) => (
            <ListItem
                title={item.title}
                subTitle={item.description}
                image={item.image} 
                onPress={() => console.log('ok' , item)}
                renderRightActions={ () => (
                    <ListItemDeleteAction onPress={() => handleDelete(item)} />
                )} 
                    
                />
            )}
                ItemSeparatorComponent= {ListItemSeperator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/mosh.jpg')
                        }
                    ])
                }}
            />
        </Screen>
    );
}
           


export default MessagesScreen;