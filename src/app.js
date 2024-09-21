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
        debugger

  const callbacks = {
    onDeleteItem: useCallback(
      code => {
>>>>>>> 8329d0d275cfdb630a5800801f9862536640983a
        store.deleteItem(code);
      },
      [store],
    ),

<<<<<<< HEAD
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
=======
    onSelectItem: useCallback(
      code => {
        store.selectItem(code);
      },
      [store],
    ),

    onAddItem: useCallback(() => {
      store.addItem();
    }, [store]),
  };

  return (
    <PageLayout>
      <Head title="Приложение на чистом JS" />
      <Controls onAdd={callbacks.onAddItem} />
      <List
        list={list}
        onDeleteItem={callbacks.onDeleteItem}
        onSelectItem={callbacks.onSelectItem}
      />
>>>>>>> 8329d0d275cfdb630a5800801f9862536640983a
    </PageLayout>
  );
}

export default App;
