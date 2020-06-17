// Home.js

'use strict';

import React from 'react';
import { View, ScrollView } from 'react-native';
import { Theme, NavigationPage, ListRow } from 'teaset-pro';

export default class Home extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Teaset Example',
  };

  renderPage() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 20 }} />
        <ListRow
          title="Theme"
          detail="主题"
          onPress={() => this.navigation.navigate('Theme')}
        />
        <ListRow
          title="Label"
          detail="标签"
          onPress={() => this.navigation.navigate('Label')}
        />
        <ListRow
          title="Button"
          detail="按钮"
          onPress={() => this.navigation.navigate('Button')}
        />
        <ListRow
          title="Checkbox"
          detail="复选框"
          onPress={() => this.navigation.navigate('Checkbox')}
        />
        <ListRow
          title="Input"
          detail="输入框"
          onPress={() => this.navigation.navigate('Input')}
        />
        <ListRow
          title="Select"
          detail="选择框"
          onPress={() => this.navigation.navigate('Select')}
        />
        <ListRow
          title="Stepper"
          detail="步进器"
          onPress={() => this.navigation.navigate('Stepper')}
        />
        <ListRow
          title="SearchInput"
          detail="搜索输入框"
          onPress={() => this.navigation.navigate('SearchInput')}
        />
        <ListRow
          title="Badge"
          detail="徽章"
          onPress={() => this.navigation.navigate('Badge')}
        />
        <ListRow
          title="Popover"
          detail="气泡"
          onPress={() => this.navigation.navigate('Popover')}
        />
        <ListRow
          title="NavigationBar"
          detail="导航栏"
          onPress={() => this.navigation.navigate('NavigationBar')}
        />
        <ListRow
          title="ListRow"
          detail="列表行"
          onPress={() => this.navigation.navigate('ListRow')}
        />
        <ListRow
          title="Carousel"
          detail="走马灯"
          onPress={() => this.navigation.navigate('Carousel')}
        />
        <ListRow
          title="Projector"
          detail="幻灯机"
          onPress={() => this.navigation.navigate('Projector')}
        />
        <ListRow
          title="SegmentedBar"
          detail="分段工具条"
          onPress={() => this.navigation.navigate('SegmentedBar')}
        />
        <ListRow
          title="SegmentedView"
          detail="分段器"
          onPress={() => this.navigation.navigate('SegmentedView')}
        />
        <ListRow
          title="TabView"
          detail="标签页"
          onPress={() => this.navigation.navigate('TabView')}
        />
        <ListRow
          title="TransformView"
          detail="可变视图"
          onPress={() => this.navigation.navigate('TransformView')}
        />
        <ListRow
          title="AlbumView"
          detail="相册视图"
          onPress={() => this.navigation.navigate('AlbumView')}
        />
        <ListRow
          title="Wheel"
          detail="滚轮"
          onPress={() => this.navigation.navigate('Wheel')}
        />
        <ListRow
          title="Overlay"
          detail="浮层"
          onPress={() => this.navigation.navigate('Overlay')}
        />
        <ListRow
          title="Toast"
          detail="轻提示"
          onPress={() => this.navigation.navigate('Toast')}
        />
        <ListRow
          title="ActionSheet"
          detail="操作选单"
          onPress={() => this.navigation.navigate('ActionSheet')}
        />
        <ListRow
          title="ActionPopover"
          detail="操作气泡"
          onPress={() => this.navigation.navigate('ActionPopover')}
        />
        <ListRow
          title="PullPicker"
          detail="上拉选择器"
          onPress={() => this.navigation.navigate('PullPicker')}
        />
        <ListRow
          title="PopoverPicker"
          detail="气泡选择器"
          onPress={() => this.navigation.navigate('PopoverPicker')}
        />
        <ListRow
          title="Menu"
          detail="菜单"
          onPress={() => this.navigation.navigate('Menu')}
        />
        <ListRow
          title="Drawer"
          detail="抽屉"
          onPress={() => this.navigation.navigate('Drawer')}
        />
        <ListRow
          title="ModalIndicator"
          detail="模态指示器"
          onPress={() => this.navigation.navigate('ModalIndicator')}
        />
        <View style={{ height: Theme.screenInset.bottom }} />
      </ScrollView>
    );
  }
}
