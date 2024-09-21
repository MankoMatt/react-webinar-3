import React from "react"
import "style.css"

const Basket = ({store, onChangeBasketMode, onDeleteItem}) => {

  let state = store.getState()

  return (
    <>
      <div className="BasketCont">
        <div className="BasketListCont">
          <div className="BasketHeader">
            <div className="Basket">Корзина</div>
            <button className="BasketClose" onClick={onChangeBasketMode}>Закрыть</button>
          </div>
          <div className="BasketList">{state.products ? state.products.map((p, index) => (
            <div className="InBasketItem" key={index}>
              <div className="BasketItemCode">{p.code}</div>
              <div className="BasketItemTitle">{p.title}</div>
              <div className="BasketItemPrice">{p.price} ₽</div>
              <div className="BasketItemQuantity">{p.quantity} шт</div>
              <button className="BasketDelete" onClick={() => onDeleteItem(p.code)}>Удалить</button>
            </div>
          )) : <div className="NoInBasket">Корзина пуста</div>}</div>
          <div className="ItogPrice">
            <div className="Itogo">Итого</div>
            <div className="allPriceItogo">{state.allPrice} ₽</div>
          </div>
          <div className="BasketBottom"></div>
        </div>
      </div>
    </>
  )
}

export default Basket
