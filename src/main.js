import {
  MIN_TRIP_POINTS,
  MAX_TRIP_POINTS,
  filtersDataMock,
  tripPointsDataMock,
} from './data/data';
import {getRandomNumber} from './utils/util';
import makeFilter from './make-filter';
import makeTripPoint from './make-trip-point';
import render from './utils/render';

const tripFiltersWrapper = document.querySelector(`.trip-filter`);
const tripPointsWrapper = document.querySelector(`.trip-day__items`);

tripFiltersWrapper.addEventListener(`change`, () => {
  const pointsLength = getRandomNumber(MIN_TRIP_POINTS, MAX_TRIP_POINTS);
  const tripPointsData = tripPointsDataMock.slice(0, pointsLength);
  render(tripPointsData, makeTripPoint, tripPointsWrapper, true);
});

render(filtersDataMock, makeFilter, tripFiltersWrapper);
render(tripPointsDataMock, makeTripPoint, tripPointsWrapper);

