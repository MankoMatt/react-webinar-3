import {generateCode} from './utils';

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
  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    const updatedProducts = this.state.products.filter(product => product.code !== code);
    debugger
    this.setState({
      ...this.state,
      products: updatedProducts,
    });
  }
}

export default Store;


