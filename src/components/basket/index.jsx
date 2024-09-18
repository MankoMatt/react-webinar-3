import React from "react"
import "style.css"

const Basket = ({store, onChangeBasketMode, onDeleteItem}) => {

  let state = store.getState()
  debugger
  return (
    <>
      <div className="BasketCont">
        <div className="BasketHeader">
          <div className="Basket">Корзина</div>
          <button className="BasketClose" onClick={onChangeBasketMode}>Закрыть</button>
        </div>
        <div className="BasketList">{state.products ? state.products.map((p, index) => (
          <div>
            <div key={index}>{p.code} {p.title} {p.price}₽ {p.quantity}шт.</div>
            <button onClick={() => onDeleteItem(p.code)}>Удалить</button>
          </div>
        )) : <div>Корзина пуста</div>}</div>
      </div>
      <div className="Itogo">Итого</div>
      <div className="allPriceItogo">{state.allPrice}</div>
    </>
  )
}

export default Basket
