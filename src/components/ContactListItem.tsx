import * as React from 'react'
import { View, StyleSheet, ImageURISource, TouchableHighlight } from 'react-native'

import { Avatar, Text } from 'react-native-elements'

const contactListItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    justifyContent: 'center',
    marginLeft: 20,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 26,
  },
  activeStyle: {
    backgroundColor: '#f2f5f7',
  },
  actionTools: {
    flexDirection: 'row',
    backgroundColor: '#f2f5f7',
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1,
    padding: 15,
  },
})

type ContactListItemProps = {
  name: string
  number: string
  avatarSource?: ImageURISource
  isActive?: boolean
  ActionTools?: React.ReactNode
  onPress?: () => void
}

const ContactListItem = ({
  avatarSource,
  name,
  number,
  isActive,
  ActionTools,
  onPress,
}: ContactListItemProps) => {
  return (
    <>
      <TouchableHighlight onPress={onPress}>
        <View
          style={[
            contactListItemStyles.container,
            isActive && contactListItemStyles.activeStyle,
          ].filter(Boolean)}
        >
          <Avatar
            rounded
            size="medium"
            source={
              avatarSource || {
                uri:
                  'https://w5insight.com/wp-content/uploads/2014/07/placeholder-user-400x400.png',
              }
            }
          />
          <View style={contactListItemStyles.textContainer}>
            <Text style={contactListItemStyles.contactName}>{name}</Text>
            <Text>{number}</Text>
          </View>
        </View>
      </TouchableHighlight>
      {isActive && ActionTools && (
        <View style={contactListItemStyles.actionTools}>{ActionTools}</View>
      )}
    </>
  )
}

export default ContactListItem
