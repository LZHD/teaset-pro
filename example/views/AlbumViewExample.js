import React from 'react';
import { View, Image, TouchableOpacity, StatusBar } from 'react-native';
import { NavigationPage, AlbumView, Overlay } from 'teaset-pro';

export default class AlbumViewExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: ' AlbumView',
  };

  constructor(props) {
    super(props);
    this.images = [
      require('../images/teaset1.jpg'),
      require('../images/teaset2.jpg'),
      require('../images/teaset3.jpg'),
      require('../images/faircup.jpg'),
    ];
    this.thumbs = [
      require('../images/teaset1_s.jpg'),
      require('../images/teaset2_s.jpg'),
      require('../images/teaset3_s.jpg'),
      require('../images/faircup_s.jpg'),
    ];
  }

  onImagePress(index) {
    let pressView = this['it' + index];
    pressView.measure((x, y, width, height, pageX, pageY) => {
      let overlayView = (
        <Overlay.PopView
          style={{}}
          containerStyle={{ flex: 1 }}
          overlayOpacity={1}
          type="custom"
          customBounds={{ x: pageX, y: pageY, width, height }}
          ref={v => (this.fullImageView = v)}>
          <AlbumView
            style={{ flex: 1 }}
            control={true}
            images={this.images}
            thumbs={this.thumbs}
            defaultIndex={index}
            onPress={() => this.fullImageView && this.fullImageView.close()}
          />
          <StatusBar animated={false} hidden={true} />
        </Overlay.PopView>
      );
      Overlay.show(overlayView);
    });
  }

  renderPage() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}>
          {this.thumbs.map((item, index) => (
            <View style={{ width: 100, height: 100, padding: 10 }} key={index}>
              <TouchableOpacity
                style={{ flex: 1 }}
                ref={t => (this['it' + index] = t)}
                onPress={() => this.onImagePress(index)}>
                <Image
                  style={{ width: null, height: null, flex: 1 }}
                  source={item}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
