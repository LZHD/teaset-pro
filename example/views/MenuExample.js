import React from 'react';
import { View } from 'react-native';
import { NavigationPage, Menu, Button, Theme, Toast } from 'teaset-pro';

export default class MenuExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Menu',
  };

  constructor(props) {
    super(props);
    this.btn1 = null;
    this.btn2 = null;
    this.btn3 = null;
    this.btn4 = null;
    this.btn5 = null;
    this.btn6 = null;
  }

  show(view, align) {
    view.measure((x, y, width, height, pageX, pageY) => {
      let items = [
        {
          title: 'Search',
          icon: require('../icons/search.png'),
          onPress: () => Toast.message('Search'),
        },
        {
          title: 'Edit',
          icon: require('../icons/edit.png'),
          onPress: () => Toast.message('Edit'),
        },
        {
          title: 'Remove',
          icon: require('../icons/trash.png'),
          onPress: () => Toast.message('Remove'),
        },
      ];
      Menu.show({ x: pageX, y: pageY, width, height }, items, { align });
    });
  }

  renderPage() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View
          style={{
            height: 60,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Button
            title="Start"
            ref={btn => (this.btn1 = btn)}
            onPress={() => this.show(this.btn1, 'start')}
          />
          <Button
            title="Center"
            ref={btn => (this.btn2 = btn)}
            onPress={() => this.show(this.btn2, 'center')}
          />
          <Button
            title="End"
            ref={btn => (this.btn3 = btn)}
            onPress={() => this.show(this.btn3, 'end')}
          />
        </View>
        <View style={{ flex: 1 }} />
        <View
          style={{
            height: 60,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Button
            title="Start"
            ref={btn => (this.btn4 = btn)}
            onPress={() => this.show(this.btn4, 'start')}
          />
          <Button
            title="Center"
            ref={btn => (this.btn5 = btn)}
            onPress={() => this.show(this.btn5, 'center')}
          />
          <Button
            title="End"
            ref={btn => (this.btn6 = btn)}
            onPress={() => this.show(this.btn6, 'end')}
          />
        </View>
        <View style={{ height: Theme.screenInset.bottom }} />
      </View>
    );
  }
}
