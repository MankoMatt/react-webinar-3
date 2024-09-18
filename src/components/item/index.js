import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { plural } from '../../utils';
import './style.css';
import store from "../../store";

function Item(props) {
  // Счётчик выделений
  const [count, setCount] = useState(0);

  const callbacks = {

    onAddProduct: e => {
      props.addProduct(props.item.title, props.item.code, props.item.price)
      props.onAllPrice()
    }
  };

  return (
    <div
      className={'Item' + (props.item.selected ? ' Item_selected' : '')}>
      <div className="Item-code">{props.item.code}</div>
      <div className="Item-title">
        {props.item.title}{' '}
        {count
          ? ` | Выделяли ${count} ${plural(count, {
              one: 'раз',
              few: 'раза',
              many: 'раз',
            })}`
          : ''}
      </div>
      <div className="PriceContaner"><div className="Price">{props.item.price } ₽</div></div>
      <div className="Item-actions">
        <button onClick={callbacks.onAddProduct}>Добавить</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    count: PropTypes.number,
  }).isRequired,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func,
};

Item.defaultProps = {
  onDelete: () => {},
  onSelect: () => {},
};

export default React.memo(Item);
