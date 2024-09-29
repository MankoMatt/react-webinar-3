<<<<<<< HEAD
import {memo} from 'react';
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import {numberFormat} from '../../utils';
import './style.css';
import {Link} from "react-router-dom";
=======
import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import { numberFormat } from '../../utils';
import './style.css';
>>>>>>> b5bf9380d97043e17bc3b5ea839ac797cd957969

function Item(props) {
  const cn = bem('Item');

  const callbacks = {
    onAdd: e => props.onAdd(props.item._id),
  };

  return (
    <div className={cn()}>
<<<<<<< HEAD
      <div className={cn('title')}>
        <Link className={'decor'} to={`/product/${props.item._id}`}>
          <div>{props.item.title}</div>
        </Link>
      </div>
=======
      {/*<div className={cn('code')}>{props.item._id}</div>*/}
      <div className={cn('title')}>{props.item.title}</div>
>>>>>>> b5bf9380d97043e17bc3b5ea839ac797cd957969
      <div className={cn('actions')}>
        <div className={cn('price')}>{numberFormat(props.item.price)} ₽</div>
        <button onClick={callbacks.onAdd}>Добавить</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onAdd: PropTypes.func,
};

Item.defaultProps = {
<<<<<<< HEAD
  onAdd: () => {
  },
=======
  onAdd: () => {},
>>>>>>> b5bf9380d97043e17bc3b5ea839ac797cd957969
};

export default memo(Item);
