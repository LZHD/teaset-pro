import React from 'react';
import { View, StyleSheet } from 'react-native';
import Overlay from '../Overlay/Overlay';
import Theme from '../../themes/Theme';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import Label from '../Label/Label';

export default class AlertView extends Overlay.PopView {
  static propTypes = {
    ...Overlay.PopView.propTypes,
    cancelItem: PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]).isRequired,
      onPress: PropTypes.func,
    }),
    confirmItem: PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number]).isRequired,
      onPress: PropTypes.func,
    }),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  }

  disappearCompleted() {
    super.disappearCompleted();
    this.pressItem && this.pressItem.onPress && this.pressItem.onPress();
  }

  onConfirmPress() {
    const { confirmItem } = this.props;
    this.pressItem = confirmItem;
    this.close(false);
  }

  onCancelItemPress() {
    const { cancelItem } = this.props;
    this.pressItem = cancelItem;
    this.close(true);
  }

  renderTitle() {
    let { title } = this.props;
    if ((title || title === '') && !React.isValidElement(title)) {
      title = <Label type="title" size="lg" text={title} style={{ textAlign: 'center', paddingVertical: 15 }}/>;
    }
    return title;
  }

  renderMessage() {
    let { message } = this.props;
    if ((message || message === '') && !React.isValidElement(message)) {
      message = <Label type="detail" size="lg" text={message} numberOfLines={0}/>;
    }
    return message;
  }

  renderButtons() {
    const { cancelItem, confirmItem } = this.props;
    return (
      <View style={styles.btnContainer}>
        <Button
          style={{
            ...styles.btnStyle,
            borderBottomLeftRadius: 10,
            borderRightWidth: Theme.pixelSize / 2,
          }}
          size="lg"
          title={cancelItem.title}
          onPress={() => this.onCancelItemPress()}
        />
        <Button
          style={{
            ...styles.btnStyle,
            borderBottomRightRadius: 10,
            borderLeftWidth: Theme.pixelSize / 2,
          }}
          titleStyle={{ color: 'red' }}
          size="lg"
          title={confirmItem.title}
          onPress={() => this.onConfirmPress()}
        />
      </View>
    )
  }

  buildStyle() {
    return super.buildStyle().concat({
      alignItems: 'center',
      justifyContent: 'center',
    })
  }

  renderContent(content = null) {
    return super.renderContent(
      <View style={{
        backgroundColor: Theme.defaultColor,
        minWidth: 245,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {this.renderTitle()}
        {this.renderMessage()}
        {this.renderButtons()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btnStyle: {
    flex: 1,
    borderWidth: 0,
    borderRadius: 0,
    borderColor: '#CCD0D5',
    borderTopWidth: Theme.pixelSize,
    fontSize: 20,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
