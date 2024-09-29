import { codeGenerator } from '../../utils';
import StoreModule from '../module';

class Paginator extends StoreModule {
  constructor(store, name) {
    super(store, name);
    this.generateCode = codeGenerator(0);
  }

  initState() {
    return {
      lastSkipCount: 0,
      page: 1
    };
  }

  state = this.store.getState()

  chengePage(page, pageCount) {
    this.setState({
      ...this.getState(),
      lastSkipCount: pageCount,
      page: page
    })
  }

  }


export default Paginator;
