import React from 'react';
import { View } from 'react-native';
import { NavigationPage, ActionPopover, Button, Toast } from 'teaset-pro';

export default class ActionPopoverExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'ActionPopover',
  };

  constructor(props) {
    super(props);
    this.apButton = null;
  }

  show(view) {
    view.measure((x, y, width, height, pageX, pageY) => {
      const items = [
        { title: 'Copy', onPress: () => Toast.message('Copy') },
        { title: 'Remove', onPress: () => Toast.message('Remove') },
        { title: 'Share', onPress: () => Toast.message('Share') },
      ];
      ActionPopover.show({ x: pageX, y: pageY, width, height }, items);
    });
  }

  renderPage() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title="Show"
          ref={btn => (this.apButton = btn)}
          onPress={() => this.show(this.apButton)}
        />
      </View>
    );
  }
}
