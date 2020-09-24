import React from 'react'
import { View, StyleSheet, ImageURISource, TouchableHighlight } from 'react-native'
import { Avatar } from 'react-native-elements'

import { Text } from './common'
import colors from '../constants/colors'
import { capitalizeFirstLetter } from '../lib/utils'

type ContactListItemProps = {
  firstName?: string
  lastName: string
  avatarSource?: ImageURISource
  onPress?: () => void
}

const ContactListItem = ({ avatarSource, firstName, lastName, onPress }: ContactListItemProps) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        <Avatar
          rounded
          size="medium"
          title={capitalizeFirstLetter(firstName) + capitalizeFirstLetter(lastName)}
          source={avatarSource}
        />
        <View style={styles.textContainer}>
          <Text style={styles.contactName} size="small" weight="regular">
            {firstName} {lastName}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
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

export default ContactListItem
