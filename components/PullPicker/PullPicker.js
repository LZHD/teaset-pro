import React from 'react';
import Overlay from '../Overlay/Overlay';
import PullPickerView from './PullPickerView';

export default class PullPicker extends Overlay {
  static PullPickerView = PullPickerView;

  // items: array of string
  static show(title, items, selectedIndex, onSelected, options = {}) {
    return super.show(
      <this.PullPickerView
        title={title}
        items={items}
        selectedIndex={selectedIndex}
        onSelected={onSelected}
        {...options}
      />,
    );
  }
}
