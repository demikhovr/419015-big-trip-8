import tripPointsData, {
  MIN_TRIP_POINTS,
  MAX_TRIP_POINTS
} from './data/trip-points';
import filtersData from './data/filters';
import {getRandomNumber} from './utils/util';
import makeFilter from './templates/make-filter';
import makeTripPoint from './templates/make-trip-point';
import render from './utils/render';

const tripFiltersWrapper = document.querySelector(`.trip-filter`);
const tripPointsWrapper = document.querySelector(`.trip-day__items`);

tripFiltersWrapper.addEventListener(`change`, () => {
  const data = tripPointsData.slice(0, getRandomNumber(MAX_TRIP_POINTS, MIN_TRIP_POINTS));
  render(data, makeTripPoint, tripPointsWrapper, true);
});

render(filtersData, makeFilter, tripFiltersWrapper);
render(tripPointsData, makeTripPoint, tripPointsWrapper);
