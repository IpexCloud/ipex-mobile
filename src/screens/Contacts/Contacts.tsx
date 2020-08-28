import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, FlatList } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { CompositeNavigationProp } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import { ContactListItem } from '../../components'
import { SearchBar, ScreenTitle, Loader, Appbar } from '../../components/common'
import useContacts from './useContacts'
import { Contact } from '../../services'
import { ContactsNavigatorParamList } from '../../navigation/tabs/TabsNavigator'
import colors from '../../constants/colors'
import { DrawerParamList } from '../../navigation/drawer/DrawerNavigator'
import { TabsNavigatorParamList } from '../../navigation/tabs/TabsNavigator'

type Props = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ContactsNavigatorParamList, 'ContactsList'>,
    CompositeNavigationProp<
      BottomTabNavigationProp<TabsNavigatorParamList, 'Contacts'>,
      DrawerNavigationProp<DrawerParamList>
    >
  >
}

const Contacts = (props: Props) => {
  const { operations, models } = useContacts()

  const renderContact = ({ item: contact }: { item: Contact }) => (
    <ContactListItem
      key={contact.id}
      firstName={contact.firstName}
      lastName={contact.lastName}
      onPress={() => props.navigation.navigate('ContactDetail', contact)}
    />
  )

  return (
    <>
      <Appbar {...props} />
      <TouchableWithoutFeedback onPress={operations.handleContainerPress}>
        <View style={styles.container}>
          <ScreenTitle text="Kontakty" />
          {models.contacts.loading ? (
            <Loader />
          ) : (
            <>
              <SearchBar
                placeholder="Vyhledat kontakt..."
                value={models.searchText}
                onChangeText={operations.handleSearchTextChange}
              />

              <FlatList
                data={models.contacts.data}
                renderItem={renderContact}
                keyExtractor={(contact) => contact.id.toString()}
              />
            </>
          )}
        </View>
      </TouchableWithoutFeedback>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
})

export default Contacts
