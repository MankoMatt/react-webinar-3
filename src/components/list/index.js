import React from 'react';
import PropTypes from 'prop-types';
import Item from '../item';
import './style.css';


function List({ list, onDeleteItem, addProduct, onAllPrice }) {
  return (
    <div className="List">
      {list.map(item => (
        <div key={item.code} className="List-item">
          <Item onAllPrice={onAllPrice} addProduct={addProduct} item={item} onDelete={onDeleteItem} />
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
