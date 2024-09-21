import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { plural } from '../../utils';
import './style.css';
<<<<<<< HEAD
import store from "../../store";
=======
>>>>>>> 8329d0d275cfdb630a5800801f9862536640983a

function Item(props) {
  // Счётчик выделений
  const [count, setCount] = useState(0);

  const callbacks = {
<<<<<<< HEAD

    onAddProduct: e => {
      props.addProduct(props.item.title, props.item.code, props.item.price)
      props.onAllPrice()
    }
=======
    onClick: () => {
      props.onSelect(props.item.code);
      if (!props.item.selected) {
        setCount(count + 1);
      }
    },
    onDelete: e => {
      e.stopPropagation();
      props.onDelete(props.item.code);
    },
>>>>>>> 8329d0d275cfdb630a5800801f9862536640983a
  };

  return (
    <div
<<<<<<< HEAD
      className={'Item' + (props.item.selected ? ' Item_selected' : '')}>
=======
      className={'Item' + (props.item.selected ? ' Item_selected' : '')}
      onClick={callbacks.onClick}
    >
>>>>>>> 8329d0d275cfdb630a5800801f9862536640983a
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
<<<<<<< HEAD
      <div className="PriceContaner"><div className="Price">{props.item.price } ₽</div></div>
      <div className="Item-actions">
        <button onClick={callbacks.onAddProduct}>Добавить</button>
=======
      <div className="Item-actions">
        <button onClick={callbacks.onDelete}>Удалить</button>
>>>>>>> 8329d0d275cfdb630a5800801f9862536640983a
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
