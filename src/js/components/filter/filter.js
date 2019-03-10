import {createElement} from '../../utils/util';
import makeTemplate from './template';

export default class Filter {
  constructor(data) {
    this._data = data;
    this._element = null;
  }

  get element() {
    return this._element;
  }

  get template() {
    return makeTemplate(this._data);
  }

  render() {
    this._element = createElement(this.template);
    this.createListener();
    return this._element;
  }

  createListener() {}

  removeListeners() {}

  destroy() {
    this.removeListeners();
    this._element.remove();
    this._element = null;
  }
}
