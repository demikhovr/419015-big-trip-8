import {
  TripPointTypes,
  scheduleLocaleOptions,
} from '../../data/trip-points';

const getOffers = (offers) => offers.map((offer) => {
  const content = offer.content.split(`-`).join(` `);

  return `<li>
    <button class="trip-point__offer">
      ${content[0].toUpperCase() + content.slice(1).toLowerCase()} €${offer.price}
    </button>
  </li>`;
}).join(``);

export default (
    id,
    day,
    type,
    destination,
    offers,
    price,
    schedule
) => {
  const startTime = new Date(schedule.start).toLocaleString(...scheduleLocaleOptions);
  const endTime = new Date(schedule.end).toLocaleString(...scheduleLocaleOptions);
  const diff = schedule.end - schedule.start;
  const durationHours = new Date(diff).getUTCHours();
  const durationMinutes = new Date(diff).getMinutes();

  return `<article class="trip-point">
    <i class="trip-icon">${TripPointTypes[type].icon}</i>
    <h3 class="trip-point__title">${TripPointTypes[type].label} ${destination}</h3>
    <p class="trip-point__schedule">
      <span class="trip-point__timetable">${startTime}&nbsp;&mdash; ${endTime}</span>
      <span class="trip-point__duration">${durationHours}h ${durationMinutes}m</span>
    </p>
    <p class="trip-point__price">€&nbsp;${price}</p>
    <ul class="trip-point__offers">
      ${getOffers(offers)}
    </ul>
  </article>`;
};
