import Component from '../component';
import makeTemplate from './template';

export default class TripPoint extends Component {
  constructor(data) {
    super();
    this.data = data;
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

  get template() {
    return makeTemplate(this.data);
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

  _onFormSubmit(evt) {
    evt.preventDefault();
    return typeof this._onSubmit === `function` && this._onSubmit();
  }

  _onFormReset() {
    return typeof this._onReset === `function` && this._onReset();
  }
}
