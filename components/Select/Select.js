import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import Theme from '../../themes/Theme';
import PullPicker from '../PullPicker/PullPicker';
import PopoverPicker from '../PopoverPicker/PopoverPicker';

export default class Select extends Component {
  static propTypes = {
    ...TouchableOpacity.propTypes,
    size: PropTypes.oneOf(['lg', 'md', 'sm']),
    value: PropTypes.any,
    valueStyle: Text.propTypes.style,
    items: PropTypes.array,
    getItemValue: PropTypes.func, //(item, index) 选择项值，item=items[index]，为空时直接使用item
    getItemText: PropTypes.func, //(item, index) return display text of item, item=items[index], use item when it's null
    pickerType: PropTypes.oneOf(['auto', 'pull', 'popover']),
    pickerTitle: PropTypes.string, //PullPicker only
    editable: PropTypes.bool,
    icon: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.shape({ uri: PropTypes.string }),
      PropTypes.number,
      PropTypes.oneOf(['none', 'default']),
    ]),
    iconTintColor: PropTypes.string, //set to null for no tint color
    placeholder: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    onSelected: PropTypes.func, //(item, index)
  };

  static defaultProps = {
    ...TouchableOpacity.defaultProps,
    size: 'md',
    editable: true,
    icon: 'default',
    pickerType: 'auto',
  };

  constructor(props) {
    super(props);
    this.selectView = null;
  }

  measureInWindow(callback) {
    this.selectView && this.selectView.measureInWindow(callback);
  }

  measure(callback) {
    this.selectView && this.selectView.measure(callback);
  }

  get selectedIndex() {
    let { value, items, getItemValue } = this.props;
    if (items instanceof Array) {
      if (getItemValue) {
        for (let i = 0; i < items.length; ++i) {
          if (getItemValue(items[i], i) === value) {
            return i;
          }
        }
      } else {
        for (let i = 0; i < items.length; ++i) {
          if (items[i] === value) {
            return i;
          }
        }
      }
    }
    return -1;
  }

  get valueText() {
    let { value, items, getItemValue, getItemText } = this.props;
    let text = value;
    if (getItemText && items instanceof Array) {
      if (getItemValue) {
        for (let i = 0; i < items.length; ++i) {
          if (getItemValue(items[i], i) === value) {
            text = getItemText(items[i], i);
            break;
          }
        }
      } else {
        for (let i = 0; i < items.length; ++i) {
          if (items[i] === value) {
            text = getItemText(items[i], i);
            break;
          }
        }
      }
    }
    return !text || React.isValidElement(text) ? text : `${text}`;
  }

  buildStyle() {
    let { style, size, disabled } = this.props;

    let borderRadius,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      height;
    switch (size) {
      case 'lg':
        borderRadius = Theme.selectBorderRadiusLG;
        paddingTop = Theme.selectPaddingTopLG;
        paddingBottom = Theme.selectPaddingBottomLG;
        paddingLeft = Theme.selectPaddingLeftLG;
        paddingRight = Theme.selectPaddingRightLG;
        height = Theme.selectHeightLG;
        break;
      case 'sm':
        borderRadius = Theme.selectBorderRadiusSM;
        paddingTop = Theme.selectPaddingTopSM;
        paddingBottom = Theme.selectPaddingBottomSM;
        paddingLeft = Theme.selectPaddingLeftSM;
        paddingRight = Theme.selectPaddingRightSM;
        height = Theme.selectHeightSM;
        break;
      default:
        borderRadius = Theme.selectBorderRadiusMD;
        paddingTop = Theme.selectPaddingTopMD;
        paddingBottom = Theme.selectPaddingBottomMD;
        paddingLeft = Theme.selectPaddingLeftMD;
        paddingRight = Theme.selectPaddingRightMD;
        height = Theme.selectHeightMD;
    }
    style = [
      {
        backgroundColor: Theme.selectColor,
        borderColor: Theme.selectBorderColor,
        borderWidth: Theme.selectBorderWidth,
        borderRadius: borderRadius,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        height: height,
      },
    ]
      .concat(style)
      .concat({ flexDirection: 'row', alignItems: 'center' });
    if (disabled) {
      style = style.concat({ opacity: Theme.btnDisabledOpacity });
    }

    return style;
  }

  showPullPicker() {
    let { pickerTitle, items, getItemText, onSelected } = this.props;
    PullPicker.show(pickerTitle, items, this.selectedIndex, onSelected, {
      getItemText,
    });
  }

  showPopoverPicker() {
    this.measure((x, y, width, height, pageX, pageY) => {
      let { items, getItemText, onSelected } = this.props;
      PopoverPicker.show(
        { x: pageX, y: pageY, width, height },
        items,
        this.selectedIndex,
        onSelected,
        { getItemText, align: 'end' },
      );
    });
  }

  showPicker() {
    switch (this.props.pickerType) {
      case 'pull':
        this.showPullPicker();
        break;
      case 'popover':
        this.showPopoverPicker();
        break;
      default:
        Theme.isPad ? this.showPopoverPicker() : this.showPullPicker();
        break;
    }
  }

  renderValue() {
    let {
      value,
      valueStyle,
      placeholder,
      placeholderTextColor,
      size,
    } = this.props;

    let fontSize;
    switch (size) {
      case 'lg':
        fontSize = Theme.selectFontSizeLG;
        break;
      case 'sm':
        fontSize = Theme.selectFontSizeSM;
        break;
      default:
        fontSize = Theme.selectFontSizeMD;
    }
    valueStyle = [
      {
        color: Theme.selectTextColor,
        fontSize,
        flexGrow: 1,
        overflow: 'hidden',
      },
    ].concat(valueStyle);

    if (!placeholderTextColor) {
      placeholderTextColor = Theme.selectPlaceholderTextColor;
    }

    let valueElement;
    if (value === null || value === undefined) {
      valueStyle = valueStyle.concat({ color: placeholderTextColor });
      valueElement = (
        <Text style={valueStyle} numberOfLines={1} allowFontScaling={false}>
          {placeholder}
        </Text>
      );
    } else {
      let valueText = this.valueText;
      if (React.isValidElement(valueText)) {
        valueElement = valueText;
      } else {
        valueElement = (
          <Text style={valueStyle} numberOfLines={1} allowFontScaling={false}>
            {valueText}
          </Text>
        );
      }
    }
    return valueElement;
  }

  renderIcon() {
    let { size, icon, iconTintColor } = this.props;

    let iconSize;
    switch (size) {
      case 'lg':
        iconSize = Theme.selectIconSizeLG;
        break;
      case 'sm':
        iconSize = Theme.selectIconSizeSM;
        break;
      default:
        iconSize = Theme.selectIconSizeMD;
    }
    if (iconTintColor === undefined) {
      iconTintColor = Theme.selectIconTintColor;
    }

    let iconElement;
    if (icon === null || icon === undefined || icon === 'none') {
      iconElement = null;
    } else if (React.isValidElement(icon)) {
      iconElement = icon;
    } else {
      iconElement = (
        <Image
          style={{
            width: iconSize,
            height: iconSize,
            tintColor: iconTintColor,
          }}
          source={icon === 'default' ? require('../../icons/select.png') : icon}
        />
      );
    }

    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          justifyContent: 'center',
        }}>
        {iconElement}
      </View>
    );
  }

  render() {
    let {
      style,
      children,
      disabled,
      size,
      value,
      valueStyle,
      items,
      getItemValue,
      getItemText,
      pickerType,
      pickerTitle,
      editable,
      icon,
      iconTintColor,
      placeholder,
      placeholderTextColor,
      onSelected,
      onPress,
      onLayout,
      ...others
    } = this.props;
    let ViewClass = disabled ? View : TouchableOpacity;
    return (
      <ViewClass
        style={this.buildStyle()}
        disabled={disabled || !editable}
        onPress={e => (onPress ? onPress(e) : this.showPicker())}
        onLayout={e => {
          this.measure((x, y, width, height, pageX, pageY) => {
            this.popoverView &&
              this.popoverView.updateFromBounds({
                x: pageX,
                y: pageY,
                width,
                height,
              });
          });
          onLayout && onLayout(e);
        }}
        {...others}
        ref={view => (this.selectView = view)}>
        {this.renderValue()}
        {this.renderIcon()}
      </ViewClass>
    );
  }
}
