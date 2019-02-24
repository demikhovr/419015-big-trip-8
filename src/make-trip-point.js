export default ({
  icon,
  title,
  price,
  schedule,
  duration,
  offers,
}) => `<article class="trip-point">
  <i class="trip-icon">${icon}</i>
  <h3 class="trip-point__title">${title}</h3>
  <p class="trip-point__schedule">
    <span class="trip-point__timetable">${schedule.start}&nbsp;&mdash;${schedule.end}</span>
    <span class="trip-point__duration">${duration}</span>
  </p>
  <p class="trip-point__price">${price}</p>
  <ul class="trip-point__offers">
    ${offers.map((offer) => `<li>
      <button class="trip-point__offer">${offer.content} ${offer.price}</button>
    </li>`).join(``)}
  </ul>
</article>`;
