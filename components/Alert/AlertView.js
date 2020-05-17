import React from 'react';
import { View } from 'react-native';
import Overlay from "../Overlay/Overlay";
import Theme from 'teaset/themes/Theme';
import Button from "../Button/Button";
import PropTypes from "prop-types";
import Label from "../Label/Label";


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
        title: PropTypes.oneOf([PropTypes.string, PropTypes.element]).isRequired,
        message: PropTypes.oneOf([PropTypes.string, PropTypes.element])
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
            title = <Label type="title" text={title} style={{ textAlign: 'center' }}/>;
        }
        return title;
    }

    renderMessage() {
        let { message } = this.props;
        if ((message || message === '') && !React.isValidElement(message)) {
            message = <Label type="detail" text={message} numberOfLines={0}/>;
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
                        borderRightWidth: Theme.pixelSize,
                    }}
                    size="lg"
                    title={confirmItem.title}
                    onPress={() => this.onConfirmPress()}
                />
                <Button
                    style={{
                        ...styles.btnStyle,
                        borderBottomRightRadius: 10,
                    }}
                    type="danger"
                    size="lg"
                    title={cancelItem.title}
                    onPress={() => this.onCancelItemPress()}
                />
            </View>
        )
    }

    renderContent(content = null) {
        const { title, content } = this.props;
        return super.renderContent(
            <View style={{backgroundColor: Theme.defaultColor, minWidth: 260, minHeight: 180, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
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
        borderTopWidth: Theme.pixelSize,
        fontSize: 20,
    },
    btnContainer: {
        flexDirection: 'column',
        justifyContent: 'between',
        alignItems: 'center',
    }
});
