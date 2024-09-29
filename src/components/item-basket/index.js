<<<<<<< HEAD
import {memo, useCallback} from 'react';
import propTypes from 'prop-types';
import PropTypes from 'prop-types';
import {numberFormat} from '../../utils';
import {cn as bem} from '@bem-react/classname';
import './style.css';
import {Link} from "react-router-dom";
import useStore from "../../store/use-store";

function ItemBasket(props) {
  const cn = bem('ItemBasket');
  const store = useStore()
  const callbacks = {
    onRemove: e => props.onRemove(props.item._id),
    closeModal: useCallback(() => store.actions.modals.close(), [store]),
  };


  return (
    <div className={cn()}>
      <div className={cn('title')}>
        <Link to={`/product/${props.item._id}`}>
          <div onClick={callbacks.closeModal}>{props.item.title}</div>
        </Link>
      </div>
=======
import { memo, useCallback } from 'react';
import propTypes from 'prop-types';
import { numberFormat } from '../../utils';
import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import './style.css';

function ItemBasket(props) {
  const cn = bem('ItemBasket');

  const callbacks = {
    onRemove: e => props.onRemove(props.item._id),
  };

  return (
    <div className={cn()}>
      {/*<div className={cn('code')}>{props.item._id}</div>*/}
      <div className={cn('title')}>{props.item.title}</div>
>>>>>>> b5bf9380d97043e17bc3b5ea839ac797cd957969
      <div className={cn('right')}>
        <div className={cn('cell')}>{numberFormat(props.item.price)} ₽</div>
        <div className={cn('cell')}>{numberFormat(props.item.amount || 0)} шт</div>
        <div className={cn('cell')}>
          <button onClick={callbacks.onRemove}>Удалить</button>
        </div>
      </div>
    </div>
  );
}

ItemBasket.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    price: PropTypes.number,
    amount: PropTypes.number,
  }).isRequired,
  onRemove: propTypes.func,
};

ItemBasket.defaultProps = {
<<<<<<< HEAD
  onRemove: () => {
  },
=======
  onRemove: () => {},
>>>>>>> b5bf9380d97043e17bc3b5ea839ac797cd957969
};

export default memo(ItemBasket);
