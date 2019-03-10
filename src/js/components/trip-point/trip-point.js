import Component from '../component';
import makeTemplate from './template';

export default class TripPoint extends Component {
  constructor(data) {
    super();
    this.data = data;
    this._onClick = null;
    this._onTripPointClick = this._onTripPointClick.bind(this);
  }

  set onClick(fn) {
    this._onClick = fn;
  }

  get template() {
    return makeTemplate(this.data);
  }

  createListeners() {
    this._element.addEventListener(`click`, this._onTripPointClick);
  }

  removeListeners() {
    this._element.removeEventListener(`click`, this._onTripPointClick);
  }

  _onTripPointClick() {
    return typeof this._onClick === `function` && this._onClick();
  }
}
