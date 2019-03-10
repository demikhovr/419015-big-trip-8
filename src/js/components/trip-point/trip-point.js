import {createElement} from '../../utils/util';
import makeTemplate from './template';

export default class TripPoint {
  constructor(data) {
    this.data = data;
    this._element = null;
    this._onClick = null;
    this._onTripPointClick = this._onTripPointClick.bind(this);
  }

  set onClick(fn) {
    this._onClick = fn;
  }

  get element() {
    return this._element;
  }

  get template() {
    return makeTemplate(this.data);
  }

  render() {
    this._element = createElement(this.template);
    this.createListeners();
    return this._element;
  }

  createListeners() {
    this._element.addEventListener(`click`, this._onTripPointClick);
  }

  removeListeners() {
    this._element.removeEventListener(`click`, this._onTripPointClick);
  }

  unrender() {
    this.removeListeners();
    this._element.remove();
    this._element = null;
  }

  _onTripPointClick() {
    return typeof this._onClick === `function` && this._onClick();
  }
}
