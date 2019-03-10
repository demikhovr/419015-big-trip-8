import tripPointsData, {
  MIN_TRIP_POINTS,
  MAX_TRIP_POINTS
} from './data/trip-points';
import filtersData from './data/filters';
import {getRandomNumber} from './utils/util';
import TripPoint from './components/trip-point/trip-point';
import TripPointEdit from './components/trip-point-edit/trip-point-edit';
import Filter from './components/filter/filter';

const tripFiltersWrapper = document.querySelector(`.trip-filter`);
const tripPointsWrapper = document.querySelector(`.trip-day__items`);

tripFiltersWrapper.addEventListener(`change`, () => {
  const data = tripPointsData.slice(0, getRandomNumber(MAX_TRIP_POINTS, MIN_TRIP_POINTS));
  tripPointsWrapper.innerHTML = ``;
  data.forEach((point) => {
    const tripPoint = new TripPoint(point);
    tripPointsWrapper.appendChild(tripPoint.render());
  });
});

filtersData.forEach((it) => {
  const filter = new Filter(it);
  tripFiltersWrapper.appendChild(filter.render());
});

tripPointsData.forEach((point) => {
  const tripPoint = new TripPoint(point);
  const tripPointEdit = new TripPointEdit(point);
  tripPointsWrapper.appendChild(tripPoint.render());

  tripPoint.onClick = () => {
    tripPointEdit.render();
    tripPointsWrapper.replaceChild(tripPointEdit.element, tripPoint.element);
    tripPoint.unrender();
  };

  tripPointEdit.onSubmit = () => {
    tripPoint.render();
    tripPointsWrapper.replaceChild(tripPoint.element, tripPointEdit.element);
    tripPointEdit.unrender();
  };

  tripPointEdit.onReset = () => {
    tripPoint.render();
    tripPointsWrapper.replaceChild(tripPoint.element, tripPointEdit.element);
    tripPointEdit.unrender();
  };
});
