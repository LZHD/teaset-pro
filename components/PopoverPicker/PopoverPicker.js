import React from 'react';
import Overlay from '../Overlay/Overlay';
import PopoverPickerView from './PopoverPickerView';

export default class PopoverPicker extends Overlay {
  static PopoverPickerView = PopoverPickerView;

  // fromBounds shape: x, y, width, height
  // items: array of string
  static show(fromBounds, items, selectedIndex, onSelected, options = {}) {
    return super.show(
      <this.PopoverPickerView
        fromBounds={fromBounds}
        items={items}
        selectedIndex={selectedIndex}
        onSelected={onSelected}
        {...options}
      />,
    );
  }
}
