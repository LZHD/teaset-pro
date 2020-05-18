# Teaset
[🇨🇳中文完整文档版](./docs/cn/README.md)

A UI library for react native, provides 20+ pure JS(ES6) components, focusing on content display and action control.

# Installation
```
npm install --save teaset
```

# Example
Clone teaset project from github (or download zip file):
```
git clone https://github.com/lzhd/teaset-pro.git
cd teaset-pro/example
npm install
```
To run example on iOS:
```
cd ios && pod install && cd ..
react-native run-ios
```
To run example on Android:
```
react-native run-android
```
**Tips: In the Android system, the animations is not smooth, switch to the release mode can be resolved.**

## iPhoneX
iPhoneX and iPhoneXS are fully supported after 0.6.0, and this option is **true** by default.

If SafeAreaView is used, please use ```Theme.set({fitIPhoneX: false})``` to manually turn off it.

## Redux
If you use Redux, you need to use the ```<TopView>``` package container (thanks [@Alexorz](https://github.com/Alexorz) ).

```
import { TopView } from 'teaset-pro';

container => () => <Provider store={store}><TopView>{container}</TopView></Provider>
```

# Documentation
The document is being written, please refer to the example source code.

[Translation project](https://github.com/emersonlaurentino/teaset/projects/1)

# Screenshots

## Components
![](screenshots/00-Teaset1.png) ![](screenshots/00-Teaset2.png)

## Theme
![](screenshots/00a-Theme1.png) ![](screenshots/00a-Theme2.png)
![](screenshots/00a-Theme3.png)

## Label
![](screenshots/01-Label.png)

## Button
![](screenshots/02-Button.png)

## Checkbox
![](screenshots/03-Checkbox.png)

## Input
![](screenshots/04-Input.png)

## Select
![](screenshots/05-Select1.png) ![](screenshots/05-Select2.png)
![](screenshots/05-Select3.png)

## Stepper
![](screenshots/05a-Stepper.png)

## SearchInput
![](screenshots/05b-SearchInput.png)

## Badge
![](screenshots/06-Badge.png)

## Popover
![](screenshots/07-Popover.png)

## NavigationBar
![](screenshots/08-NavigationBar.png)

## ListRow
![](screenshots/09-ListRow.png)

## Carousel
![](screenshots/10-Carousel.png)

## Projector
![](screenshots/11-Projector.png)

## SegmentedBar
![](screenshots/11a-SegmentedBar1.png) ![](screenshots/11a-SegmentedBar2.png)
![](screenshots/11a-SegmentedBar3.png)

## SegmentedView
![](screenshots/12-SegmentedView.png)

## TabView
![](screenshots/13-TabView.png) ![](screenshots/13-TabView2.png)

## TransformView
![](screenshots/14-TransformView.png)

## AlbumView
![](screenshots/14a-AlbumView1.png) ![](screenshots/14a-AlbumView2.png)

## Wheel
![](screenshots/14b-Wheel.png)

## Overlay
![](screenshots/15-Overlay1.png) ![](screenshots/15-Overlay2.png)
![](screenshots/15-Overlay3.png) ![](screenshots/15-Overlay6.png)
![](screenshots/15-Overlay4.png) ![](screenshots/15-Overlay5.png)

## Toast
![](screenshots/16-Toast1.png) ![](screenshots/16-Toast2.png)
![](screenshots/16-Toast3.png)

## ActionSheet
![](screenshots/17-ActionSheet.png)

## ActionPopover
![](screenshots/18-ActionPopover.png)

## PullPicker
![](screenshots/19-PullPicker.png)

## PopoverPicker
![](screenshots/20-PopoverPicker.png)

## Menu
![](screenshots/20a-Menu1.png) ![](screenshots/20a-Menu2.png)

## Drawer
![](screenshots/20b-Drawer1.png) ![](screenshots/20b-Drawer2.png)

## ModalIndicator
![](screenshots/21-ModalIndicator.png)

# License
MIT
