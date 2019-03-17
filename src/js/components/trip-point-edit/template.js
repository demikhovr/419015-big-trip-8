import {
  TripPointTypes,
  destinations,
  scheduleLocaleOptions,
} from '../../data/trip-points';

/* Refactor later */
const getTravelWays = () => {
  const groups = Object.keys(TripPointTypes)
    .reduce((obj, type) => {
      const {group} = TripPointTypes[type];

      if (!obj[group]) {
        obj[group] = [];
      }

      TripPointTypes[type].type = type;
      obj[group].push(TripPointTypes[type]);

      return obj;
    }, {});

  return Object.values(groups).map((group) => `<div
    class="travel-way__select-group"
  >
    ${group.map(({type}) => `<input
      class="travel-way__select-input visually-hidden"
      type="radio" 
      id="travel-way-${type}" 
      name="travel-way" 
      value="${type}"
    >
    <label
      class="travel-way__select-label"
      for="travel-way-${type}"
    >
      ${TripPointTypes[type].icon} ${type}
    </label>`).join(``)}
  </div>`).join(``);
};

const getOffers = (offers) => offers.map(({content, price}) => {
  const value = content.split(` `).map((it) => it.toLowerCase()).join(`-`);

  return `<input
    class="point__offers-input visually-hidden" 
    type="checkbox" 
    id="${value}" 
    name="offer" 
    value="${value}">
  <label for="${value}" class="point__offers-label">
    <span class="point__offer-service">${content}</span> + €<span class="point__offer-price">${price}</span>
  </label>`;
}).join(``);

const getDestinations = () => destinations.map((it) => `<option value="${it}"></option>`).join(``);

const getImages = (images) => images.map((img) => `<img
  src="${img}"
  alt="picture from place"
  class="point__destination-image">`).join(``);

export default (
    type,
    destination,
    offers,
    price,
    schedule,
    images,
    description,
    isFavorite = false
) => {
  const startTime = new Date(schedule.start).toLocaleString(...scheduleLocaleOptions);
  const endTime = new Date(schedule.end).toLocaleString(...scheduleLocaleOptions);
  const offersPrice = offers.reduce((acc, curr) => acc + curr.price, 0);
  const totalPrice = price + offersPrice;

  return `<article class="point">
    <form action="" method="get">
      <header class="point__header">
        <label class="point__date">
          choose day
          <input class="point__input" type="text" placeholder="MAR 18" name="day">
        </label>
        <div class="travel-way">
          <label class="travel-way__label" for="travel-way__toggle">${TripPointTypes[type].icon}️</label>
          <input type="checkbox" class="travel-way__toggle visually-hidden" id="travel-way__toggle">
          <div class="travel-way__select">
            ${getTravelWays()}
          </div>
        </div>
        <div class="point__destination-wrap">
          <label class="point__destination-label" for="destination">${TripPointTypes[type].label}</label>
          <input class="point__destination-input" list="destination-select" id="destination" value="${destination}" name="destination">
          <datalist id="destination-select">
            ${getDestinations()}
          </datalist>
        </div>
        <label class="point__time">
          choose time
          <input class="point__input" type="text" value="${startTime} — ${endTime}" name="time" placeholder="00:00 — 00:00">
        </label>
        <label class="point__price">
          write price
          <span class="point__price-currency">€</span>
          <input class="point__input" type="text" value="${price}" name="price">
        </label>
        <div class="point__buttons">
          <button class="point__button point__button--save" type="submit">Save</button>
          <button class="point__button" type="reset">Delete</button>
        </div>
        <div class="paint__favorite-wrap">
          <input
            type="checkbox"
            class="point__favorite-input visually-hidden"
            id="favorite"
            name="favorite"
            ${isFavorite ? `checked` : ``}
          >
          <label class="point__favorite" for="favorite">favorite</label>
        </div>
      </header>
  
      <section class="point__details">
        <section class="point__offers">
          <h3 class="point__details-title">offers</h3>
          <div class="point__offers-wrap">
            ${getOffers(offers)}
          </div>
        </section>
        <section class="point__destination">
          <h3 class="point__details-title">Destination</h3>
          <p class="point__destination-text">${description}</p>
          <div class="point__destination-images">
            ${getImages(images)}
          </div>
        </section>
        <input type="hidden" class="point__total-price" name="total-price" value="${totalPrice}">
      </section>
    </form>
  </article>`;
};
