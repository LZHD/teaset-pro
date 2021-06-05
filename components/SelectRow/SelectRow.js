import React from 'react';
import PropTypes from 'prop-types';
import ListRow from '../ListRow/ListRow';
import Select from '../Select/Select';

export default class SelectRow extends ListRow {
  static propTypes = {
    ...ListRow.propTypes,
    value: PropTypes.any,
    items: PropTypes.array,
    getItemValue: PropTypes.func,
    getItemText: PropTypes.func,
    emptyText: PropTypes.string,
    emptyTextColor: PropTypes.string,
    onSelected: PropTypes.func.isRequired,
  };

  static defaultProps = {
    ...ListRow.defaultProps,
    emptyText: 'Select item',
    emptyTextColor: '#ff8f99',
  };

  renderDetail() {
    let {
      title,
      value,
      items,
      getItemValue,
      getItemText,
      emptyText,
      emptyTextColor,
      onSelected,
    } = this.props;
    return (
      <Select
        style={{ borderWidth: 0, flex: 1 }}
        value={value}
        valueStyle={{ textAlign: 'right' }}
        items={items}
        getItemValue={getItemValue}
        getItemText={getItemText}
        editable={items && items.length > 0}
        placeholder={emptyText}
        placeholderTextColor={emptyTextColor}
        pickerTitle={typeof title === 'string' ? title : null}
        onSelected={(item, index) =>
          onSelected && onSelected(items[index], index)
        }
      />
    );
  }
}
