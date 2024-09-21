import React from 'react';
import PropTypes from 'prop-types';
import Item from '../item';
import './style.css';

<<<<<<< HEAD
function List({ list, onDeleteItem, addProduct, onAllPrice }) {
=======
function List({ list, onDeleteItem, onSelectItem }) {
>>>>>>> 8329d0d275cfdb630a5800801f9862536640983a
  return (
    <div className="List">
      {list.map(item => (
        <div key={item.code} className="List-item">
<<<<<<< HEAD
          <Item onAllPrice={onAllPrice} addProduct={addProduct} item={item} onDelete={onDeleteItem} />
=======
          <Item item={item} onDelete={onDeleteItem} onSelect={onSelectItem} />
>>>>>>> 8329d0d275cfdb630a5800801f9862536640983a
        </div>
      ))}
    </div>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
    }),
  ).isRequired,
  onDeleteItem: PropTypes.func,
  onSelectItem: PropTypes.func,
};

List.defaultProps = {
  onDeleteItem: () => {},
  onSelectItem: () => {},
};

export default React.memo(List);
