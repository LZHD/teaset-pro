import React from 'react';
import Overlay from '../Overlay/Overlay';
import OperationView from './OperationView';
import AlertView from './AlertView';

export default class Alert extends Overlay {
  static OperationView = OperationView;
  static AlertView = AlertView;

  static alert(title, message, confirmItem, cancelItem, options = {}) {
    return super.show(
      <this.AlertView
        confirmItem={confirmItem}
        cancelItem={cancelItem}
        title={title}
        message={message}
        {...options}
      />,
    );
  }

  static operation(items, cancelItem, options = {}) {
    return super.show(
      <this.OperationView items={items} cancelItem={cancelItem} {...options} />,
    );
  }

  static show(
    title,
    submit = () => {},
    content = null,
    cancel = () => {},
    option = {},
  ) {
    this.alert(
      title,
      content,
      {
        title: '确定',
        onPress: submit,
      },
      {
        title: '取消',
        onPress: cancel,
      },
      option,
    );
  }
}
