import Item from '../../components/item';
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import BasketTool from '../../components/basket-tool';
import List from '../../components/list';
import useStore from '../../store/use-store';
import useSelector from '../../store/use-selector';
import Paginator from "../../components/paginator";
import {Route, Routes} from "react-router-dom";
import Card from "../../components/product-card";


function Main() {
  const store = useStore();

  useEffect(() => {
    store.actions.catalog.load();
  }, []);

  const select = useSelector(state => ({
    list: state.catalog.list,
    maxPageCount: state.catalog.maxPageCount,
    page: state.paginator.page,
    lastSkipCount: state.paginator.lastSkipCount,
    amount: state.basket.amount,
    sum: state.basket.sum,
    card: state.card
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
  };

  const renders = {
    item: useCallback(
      item => {
        return <Item item={item} onAdd={callbacks.addToBasket}/>;
      },
      [callbacks.addToBasket],
    ),
  };

  const AppList = () => {
    return (
      <>
        <List list={select.list} renderItem={renders.item}/>
        <Paginator maxPageCount={select.maxPageCount} page={select.page}/>
      </>
    )
  }


  return (
    <PageLayout>
      <Head title="Магазин"/>
      <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount} sum={select.sum}/>
      <Routes>
        <Route path='/' element={<AppList />}/>
        <Route path='/product/:idProduct' element={<Card card={select.card}/>}/>
      </Routes>
    </PageLayout>
  );
}

export default memo(Main);
