<<<<<<< HEAD
import {generateCode} from './utils';
=======
import { generateCode } from './utils';
>>>>>>> 8329d0d275cfdb630a5800801f9862536640983a

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    };
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление новой записи
   */
  addItem() {
    this.setState({
      ...this.state,
<<<<<<< HEAD
      list: [...this.state.list, {code: generateCode(), title: 'Новая запись'}],
    });
  }

  changeBasketMode() {
    this.setState({
      ...this.state,
      basketMode: !this.state.basketMode
    })
  }

  addProduct(title, code, price) {
    const products = this.state.products || [];
    const productIndex = products.findIndex(product => product.code === code);

    if (productIndex > -1) {
      products[productIndex].quantity += 1;
    } else {
      products.push({ title: title, code: code, quantity: 1, price: price });
    }



    this.setState({
      ...this.state,
      products: products
    });
    this.setAllPrice()
  }

  setAllPrice() {

    if (Array.isArray(this.state.products)) {
      let allPrice = 0;

      for (let i = 0; i < this.state.products.length; i++) {
        const product = this.state.products[i];

        if (product.price && product.quantity) {
          const one = product.price * product.quantity;
          allPrice += one;
          console.log(allPrice)
        }
      }
      this.setState({
        ...this.state,
        allPrice: allPrice
      })
    } else if(typeof this.state.products === 'undefined') {
      this.setState ({
        ...this.state
      })
    }
  }
=======
      list: [...this.state.list, { code: generateCode(), title: 'Новая запись' }],
    });
  }

>>>>>>> 8329d0d275cfdb630a5800801f9862536640983a
  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
<<<<<<< HEAD
    const updatedProducts = this.state.products.filter(product => product.code !== code);
    debugger
    this.setState({
      ...this.state,
      products: updatedProducts,
    })
    this.setAllPrice();
=======
    this.setState({
      ...this.state,
      // Новый список, в котором не будет удаляемой записи
      list: this.state.list.filter(item => item.code !== code),
    });
  }

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map(item => {
        if (item.code === code) {
          // Смена выделения и подсчёт
          return {
            ...item,
            selected: !item.selected,
            count: item.selected ? item.count : item.count + 1 || 1,
          };
        }
        // Сброс выделения если выделена
        return item.selected ? { ...item, selected: false } : item;
      }),
    });
>>>>>>> 8329d0d275cfdb630a5800801f9862536640983a
  }
}

export default Store;
<<<<<<< HEAD


=======
>>>>>>> 8329d0d275cfdb630a5800801f9862536640983a
