import Component from '../component';
import makeTemplate from './template';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import {
  dateConfig,
  timeConfig,
} from '../../data/data';
import {TripPointTypes} from '../../data/trip-points';

export default class TripPointEdit extends Component {
  constructor(data) {
    super();
    this._id = data.id;
    this._day = data.day;
    this._type = data.type;
    this._destination = data.destination;
    this._offers = data.offers;
    this._price = data.price;
    this._schedule = data.schedule;
    this._images = data.images;
    this._description = data.description;
    this._isFavorite = data.isFavorite;

    this._onSubmit = null;
    this._onReset = null;
    this._onFormSubmit = this._onFormSubmit.bind(this);
    this._onFormReset = this._onFormReset.bind(this);
    this._onTravelWaySelect = this._onTravelWaySelect.bind(this);
    this._onPriceChange = this._onPriceChange.bind(this);
    this._onOfferChange = this._onOfferChange.bind(this);
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  set onReset(fn) {
    this._onReset = fn;
  }

  get template() {
    return makeTemplate(
        this._id,
        this._day,
        this._type,
        this._destination,
        this._offers,
        this._price,
        this._schedule,
        this._images,
        this._description,
        this._isFavorite
    );
  }

  createListeners() {
    this._formRef = this._element.querySelector(`.point form`);
    this._travelWay = this._formRef.querySelector(`.travel-way`);
    this._dateRef = this._element.querySelector(`.point__date .point__input`);
    this._timeRef = this._element.querySelector(`.point__time .point__input`);
    this._priceRef = this._element.querySelector(`.point__price .point__input`);
    this._offersRef = this._element.querySelector(`.point__offers`);
    this._totalPriceRef = this._element.querySelector(`.point__total-price`);
    this._offerInputRefs = this._element.querySelectorAll(`.point__offers-input`);

    this._formRef.addEventListener(`submit`, this._onFormSubmit);
    this._formRef.addEventListener(`reset`, this._onFormReset);
    this._travelWay.addEventListener(`change`, this._onTravelWaySelect);
    this._priceRef.addEventListener(`input`, this._onPriceChange);
    this._offersRef.addEventListener(`change`, this._onOfferChange);

    flatpickr(this._dateRef, dateConfig);
    flatpickr(this._timeRef, timeConfig);
  }

  removeListeners() {
    this._formRef.removeEventListener(`submit`, this._onFormSubmit);
    this._formRef.removeEventListener(`reset`, this._onFormReset);
    this._travelWay.removeEventListener(`change`, this._onTravelWaySelect);
    this._priceRef.removeEventListener(`input`, this._onPriceChange);
    this._offersRef.removeEventListener(`change`, this._onOfferChange);
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

  _onFormSubmit(evt) {
    evt.preventDefault();

    const formData = new FormData(this._formRef);
    const newData = this._processForm(formData);

    if (typeof this._onSubmit === `function`) {
      this._onSubmit(newData);
    }

    this.update(newData);
  }

  _onFormReset() {
    return typeof this._onReset === `function` && this._onReset();
  }

  _processForm(formData) {
    const entry = {
      day: ``,
      type: ``,
      destination: ``,
      offers: [],
      price: ``,
      schedule: ``,
      isFavorite: false,
      totalPrice: 0,
    };

    const tripPointEditMapper = this._createMapper(entry);

    for (const pair of formData.entries()) {
      const [property, value] = pair;

      if (tripPointEditMapper[property]) {
        tripPointEditMapper[property](value);
      }
    }

    return entry;
  }

  _createMapper(target) {
    return {
      'travel-way': (value) => (target.type = value),
      'day': (value) => (target.day = value),
      'offer': (value) => target.offers.push(this._getOffer(value)),
      'destination': (value) => (target.destination = value),
      'price': (value) => (target.price = value),
      'favorite': (value) => (target.isFavorite = value === `on`),
      'total-price': (value) => (target.totalPrice = value),
    };
  }

  _onTravelWaySelect({target}) {
    const {name, value} = target;

    if (name === `travel-way`) {
      const travelWay = target.closest(`.travel-way`);
      travelWay.querySelector(`.travel-way__label`).textContent = TripPointTypes[value].icon;
      travelWay.querySelector(`.travel-way__toggle`).checked = false;
    }
  }

  _onPriceChange({target}) {
    target.value = target.value.replace(/[^0-9.]/g, ``).replace(/(\..*)\./g, `$1`);
    this._updateTotalPrice();
  }

  _onOfferChange({target}) {
    const id = Number(target.dataset.id);
    this._offers.find((offer) => offer.id === id).checked = target.checked;
    this._updateTotalPrice();
  }

  _updateTotalPrice() {
    const offersPrice = [...this._offerInputRefs].reduce((acc, curr) => {
      if (curr.checked) {
        const id = Number(curr.dataset.id);
        const price = Number(this._offers.find((offer) => offer.id === id).price);
        return acc + price;
      }

      return acc;
    }, 0);

    this._totalPriceRef.value = Number(this._priceRef.value) + offersPrice || 0;
  }

  _getOffer(content) {
    return this._offers.find((offer) => offer.content === content);
  }
}
