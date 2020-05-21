import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Overlay from '../Overlay/Overlay';
import Theme from '../../themes/Theme';
import ActionSheetItem from '../ActionSheet/ActionSheetItem';

export default class OperationView extends Overlay.PopView {

  static propTypes = {
    ...Overlay.PopView.propTypes,
    items: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]).isRequired,
      onPress: PropTypes.func,
      disabled: PropTypes.bool,
    })),
    cancelItem: PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]).isRequired,
      onPress: PropTypes.func,
      disabled: PropTypes.bool,
    }),
  };

  static Item = ActionSheetItem;

  disappearCompleted() {
    super.disappearCompleted();
    this.pressItem && this.pressItem.onPress && this.pressItem.onPress();
  }

  onItemPress(item) {
    if (item && item.disabled) return;
    this.pressItem = item;
    this.close(false);
  }

  onCancelItemPress() {
    let { cancelItem } = this.props;
    if (cancelItem && cancelItem.disabled) return;
    this.pressItem = cancelItem;
    this.close(true);
  }

  buildStyle() {
    return super.buildStyle().concat({
      alignItems: 'center',
      justifyContent: 'center',
    });
  }

  renderContent() {
    let { items, cancelItem } = this.props;

    let list = [];
    for (let i = 0; items && i < items.length; ++i) {
      let item = items[i];
      list.push(
        <this.constructor.Item
          key={'item' + i}
          title={item.title}
          topSeparator={i === 0 ? 'none' : 'full'}
          disabled={item.disabled}
          onPress={() => this.onItemPress(item)}
        />
      );
    }
    if (cancelItem) {
      list.push(
        <this.constructor.Item
          key={'cancelItem'}
          type='cancel'
          title={cancelItem.title}
          topSeparator={<View style={{
            backgroundColor: Theme.asItemSeparatorColor,
            height: +Theme.asItemSeparatorLineWidth,
          }}/>}
          disabled={cancelItem.disabled}
          onPress={() => this.onCancelItemPress()}
        />
      );
    }

    return super.renderContent(
      <View style={{
        backgroundColor: Theme.defaultColor,
        minWidth: 245,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'stretch',
        overflow: 'hidden',
      }}>
        {list}
      </View>
    );
  }

}
