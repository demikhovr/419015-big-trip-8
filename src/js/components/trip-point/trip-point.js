import Component from '../component';
import makeTemplate from './template';

export default class TripPoint extends Component {
  constructor(data) {
    super();
    this._id = data.id;
    this._day = data.day;
    this._type = data.type;
    this._destination = data.destination;
    this._offers = data.offers;
    this._price = data.price;
    this._schedule = data.schedule;

    this._onClick = null;
    this._onTripPointClick = this._onTripPointClick.bind(this);
  }

  set onClick(fn) {
    this._onClick = fn;
  }

  get template() {
    return makeTemplate(
        this._id,
        this._day,
        this._type,
        this._destination,
        this._offers,
        this._price,
        this._schedule
    );
  }

  createListeners() {
    this._element.addEventListener(`click`, this._onTripPointClick);
  }

  removeListeners() {
    this._element.removeEventListener(`click`, this._onTripPointClick);
  }

  update(data) {
    this._id = data.id;
    this._day = data.day;
    this._type = data.type;
    this._destination = data.destination;
    this._offers = data.offers;
    this._price = data.price;
    this._schedule = data.schedule;
  }

  _onTripPointClick() {
    return typeof this._onClick === `function` && this._onClick();
  }
}
