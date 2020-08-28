import * as React from 'react'
import { View, StyleSheet, ImageURISource, TouchableHighlight } from 'react-native'

import { Avatar } from 'react-native-elements'
import { Text } from './common'
import colors from '../constants/colors'

const contactListItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomColor: colors.gray200,
    borderBottomWidth: 1,
    backgroundColor: colors.background,
  },
  textContainer: {
    justifyContent: 'center',
    marginLeft: 20,
  },
  contactName: {
    lineHeight: 26,
  },
})

type ContactListItemProps = {
  firstName: string
  lastName: string
  avatarSource?: ImageURISource
  onPress?: () => void
}

const ContactListItem = ({ avatarSource, firstName, lastName, onPress }: ContactListItemProps) => {
  return (
    <>
      <TouchableHighlight onPress={onPress}>
        <View style={contactListItemStyles.container}>
          <Avatar
            rounded
            size="medium"
            title={firstName[0].toUpperCase() + lastName[0].toUpperCase()}
            source={avatarSource}
          />
          <View style={contactListItemStyles.textContainer}>
            <Text style={contactListItemStyles.contactName} size="medium" weight={'light'}>
              {firstName} {lastName}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </>
  )
}

export default ContactListItem
