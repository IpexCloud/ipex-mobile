import * as React from 'react'
import { View, StyleSheet, FlatList, TouchableHighlight } from 'react-native'
import { Avatar, Icon } from 'react-native-elements'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { ContactsNavigatorParamList } from '../../navigation/tabs/TabsNavigator'
import { Text } from '../../components/common'
import colors from '../../constants/colors'
import layout from '../../constants/layout'

type Props = {
  route: RouteProp<ContactsNavigatorParamList, 'ContactDetail'>
  navigation: StackNavigationProp<ContactsNavigatorParamList, 'ContactDetail'>
}

const phoneTypesMap = {
  ip: 'IP telefon',
  pev: 'Pevná linka',
  mob: 'Mobilní telefon',
  fax: 'Fax',
}

const ContactDetail = (props: Props) => {
  const contact = props.route.params

  const renderPhoneNumber = ({
    item,
  }: {
    item: { type: 'ip' | 'pev' | 'mob' | 'fax'; number: string }
  }) => (
    <TouchableHighlight
      onPress={() => props.navigation.navigate('Dialpad', { number: item.number })}
    >
      <View style={styles.listItem} key={item.number}>
        <View>
          <Text weight="regular" size="xsmall">
            {phoneTypesMap[item.type]}
          </Text>
          <Text weight="light" style={styles.number}>
            {item.number}
          </Text>
        </View>
        <Icon name="call" size={layout.font.large} color={colors.gray300} />
      </View>
    </TouchableHighlight>
  )

  return (
    <>
      <View style={styles.screen}>
        <Avatar
          rounded
          size="xlarge"
          title={contact.firstName[0].toUpperCase() + contact.lastName[0].toUpperCase()}
        />
        <View style={styles.textContainer}>
          <Text size="xlarge" weight="regular">
            {contact.firstName} {contact.lastName}
          </Text>
        </View>
        <View style={styles.list}>
          <FlatList
            data={contact.phoneNumbers}
            renderItem={renderPhoneNumber}
            keyExtractor={({ number }) => number}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    paddingTop: layout.font.large,
  },
  textContainer: {
    justifyContent: 'center',
    marginTop: layout.font.large,
  },
  list: {
    marginTop: layout.font.large,
    width: '95%',
  },
  listItem: {
    flexDirection: 'row',
    paddingVertical: layout.font.small,
    paddingHorizontal: layout.font.medium,
    borderBottomWidth: 0.5,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.gray300,
  },
  number: {
    marginTop: layout.font.xsmall,
  },
})

export default ContactDetail
