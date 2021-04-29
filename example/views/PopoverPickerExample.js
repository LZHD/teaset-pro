import React from 'react';
import { View, ScrollView } from 'react-native';
import { NavigationPage, ListRow, PopoverPicker } from 'teaset-pro';

export default class PopoverPickerExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'PopoverPicker',
  };

  constructor(props) {
    super(props);
    this.items = [
      "Aged Pu'er",
      'Bohea',
      'Chrysanthemum',
      'Hyson',
      'Jasmine',
      'Keemun',
      'Loungjing',
      'Pekoe',
      'Tieguanyin',
    ];
    Object.assign(this.state, {
      selectedIndex: null,
      modalSelectedIndex: null,
    });
    this.defaultRow = null;
    this.modalRow = null;
  }

  show(view) {
    view.measure((x, y, width, height, pageX, pageY) => {
      PopoverPicker.show(
        { x: pageX, y: pageY, width, height },
        this.items,
        this.state.selectedIndex,
        (item, index) => this.setState({ selectedIndex: index }),
      );
    });
  }

  showModal(view) {
    view.measure((x, y, width, height, pageX, pageY) => {
      PopoverPicker.show(
        { x: pageX, y: pageY, width, height },
        this.items,
        this.state.modalSelectedIndex,
        (item, index) => this.setState({ modalSelectedIndex: index }),
        { modal: true },
      );
    });
  }

  renderPage() {
    let { selectedIndex, modalSelectedIndex } = this.state;
    let selected =
      selectedIndex || selectedIndex === 0 ? this.items[selectedIndex] : null;
    let modalSelected =
      modalSelectedIndex || modalSelectedIndex === 0
        ? this.items[modalSelectedIndex]
        : null;
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 20 }} />
        <ListRow
          title="Default"
          detail={selected}
          ref={list => (this.defaultRow = list)}
          onPress={() => this.show(this.defaultRow)}
          topSeparator="full"
        />
        <ListRow
          title="Modal"
          detail={modalSelected}
          ref={list => (this.modalRow = list)}
          onPress={() => this.showModal(this.modalRow)}
          bottomSeparator="full"
        />
      </ScrollView>
    );
  }
}
