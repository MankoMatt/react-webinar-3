import React, { useEffect } from "react";
import "./style.css";
import { plural } from "../../utils";
import BasketDataCounts from "./basket_data.jsx";

const BasketData = ({ store, onAllPrice, onChangeBasketMode }) => {

  useEffect(() => {
    onAllPrice();
  }, [store]);

  const productCount = Array.isArray(store.state.products) ? store.state.products.length : null;

  return (
    <div className="Contaner">
      <div className="BasketDataContaner">
        <div className="InBasket">В корзине:</div>
        {productCount ? (
          <BasketDataCounts store={store} productCount={productCount} />
        ) : (
          <div>Пусто</div>
        )}
        <button className="BasketButton" onClick={onChangeBasketMode}>Перейти</button>
      </div>
    </div>
  );
}

export default BasketData;
