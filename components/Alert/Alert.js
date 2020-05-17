import React from 'react';

import Overlay from '../Overlay/Overlay';
import OperationView from './OperationView';
import AlertView from "./AlertView";

export default class Alert extends Overlay {

  static OperationView = OperationView;
  static AlertView = AlertView

  static alert(confirmItem, cancelItem, options = {}) {
    return super.show(
        <this.AlertView confirmItem={confirmItem} cancelItem={cancelItem} {...options} />
    );
  }

  static operation(items, cancelItem, options = {}) {
    return super.show(
        <this.OperationView items={items} cancelItem={cancelItem} {...options} />
    );
  }

}
