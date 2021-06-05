import React from 'react';
import { Image } from 'react-native';
import NavigationButton from './NavigationButton';

export default class NavigationIconButton extends NavigationButton {
  static propTypes = {
    ...NavigationButton.propTypes,
    icon: Image.propTypes.source,
  };

  renderTitle() {
    let { icon } = this.props;
    if (icon === null || icon === undefined) {
      return super.renderTitle();
    }
    let iconStyle = {
      tintColor: this.context.tintColor,
      width: 20,
      height: 20,
    };
    return <Image style={iconStyle} source={icon} />;
  }
}
