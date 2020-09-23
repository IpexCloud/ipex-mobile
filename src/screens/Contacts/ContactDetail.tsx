import * as React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
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

  const PhoneNumber = ({
    detail,
  }: {
    detail: { type: 'ip' | 'pev' | 'mob' | 'fax'; number: string }
  }) => (
    <TouchableWithoutFeedback
      onPress={() => props.navigation.navigate('Dialpad', { number: detail.number })}
    >
      <View style={styles.listItem} key={detail.number}>
        <View>
          <Text weight="regular" size="xsmall">
            {phoneTypesMap[detail.type]}
          </Text>
          <Text weight="light" style={styles.number}>
            {detail.number}
          </Text>
        </View>
        <Icon name="call" size={layout.font.large} color={colors.gray300} />
      </View>
    </TouchableWithoutFeedback>
  )

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
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
          {contact.phoneNumbers.map((phoneNumber) => (
            <PhoneNumber detail={phoneNumber} key={phoneNumber.number} />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: layout.font.xlarge * 2,
  },
  scroll: {
    alignItems: 'center',
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
