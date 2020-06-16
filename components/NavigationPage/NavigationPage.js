import React from 'react';
import { View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Theme from '../../themes/Theme';
import BasePage from '../BasePage/BasePage';
import NavigationBar from '../NavigationBar/NavigationBar';
import KeyboardSpace from '../KeyboardSpace/KeyboardSpace';

export default class NavigationPage extends BasePage {
  static propTypes = {
    ...BasePage.propTypes,
    title: PropTypes.string,
    showBackButton: PropTypes.bool,
    navigationBarInsets: PropTypes.bool,
    navigationBarOptions: PropTypes.shape({ ...NavigationBar.propTypes }),
  };

  static defaultProps = {
    ...BasePage.defaultProps,
    title: null,
    showBackButton: false,
    navigationBarInsets: true,
    navigationBarOptions: {
      ...NavigationBar.defaultProps,
    },
  };

  constructor(props) {
    super(props);
    this.screenWidth = Dimensions.get('window').width;
  }

  onLayout(e) {
    const { width } = Dimensions.get('window');
    if (width !== this.screenWidth) {
      this.screenWidth = width;
      this.forceUpdate();
    }
    this.props.onLayout && this.props.onLayout(e);
  }

  renderNavigationTitle() {
    return this.props.title;
  }

  renderNavigationLeftView() {
    if (!this.props.showBackButton) {
      return null;
    }
    return (
        <NavigationBar.BackButton
            title={Theme.backButtonTitle}
            onPress={() => this.navigation.goBack()}
        />
    );
  }

  renderNavigationRightView() {
    return null;
  }

  renderNavigationBar() {
    const {
      title,
      leftView,
      rightView,
      ...others
    } = this.props.navigationBarOptions;
    return (
      <NavigationBar
          title={this.renderNavigationTitle()}
          leftView={this.renderNavigationLeftView()}
          rightView={this.renderNavigationRightView()}
          {...others}
      />
    );
  }

  renderPage() {
    return null;
  }

  render() {
    const {
      style,
      children,
      scene,
      autoKeyboardInsets,
      keyboardTopInsets,
      title,
      showBackButton,
      navigationBarInsets,
      ...others
    } = this.props;

    const { left: paddingLeft, right: paddingRight } = Theme.screenInset;
    const pageContainerStyle = [
      {
        flex: 1,
        paddingLeft,
        paddingRight,
        marginTop: navigationBarInsets
          ? Theme.navBarContentHeight + Theme.statusBarHeight
          : 0,
      },
    ];

    return (
        <View
            style={this.buildStyle()}
            onLayout={e => this.onLayout(e)}
            {...others}>
          <View style={{ flex: 1 }}>
            <View style={pageContainerStyle}>{this.renderPage()}</View>
            {this.renderNavigationBar()}
          </View>
          {autoKeyboardInsets ? (
              <KeyboardSpace topInsets={keyboardTopInsets} />
          ) : null}
        </View>
    );
  }
}
