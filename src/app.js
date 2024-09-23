import React, { useCallback } from 'react';
import List from './components/list';
import Head from './components/head';
import PageLayout from './components/page-layout';
import Basket from "./components/basket/index.jsx";
import BasketData from "./components/basket-data/index.js";
import Controls from './components/controls';


/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const list = store.getState().list;

  const callbacks = {
    onDeleteItem: useCallback(
      code => {
        store.deleteItem(code);
      },
      [store],
    ),
    onAddItem: useCallback(() => {
      store.addItem();
    }, [store]),

    onAddProduct: useCallback((title, code, price) =>{
      store.addProduct(title, code, price)
    }, [store]),

    onAllPrice: useCallback(() => {
      store.setAllPrice()
    }, [store]),

    onChangeBasketMode: useCallback(() => {
      store.changeBasketMode()
    }, [store]),
  };


  return (
    <PageLayout>
      <Head store={store} title="Магазин"/>
      <BasketData onChangeBasketMode={callbacks.onChangeBasketMode} onAllPrice={callbacks.onAllPrice} store={store}/>
      <List
        list={list}
        onAllPrice={callbacks.onAllPrice}
        onDeleteItem={callbacks.onDeleteItem}
        addProduct={callbacks.onAddProduct}
      />
      {store.state.basketMode ? <Basket onChangeBasketMode={callbacks.onChangeBasketMode} onDeleteItem={callbacks.onDeleteItem} store={store}/> : null}
    </PageLayout>
  );
}

export default App;
