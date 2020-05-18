// MenuItem.js

'use strict';

import React, {Component} from "react";
import PropTypes from 'prop-types';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import Theme from '../../themes/Theme';

export default class MenuItem extends Component {

  static propTypes = {
    ...TouchableOpacity.propTypes,
    title: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]),
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.shape({uri: PropTypes.string}), PropTypes.number, PropTypes.oneOf(['none', 'empty'])]),
  };

  static defaultProps = {
    ...TouchableOpacity.defaultProps,
    icon: 'none',
  };

  buildStyle() {
    let {style} = this.props;
    style = [{
      backgroundColor: Theme.menuItemColor,
      paddingLeft: Theme.menuItemPaddingLeft,
      paddingRight: Theme.menuItemPaddingRight,
      paddingTop: Theme.menuItemPaddingTop,
      paddingBottom: Theme.menuItemPaddingBottom,
      borderColor: Theme.menuItemSeparatorColor,
      borderTopWidth: Theme.menuItemSeparatorWidth,
      flexDirection: 'row',
      alignItems: 'center',
    }].concat(style);
    return style;
  }

  renderIcon() {
    let {icon} = this.props;
    if (icon === 'none') icon = null;
    if (icon && !React.isValidElement(icon)) {
      let imageStyle = {
        width: Theme.menuItemIconWidth,
        height: Theme.menuItemIconHeight,
        tintColor: Theme.menuItemIconColor,
      };
      icon = (
        <View style={{paddingRight: Theme.menuItemIconPaddingRight}}>
          <Image style={imageStyle} source={icon === 'empty' ? null : icon} />
        </View>
      );
    }
    return icon;
  }

  renderTitle() {
    let {title} = this.props;
    if (typeof title === 'string' || typeof title === 'number') {
      let titleStyle = {
        color: Theme.menuItemTitleColor,
        fontSize: Theme.menuItemFontSize,
        overflow: 'hidden',
        flexGrow: 1,
        flexShrink: 1,
      };
      title = <Text style={titleStyle} numberOfLines={1}>{title}</Text>
    }
    return title;
  }

  render() {
    let {style, children, title, icon, ...others} = this.props;
    return (
      <TouchableOpacity style={this.buildStyle()} {...others}>
        {this.renderIcon()}
        {this.renderTitle()}
      </TouchableOpacity>
    );
  }
}
