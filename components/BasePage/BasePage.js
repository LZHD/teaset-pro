import React, { Component } from 'react';
import { Platform, View, ViewPropTypes } from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import PropTypes from 'prop-types';
import Theme from '../../themes/Theme';
import KeyboardSpace from '../KeyboardSpace/KeyboardSpace';

export default class BasePage extends Component {
  static propTypes = {
    ...ViewPropTypes,
    autoKeyboardInsets: PropTypes.bool, //自动插入键盘占用空间
    keyboardTopInsets: PropTypes.number, //插入键盘占用空间顶部偏移，用于底部有固定占用空间(如TabNavigator)的页面
  };

  static defaultProps = {
    ...View.defaultProps,
    autoKeyboardInsets: Platform.OS === 'ios',
    keyboardTopInsets: 0,
  };

  static contextType = NavigationContext;

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.focusListener = this.navigation.addListener('focus', () =>
        this.onDidFocus(),
    );
  }

  componentWillUnmount() {
    if (this.focusListener) {
      this.focusListener();
    }
  }

  get navigation() {
    const navigation = this.context;
    if (!navigation) {
      console.error(
          'No import @react-navigation/native>=5.0.0, then you can not use BasePage.navigation.',
      );
      return null;
    }
    return navigation;
  }

  onDidFocus() {}

  buildStyle() {
    let { style } = this.props;
    style = [
      {
        flex: 1,
        backgroundColor: Theme.pageColor,
      },
    ].concat(style);
    return style;
  }

  renderPage() {
    return null;
  }

  render() {
    const {
      style,
      children,
      autoKeyboardInsets,
      keyboardTopInsets,
      ...others
    } = this.props;
    return (
        <View style={this.buildStyle()} {...others}>
          {this.renderPage()}
          {autoKeyboardInsets ? (
              <KeyboardSpace topInsets={keyboardTopInsets} />
          ) : null}
        </View>
    );
  }
}
