import React from 'react';
import Overlay from '../Overlay/Overlay';
import ActionPopoverView from './ActionPopoverView';

export default class ActionPopover extends Overlay {
  static ActionPopoverView = ActionPopoverView;

  static show(fromBounds, items, options = {}) {
    return super.show(
      <this.ActionPopoverView
        fromBounds={fromBounds}
        items={items}
        {...options}
      />,
    );
  }
}
