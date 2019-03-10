import {createElement} from '../../utils/util';
import makeTemplate from './template';

export default class TripPoint {
  constructor(data) {
    this.data = data;
    this._element = null;
    this._onSubmit = null;
    this._onReset = null;
    this._onFormSubmit = this._onFormSubmit.bind(this);
    this._onFormReset = this._onFormReset.bind(this);
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  set onReset(fn) {
    this._onReset = fn;
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
    this._form = this._element.querySelector(`.point form`);
    this._form.addEventListener(`submit`, this._onFormSubmit);
    this._form.addEventListener(`reset`, this._onFormReset);
  }

  removeListeners() {
    this._form.removeEventListener(`submit`, this._onFormSubmit);
    this._form.removeEventListener(`reset`, this._onFormReset);
  }

  unrender() {
    this.removeListeners();
    this._element.remove();
    this._element = null;
  }

  _onFormSubmit(evt) {
    evt.preventDefault();
    return typeof this._onSubmit === `function` && this._onSubmit();
  }

  _onFormReset() {
    return typeof this._onReset === `function` && this._onReset();
  }
}
