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

  state = this.store.getState()

  async load(skip) {
    const response = await fetch(`/api/v1/articles?limit=10&skip=${skip}&fields=items(*),count`);
    const json = await response.json();
    const maxPageCount = Math.ceil(json.result.count / 10)

    this.setState(
      {
        ...this.getState(),
        list: json.result.items,
        maxPageCount: maxPageCount
      },
      'Загружены товары из АПИ',
    );
  }
}

export default Catalog;
