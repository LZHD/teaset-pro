import React from 'react';
import { View, ScrollView } from 'react-native';
import { Theme, NavigationPage, ListRow, PullPicker } from 'teaset-pro';

export default class ThemeExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Theme',
  };

  changeTheme() {
    PullPicker.show('Select theme', Object.keys(Theme.themes), -1, item => {
      Theme.set(Theme.themes[item]);
      this.navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    });
  }

  renderPage() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 20 }} />
        <ListRow
          title="Select theme"
          onPress={() => this.changeTheme()}
          topSeparator="full"
          bottomSeparator="full"
        />
      </ScrollView>
    );
  }
}
