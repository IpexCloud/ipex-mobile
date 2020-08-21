import * as React from 'react'
import { View, StyleSheet, ImageURISource, TouchableHighlight } from 'react-native'

import { Avatar, Text, Button } from 'react-native-elements'

const contactListItemStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        backgroundColor: "#fff"
    },
    textContainer: {
        justifyContent: 'center',
        marginLeft: 18,
    },
    contactName: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 25,
    },

    activeStyle: {
        backgroundColor: "#F7F8FA",
        borderLeftColor: "#AFBF27",
        borderLeftWidth: 10,
    }
})

type ContactListItemProps = {
    name: string
    number: string
    avatarSource?: ImageURISource
    isActive?: boolean,
    ActionComponent?: React.ReactNode
    onPress?: () => void
}

const ContactListItem = ({ avatarSource, name, number, isActive, ActionComponent, onPress }: ContactListItemProps) => {
    return (
        <>
            <TouchableHighlight onPress={onPress}>
                <View style={[contactListItemStyles.container, isActive && contactListItemStyles.activeStyle].filter(Boolean)}>
                    <Avatar rounded size="medium" source={avatarSource || { uri: "https://w5insight.com/wp-content/uploads/2014/07/placeholder-user-400x400.png" }} />
                    <View style={contactListItemStyles.textContainer}>
                        <Text style={contactListItemStyles.contactName}>{name}</Text>
                        <Text>{number}</Text>
                    </View>
                </View>
            </TouchableHighlight>
            {isActive && ActionComponent && <View style={{
                flexDirection: "row",
                backgroundColor: "#F7F8FA",
                padding: 25
            }}>
                {ActionComponent}
            </View>}
        </>
    )
}

const contactListStyles = StyleSheet.create({
    container: {
    },
})

type ContactListProps = {
    children: React.ReactNode
}

const ContactList = ({ children }: ContactListProps) => {
    return <View style={contactListStyles.container}>{children}</View>
}

export { ContactList, ContactListItem }
