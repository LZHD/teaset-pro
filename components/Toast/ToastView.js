// ToastView.js

'use strict';

import React, {Component} from "react";
import PropTypes from 'prop-types';
import {View, Image, Text} from 'react-native';

import Theme from '../../themes/Theme';
import Overlay from '../Overlay/Overlay';

export default class ToastView extends Overlay.View {

  static propTypes = {
    ...Overlay.View.propTypes,
    text: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]),
    icon: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.shape({uri: PropTypes.string}), //{uri: 'http://...'}
      PropTypes.number, //require('path/to/image')
      PropTypes.oneOf(['none', 'success', 'fail', 'smile', 'sad', 'info', 'stop']),
    ]),
    position: PropTypes.oneOf(['top', 'bottom', 'center']),
  };

  static defaultProps = {
    ...Overlay.View.defaultProps,
    overlayOpacity: 0,
    overlayPointerEvents: 'none',
    closeOnHardwareBackPress: false,
    position: 'center',
  };

  get overlayPointerEvents() {
    let {overlayPointerEvents, modal} = this.props;
    return modal ? 'auto' : overlayPointerEvents;
  }

  buildStyle() {
    let {style, position} = this.props;
    style = [{
      paddingLeft: Theme.toastScreenPaddingLeft,
      paddingRight: Theme.toastScreenPaddingRight,
      paddingTop: Theme.toastScreenPaddingTop,
      paddingBottom: Theme.toastScreenPaddingBottom,
      justifyContent: position === 'top' ? 'flex-start' : (position === 'bottom' ? 'flex-end' : 'center'),
      alignItems: 'center',
    }].concat(super.buildStyle());
    return style;
  }

  renderIcon() {
    let {icon} = this.props;
    if (!icon && icon !== 0) return null;

    let image;
    if (!React.isValidElement(icon)) {
      let imageSource;
      if (typeof icon === 'string') {
        switch (icon) {
          case 'success': imageSource = require('../../icons/success.png'); break;
          case 'fail': imageSource = require('../../icons/fail.png'); break;
          case 'smile': imageSource = require('../../icons/smile.png'); break;
          case 'sad': imageSource = require('../../icons/sad.png'); break;
          case 'info': imageSource = require('../../icons/info.png'); break;
          case 'stop': imageSource = require('../../icons/stop.png'); break;
          default: imageSource = null; break;
        }
      } else {
        imageSource = icon;
      }
      image = (
        <Image
          style={{width: Theme.toastIconWidth, height: Theme.toastIconHeight, tintColor: Theme.toastIconTintColor}}
          source={imageSource}
          />
      );
    } else {
      image = icon;
    }
    return (
      <View style={{paddingTop: Theme.toastIconPaddingTop, paddingBottom: Theme.toastIconPaddingBottom}}>
        {image}
      </View>
    );
  }

  renderText() {
    let {text} = this.props;
    if (typeof text === 'string' || typeof text === 'number') {
      text = (
        <Text style={{color: Theme.toastTextColor, fontSize: Theme.toastFontSize}}>{text}</Text>
      );
    }
    return text;
  }

  renderContent() {
    let contentStyle = {
      backgroundColor: Theme.toastColor,
      paddingLeft: Theme.toastPaddingLeft,
      paddingRight: Theme.toastPaddingRight,
      paddingTop: Theme.toastPaddingTop,
      paddingBottom: Theme.toastPaddingBottom,
      borderRadius: Theme.toastBorderRadius,
      alignItems: 'center',
    };
    return (
      <View style={contentStyle}>
        {this.renderIcon()}
        {this.renderText()}
      </View>
    );
  }

}
