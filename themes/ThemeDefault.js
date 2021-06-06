import { StyleSheet } from 'react-native';

//primary color
const primaryColor = '#337ab7';
//secondary color
const secondaryColor = '#5bc0de';
//default color
const defaultColor = '#fff';
//default text color
const defaultTextColor = '#333';

//pixel size
const pixelSize = StyleSheet.hairlineWidth;

export default {
  //General
  screenColor: '#444',
  primaryColor: primaryColor,
  secondaryColor: secondaryColor,
  defaultColor: defaultColor,
  defaultTextColor: defaultTextColor,
  pageColor: '#f8f8f8',
  pixelSize: pixelSize,

  //Label - color
  labelTextColor: defaultTextColor,
  labelTextTitleColor: '#000',
  labelTextDetailColor: '#989898',
  labelTextDangerColor: '#a94442',
  //Label - font size
  labelFontSizeXL: 26,
  labelFontSizeLG: 20,
  labelFontSizeMD: 14,
  labelFontSizeSM: 10,
  labelFontSizeXS: 8,
  labelTitleScale: 1.1, //29, 22, 15, 11, 9
  labelDetailScale: 0.9, //23, 18, 13, 9, 7
  labelDangerScale: 1,

  //Button - background color
  btnColor: defaultColor,
  btnPrimaryColor: primaryColor,
  btnSecondaryColor: secondaryColor,
  btnDangerColor: '#d9534f',
  btnLinkColor: 'rgba(0, 0, 0, 0)',
  //Button - title color
  btnTitleColor: primaryColor,
  btnPrimaryTitleColor: '#fff',
  btnSecondaryTitleColor: '#fff',
  btnDangerTitleColor: '#fff',
  btnLinkTitleColor: primaryColor,
  //Button - border color
  btnBorderColor: primaryColor,
  btnPrimaryBorderColor: primaryColor,
  btnSecondaryBorderColor: secondaryColor,
  btnDangerBorderColor: '#d9534f',
  btnLinkBorderColor: 'rgba(0, 0, 0, 0)',
  //Button - border width
  btnBorderWidth: 1,
  //Button - border radius
  btnBorderRadiusXL: 6,
  btnBorderRadiusLG: 6,
  btnBorderRadiusMD: 4,
  btnBorderRadiusSM: 3,
  btnBorderRadiusXS: 3,
  //Button - font size
  btnFontSizeXL: 29,
  btnFontSizeLG: 22,
  btnFontSizeMD: 15,
  btnFontSizeSM: 11,
  btnFontSizeXS: 9,
  //Button - padding vertical
  btnPaddingVerticalXL: 8,
  btnPaddingVerticalLG: 8,
  btnPaddingVerticalMD: 6,
  btnPaddingVerticalSM: 4,
  btnPaddingVerticalXS: 2,
  //Button - padding horizontal
  btnPaddingHorizontalXL: 20,
  btnPaddingHorizontalLG: 16,
  btnPaddingHorizontalMD: 12,
  btnPaddingHorizontalSM: 8,
  btnPaddingHorizontalXS: 4,
  //Button - disabled opacity
  btnDisabledOpacity: 0.65,

  //Checkbox
  cbTitleColor: defaultTextColor,
  cbFontSizeLG: 20,
  cbFontSizeMD: 14,
  cbFontSizeSM: 10,
  cbTitlePaddingLeftLG: 8,
  cbTitlePaddingLeftMD: 6,
  cbTitlePaddingLeftSM: 4,
  cbCheckedTintColor: primaryColor,
  cbUncheckedTintColor: '#ccc',
  cbIconSizeLG: 18,
  cbIconSizeMD: 13,
  cbIconSizeSM: 10,
  cbDisabledOpacity: 0.65,

  //Input
  inputColor: defaultColor,
  inputTextColor: defaultTextColor,
  inputPlaceholderTextColor: '#c7c7c7',
  inputBorderColor: '#ccc',
  inputBorderWidth: 1,
  //Input - border radius
  inputBorderRadiusLG: 6,
  inputBorderRadiusMD: 4,
  inputBorderRadiusSM: 3,
  //Input - font size
  inputFontSizeLG: 18,
  inputFontSizeMD: 14,
  inputFontSizeSM: 12,
  //Input - padding vertical
  inputPaddingVerticalLG: 8,
  inputPaddingVerticalMD: 6,
  inputPaddingVerticalSM: 5,
  //Input - padding horizontal
  inputPaddingHorizontalLG: 16,
  inputPaddingHorizontalMD: 12,
  inputPaddingHorizontalSM: 10,
  //Input - height
  inputHeightLG: 46,
  inputHeightMD: 34,
  inputHeightSM: 30,
  //Input - disabled opacity
  inputDisabledOpacity: 0.65,

  //Select
  selectColor: defaultColor,
  selectTextColor: defaultTextColor,
  selectPlaceholderTextColor: '#c7c7c7',
  selectBorderColor: '#ccc',
  selectBorderWidth: 1,
  //Select - border radius
  selectBorderRadiusLG: 6,
  selectBorderRadiusMD: 4,
  selectBorderRadiusSM: 3,
  //Select - font size
  selectFontSizeLG: 18,
  selectFontSizeMD: 14,
  selectFontSizeSM: 12,
  //Select - padding vertical
  selectPaddingTopLG: 8,
  selectPaddingTopMD: 6,
  selectPaddingTopSM: 5,
  selectPaddingBottomLG: 8,
  selectPaddingBottomMD: 6,
  selectPaddingBottomSM: 5,
  //Select - padding horizontal
  selectPaddingLeftLG: 16,
  selectPaddingLeftMD: 12,
  selectPaddingLeftSM: 10,
  selectPaddingRightLG: 26, //include icon size
  selectPaddingRightMD: 20, //include icon size
  selectPaddingRightSM: 16, //include icon size
  //Select - height
  selectHeightLG: 46,
  selectHeightMD: 34,
  selectHeightSM: 30,
  //Select - icon
  selectIconSizeLG: 20,
  selectIconSizeMD: 15,
  selectIconSizeSM: 12,
  selectIconTintColor: '#777',
  //Select - disabled opacity
  selectDisabledOpacity: 0.65,

  //Stepper
  stepperColor: defaultColor,
  stepperBorderColor: '#ccc',
  stepperBorderWidth: 1,
  stepperBorderRadius: 2,
  stepperTextColor: defaultTextColor,
  stepperFontSize: 13,
  stepperBtnTextColor: defaultTextColor,
  stepperBtnFontSize: 13,
  stepperValueMinWidth: 40,
  stepperValuePaddingHorizontal: 8,
  stepperButtonWidth: 20,
  stepperButtonHeight: 20,
  stepperDisabledOpacity: 0.35,

  //SearchInput
  siColor: defaultColor,
  siTextColor: defaultTextColor,
  siPlaceholderTextColor: '#c7c7c7',
  siBorderColor: '#ccc',
  siBorderWidth: 1,
  siBorderRadius: 3,
  siFontSize: 13,
  siPaddingVertical: 4,
  siPaddingHorizontal: 6,
  siHeight: 28,
  siIconSize: 12,
  siDisabledOpacity: 0.65,

  //Badge
  badgeSize: 18,
  badgeDotSize: 6,
  badgePadding: 5,
  badgeColor: '#f00',
  badgeBorderColor: '#f8f8f8',
  badgeBorderWidth: 0,
  badgeTextColor: '#fff',
  badgeFontSize: 11,

  //Popover
  popoverColor: defaultColor,
  popoverBorderColor: 'rgba(0, 0, 0, 0.15)',
  popoverBorderRadius: 4,
  popoverBorderWidth: pixelSize,
  popoverPaddingCorner: 8,

  //NavigationBar
  navType: 'ios', //'auto', 'ios', 'android'
  navStatusBarStyle: 'light-content', //'default', 'light-content'
  navBarContentHeight: 44,
  navColor: primaryColor,
  navTintColor: '#fff',
  navTitleColor: '#fff',
  navTitleFontSize: 18,
  navButtonFontSize: 15,
  navSeparatorColor: primaryColor,
  navSeparatorLineWidth: 0,

  //SegmentedBar
  sbColor: defaultColor,
  sbHeight: 40,
  sbBtnPaddingTop: 8,
  sbBtnPaddingBottom: 8,
  sbBtnPaddingLeft: 8,
  sbBtnPaddingRight: 8,
  sbBtnTitleColor: '#989898',
  sbBtnTextFontSize: 13,
  sbBtnActiveTitleColor: primaryColor,
  sbBtnActiveTextFontSize: 13,
  sbIndicatorLineColor: primaryColor,
  sbIndicatorLineWidth: 2,
  sbIndicatorPositionPadding: 0,

  //SegmentedView

  //TabView
  tvBarColor: '#f8f8f8',
  tvBarHeight: 49,
  tvBarPaddingTop: 2,
  tvBarPaddingBottom: 2,
  tvBarSeparatorWidth: pixelSize,
  tvBarSeparatorColor: '#ccc',
  tvBarBtnWidth: 44,
  tvBarBtnIconSize: 22,
  tvBarBtnIconTintColor: '#8f8f8f',
  tvBarBtnIconActiveTintColor: primaryColor,
  tvBarBtnTitleColor: '#8f8f8f',
  tvBarBtnTextFontSize: 10,
  tvBarBtnActiveTitleColor: primaryColor,
  tvBarBtnActiveTextFontSize: 10,

  //ListRow
  rowColor: defaultColor,
  rowMinHeight: 44,
  rowPaddingLeft: 12,
  rowPaddingRight: 12,
  rowPaddingTop: 8,
  rowPaddingBottom: 8,
  rowIconWidth: 20,
  rowIconHeight: 20,
  rowIconPaddingRight: 12,
  rowAccessoryWidth: 10,
  rowAccessoryHeight: 10,
  rowAccessoryPaddingLeft: 8,
  rowAccessoryCheckColor: '#007aff',
  rowAccessoryIndicatorColor: '#bebebe',
  rowSeparatorColor: '#ccc',
  rowSeparatorLineWidth: pixelSize,
  rowPaddingTitleDetail: 4,
  rowDetailLineHeight: 18,
  rowActionButtonColor: '#c8c7cd',
  rowActionButtonDangerColor: '#d9534f',
  rowActionButtonTitleColor: '#fff',
  rowActionButtonDangerTitleColor: '#fff',
  rowActionButtonTitleFontSize: 15,
  rowActionButtonPaddingHorizontal: 12,

  //Carousel
  carouselDotSize: 9,
  carouselDotUseSize: 16,
  carouselDotColor: 'rgba(255, 255, 255, 0.4)',
  carouselActiveDotColor: 'rgba(255, 255, 255, 0.85)',

  //Wheel
  wheelColor: defaultColor,
  wheelFontSize: 14,
  wheelTextColor: defaultTextColor,
  wheelHoleHeight: 28,
  wheelHoleLineWidth: pixelSize,
  wheelHoleLineColor: '#ccc',
  wheelMaskColor: defaultColor,
  wheelMaskOpacity: 0.4,

  //Overlay
  overlayOpacity: 0.4,
  overlayRootScale: 0.93,

  //Toast
  toastColor: 'rgba(0, 0, 0, 0.8)',
  toastPaddingLeft: 12,
  toastPaddingRight: 12,
  toastPaddingTop: 8,
  toastPaddingBottom: 8,
  toastBorderRadius: 4,
  toastIconTintColor: '#ddd',
  toastIconWidth: 40,
  toastIconHeight: 40,
  toastIconPaddingTop: 8,
  toastIconPaddingBottom: 8,
  toastTextColor: '#ddd',
  toastFontSize: 15,
  toastScreenPaddingLeft: 40,
  toastScreenPaddingRight: 40,
  toastScreenPaddingTop: 100,
  toastScreenPaddingBottom: 80,

  //ActionSheet
  asItemDisabledOpacity: 0.65,
  asItemMinHeight: 53,
  asItemPaddingLeft: 12,
  asItemPaddingRight: 12,
  asItemPaddingTop: 8,
  asItemPaddingBottom: 8,
  asItemColor: 'rgba(255, 255, 255, 0.9)',
  asItemSeparatorColor: 'rgba(127, 127, 127, 0.3)',
  asItemSeparatorLineWidth: pixelSize,
  asItemTitleColor: '#000',
  asItemTitleAlign: 'center',
  asItemFontSize: 19,
  asCancelItemColor: 'rgba(255, 255, 255, 0.9)',
  asCancelItemSeparatorColor: 'rgba(127, 127, 127, 0.3)',
  asCancelItemSeparatorLineWidth: 7,
  asCancelItemTitleColor: '#a94442',
  asCancelItemTitleAlign: 'center',
  asCancelItemFontSize: 19,

  //ActionPopover
  apColor: 'rgba(0, 0, 0, 0.9)',
  apPaddingVertical: 0,
  apPaddingHorizontal: 4,
  apBorderRadius: 8,
  apDirectionInsets: 4,
  apItemTitleColor: '#fff',
  apItemFontSize: 14,
  apItemPaddingVertical: 8,
  apItemPaddingHorizontal: 12,
  apSeparatorColor: '#ccc',
  apSeparatorWidth: pixelSize,

  //PullPicker
  pupColor: '#f8f8f8',
  pupMaxHeight: 258,
  pupHeaderColor: defaultColor,
  pupHeaderPaddingLeft: 12,
  pupHeaderPaddingRight: 12,
  pupHeaderPaddingTop: 12,
  pupHeaderPaddingBottom: 12,
  pupHeaderTitleColor: '#000',
  pupHeaderFontSize: 16,
  pupHeaderFontWeight: 'bold',
  pupHeaderSeparatorColor: '#f8f8f8',
  pupHeaderSeparatorHeight: 8,
  pupItemColor: defaultColor,
  pupSeparatorColor: '#ccc',

  //PopoverPicker
  poppColor: '#f8f8f8',
  poppShadowColor: '#333',
  poppMinWidth: 120,
  poppMaxWidth: 260,
  poppMinHeight: 44,
  poppMaxHeight: 246,
  poppDirectionInsets: 4,
  poppItemColor: defaultColor,
  poppItemPaddingLeft: 12,
  poppItemPaddingRight: 12,
  poppItemPaddingTop: 8,
  poppItemPaddingBottom: 8,
  poppItemTitleColor: defaultTextColor,
  poppItemFontSize: 14,
  poppItemSeparatorWidth: pixelSize,
  poppItemSeparatorColor: '#ccc',
  poppAccessoryWidth: 10,
  poppAccessoryHeight: 10,
  poppAccessoryPaddingLeft: 8,
  poppAccessoryCheckColor: '#007aff',

  //Menu
  menuColor: 'rgba(0, 0, 0, 0.9)',
  menuShadowColor: '#777',
  menuDirectionInsets: 4,
  menuItemColor: 'rgba(0, 0, 0, 0)',
  menuItemPaddingLeft: 16,
  menuItemPaddingRight: 16,
  menuItemPaddingTop: 12,
  menuItemPaddingBottom: 12,
  menuItemTitleColor: '#ccc',
  menuItemFontSize: 14,
  menuItemSeparatorWidth: pixelSize,
  menuItemSeparatorColor: '#777',
  menuItemIconWidth: 16,
  menuItemIconHeight: 16,
  menuItemIconColor: '#ccc',
  menuItemIconPaddingRight: 12,

  //ModalIndicator
  miIndicatorColor: '#fff',
  miTextColor: '#fff',
  miFontSize: 15,
  miTextPaddingTop: 12,
  miScreenPaddingLeft: 40,
  miScreenPaddingRight: 40,
  miScreenPaddingTop: 100,
  miScreenPaddingBottom: 80,

  //NavigationPage
  backButtonTitle: 'Back',
};
