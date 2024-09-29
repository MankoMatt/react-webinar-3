import {object} from "prop-types";
import './style.css'
import React, {useCallback, useEffect} from "react";
import useStore from "../../store/use-store";
import {useParams} from "react-router-dom"
import {cn as bem} from "@bem-react/classname";

const Card = ({card}) => {
  const {idProduct} = useParams();
  const store = useStore()
  const callbacks = {
    setProductData: useCallback((id) => store.actions.card.setCardData(id)),
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store])
  }

  useEffect(() => {
    callbacks.setProductData(idProduct)
  }, [idProduct])

  const cn = bem('Card');


  return (
    <>
      <div className={cn()}>
        <br></br>
        <div><span className={cn('description-title')}></span><span className={cn('description')}>{card.description}</span></div>
        <div className={cn('contaner')}><span className={cn('madeIn-title')}>Страна производитель:</span><span className={cn('product')}>{card.madeIn}</span></div>
        <div className={cn('contaner')}><span className={cn('category-title')}>Категория:</span><span className={cn('product')}>{card.category}</span></div>
        <div className={cn('contaner')}><span className={cn('edition-title')}>Год выпуска:</span><span className={cn('product')}>{card.edition}</span></div>
        <div className={cn('contaner')}><span className={cn('price')}>Цена: {card.price} ₽</span></div>
        <button className={cn('cotaner-button')} onClick={() => callbacks.addToBasket(idProduct)}>Добавить</button>
      </div>
    </>
  )
}


Card.propTypes = {
  card: object
};

Card.defaultProps = {};

export default React.memo(Card)
