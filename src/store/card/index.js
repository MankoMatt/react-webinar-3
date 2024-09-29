import { codeGenerator } from '../../utils';
import StoreModule from '../module';

class Card extends StoreModule {

  initState() {
    return {
      madeIn: '',
      edition: 0,
      category: '',
      price: 0,
      description: '',
      title: '',
      id: '',
    };
  }

  state = this.store.getState()

  async setCardData(id) {
    const response = await fetch(`/api/v1/articles/${id}`);
    const json = await response.json();
    this.setState({
      ...this.getState(),
      madeIn: json.result.madeIn._type,
      edition: json.result.edition,
      category: json.result.category._type,
      price: json.result.price,
      description: json.result.description,
      title: json.result.title,
      id: json.result._id
    })
  }

  }


export default Card;
