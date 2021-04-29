import React from 'react';
import { Image } from 'react-native';
import { Theme, NavigationPage, TransformView } from 'teaset-pro';

export default class TransformViewExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: ' TransformView',
  };

  renderPage() {
    return (
      <TransformView
        style={{ backgroundColor: Theme.pageColor, flex: 1 }}
        minScale={0.5}
        maxScale={2.5}>
        <Image
          style={{ width: 375, height: 300 }}
          resizeMode="cover"
          source={require('../images/teaset1.jpg')}
        />
      </TransformView>
    );
  }
}
