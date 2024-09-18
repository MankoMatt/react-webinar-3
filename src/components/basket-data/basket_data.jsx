import React from "react";
import "./style.css";
import {plural} from "../../utils"; // Убедитесь, что CSS подключен

const BasketDataCounts = ({ productCount, store }) => {
  return (
    <>
      <div className="BasketData">
        {productCount
          ? `${productCount} ${plural(productCount, {
            one: 'товар',
            few: 'товара',
            many: 'товаров',
          })}`
          : ''}
      </div>
      <div className="BasketData">
        / {store.state.allPrice} ₽
      </div>
    </>
  );
}

export default BasketDataCounts;
