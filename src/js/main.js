import tripPointsData from './data/trip-points';
import filtersData from './data/filters';
import makeFilter from './make-filter';
import makeTripPoint from './make-trip-point';
import render from './utils/render';

const tripFiltersWrapper = document.querySelector(`.trip-filter`);
const tripPointsWrapper = document.querySelector(`.trip-day__items`);

tripFiltersWrapper.addEventListener(`change`, () => {
  render(tripPointsData, makeTripPoint, tripPointsWrapper, true);
});

render(filtersData, makeFilter, tripFiltersWrapper);
render(tripPointsData, makeTripPoint, tripPointsWrapper);

