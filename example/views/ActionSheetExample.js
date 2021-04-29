import React from 'react';
import { View, ScrollView } from 'react-native';
import { NavigationPage, ListRow, ActionSheet, Toast } from 'teaset-pro';

export default class ActionSheetExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'ActionSheet',
  };

  show(modal) {
    const items = [
      { title: 'Say hello', onPress: () => Toast.message('Hello') },
      { title: 'Do nothing' },
      { title: 'Disabled', disabled: true },
    ];
    const cancelItem = { title: 'Cancel' };
    ActionSheet.show(items, cancelItem, { modal });
  }

  renderPage() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 20 }} />
        <ListRow
          title="Default"
          onPress={() => this.show(false)}
          topSeparator="full"
        />
        <ListRow
          title="Modal"
          onPress={() => this.show(true)}
          bottomSeparator="full"
        />
      </ScrollView>
    );
  }
}
