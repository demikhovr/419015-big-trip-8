import {
  TripPointTypes,
  scheduleLocaleOptions,
} from '../data/trip-points';

export default ({
  type,
  destination,
  offers,
  price,
  schedule,
  // photos,
  // description,
}) => {
  const startTime = new Date(schedule.start).toLocaleString(...scheduleLocaleOptions);
  const endTime = new Date(schedule.end).toLocaleString(...scheduleLocaleOptions);
  const diff = schedule.end - schedule.start;
  const durationHours = new Date(diff).getUTCHours();
  const durationMinutes = new Date(diff).getMinutes();

  return `<article class="trip-point">
    <i class="trip-icon">${TripPointTypes[type].icon}</i>
    <h3 class="trip-point__title">${TripPointTypes[type].title} ${destination}</h3>
    <p class="trip-point__schedule">
      <span class="trip-point__timetable">${startTime}&nbsp;&mdash; ${endTime}</span>
      <span class="trip-point__duration">${durationHours}h ${durationMinutes}m</span>
    </p>
    <p class="trip-point__price">${price}</p>
    <ul class="trip-point__offers">
      ${offers.map((offer) => `<li>
        <button class="trip-point__offer">${offer.content} ${offer.currency}${offer.price}</button>
      </li>`).join(``)}
    </ul>
  </article>`;
};
