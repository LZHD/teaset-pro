import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import ThemeExample from './views/ThemeExample';
import LabelExample from './views/LabelExample';
import ButtonExample from './views/ButtonExample';
import CheckboxExample from './views/CheckboxExample';
import InputExample from './views/InputExample';
import SelectExample from './views/SelectExample';
import StepperExample from './views/StepperExample';
import SearchInputExample from './views/SearchInputExample';
import BadgeExample from './views/BadgeExample';
import PopoverExample from './views/PopoverExample';
import NavigationBarExample from './views/NavigationBarExample';
import ListRowExample from './views/ListRowExample';
import CarouselExample from './views/CarouselExample';
import ProjectorExample from './views/ProjectorExample';
import SegmentedBarExample from './views/SegmentedBarExample';
import SegmentedViewExample from './views/SegmentedViewExample';
import TabViewExample from './views/TabViewExample';
import TransformViewExample from './views/TransformViewExample';
import AlbumViewExample from './views/AlbumViewExample';
import WheelExample from './views/WheelExample';
import OverlayExample from './views/OverlayExample';
import ToastExample from './views/ToastExample';
import ActionSheetExample from './views/ActionSheetExample';
import ActionPopoverExample from './views/ActionPopoverExample';
import PullPickerExample from './views/PullPickerExample';
import PopoverPickerExample from './views/PopoverPickerExample';
import MenuExample from './views/MenuExample';
import DrawerExample from './views/DrawerExample';
import ModalIndicatorExample from './views/ModalIndicatorExample';
import Home from './views/Home';

const RouteStack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <RouteStack.Navigator
          headerMode="none"
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}>
          <RouteStack.Screen name="Home" component={Home} />
          <RouteStack.Screen name="Theme" component={ThemeExample} />
          <RouteStack.Screen name="Label" component={LabelExample} />
          <RouteStack.Screen name="Button" component={ButtonExample} />
          <RouteStack.Screen name="Checkbox" component={CheckboxExample} />
          <RouteStack.Screen name="Input" component={InputExample} />
          <RouteStack.Screen name="Select" component={SelectExample} />
          <RouteStack.Screen name="Stepper" component={StepperExample} />
          <RouteStack.Screen
            name="SearchInput"
            component={SearchInputExample}
          />
          <RouteStack.Screen name="Badge" component={BadgeExample} />
          <RouteStack.Screen name="Popover" component={PopoverExample} />
          <RouteStack.Screen
            name="NavigationBar"
            component={NavigationBarExample}
          />
          <RouteStack.Screen name="ListRow" component={ListRowExample} />
          <RouteStack.Screen name="Carousel" component={CarouselExample} />
          <RouteStack.Screen name="Projector" component={ProjectorExample} />
          <RouteStack.Screen
            name="SegmentedBar"
            component={SegmentedBarExample}
          />
          <RouteStack.Screen
            name="SegmentedView"
            component={SegmentedViewExample}
          />
          <RouteStack.Screen name="TabView" component={TabViewExample} />
          <RouteStack.Screen
            name="TransformView"
            component={TransformViewExample}
          />
          <RouteStack.Screen name="AlbumView" component={AlbumViewExample} />
          <RouteStack.Screen name="Wheel" component={WheelExample} />
          <RouteStack.Screen name="Overlay" component={OverlayExample} />
          <RouteStack.Screen name="Toast" component={ToastExample} />
          <RouteStack.Screen
            name="ActionSheet"
            component={ActionSheetExample}
          />
          <RouteStack.Screen
            name="ActionPopover"
            component={ActionPopoverExample}
          />
          <RouteStack.Screen name="PullPicker" component={PullPickerExample} />
          <RouteStack.Screen
            name="PopoverPicker"
            component={PopoverPickerExample}
          />
          <RouteStack.Screen name="Menu" component={MenuExample} />
          <RouteStack.Screen name="Drawer" component={DrawerExample} />
          <RouteStack.Screen
            name="ModalIndicator"
            component={ModalIndicatorExample}
          />
        </RouteStack.Navigator>
      </NavigationContainer>
    );
  }
}
