import { codeGenerator } from '../../utils';
import StoreModule from '../module';

class Catalog extends StoreModule {
  constructor(store, name) {
    super(store, name);
    this.generateCode = codeGenerator(0);
  }

  initState() {
    return {
      list: [],
    };
  }

<<<<<<< HEAD
  state = this.store.getState()

  async load(skip) {
    const response = await fetch(`/api/v1/articles?limit=10&skip=${skip}&fields=items(*),count`);
    const json = await response.json();
    const maxPageCount = Math.ceil(json.result.count / 10)

=======
  async load() {
    const response = await fetch('/api/v1/articles');
    const json = await response.json();
>>>>>>> b5bf9380d97043e17bc3b5ea839ac797cd957969
    this.setState(
      {
        ...this.getState(),
        list: json.result.items,
<<<<<<< HEAD
        maxPageCount: maxPageCount
=======
>>>>>>> b5bf9380d97043e17bc3b5ea839ac797cd957969
      },
      'Загружены товары из АПИ',
    );
  }
}

export default Catalog;
