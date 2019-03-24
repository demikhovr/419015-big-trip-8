import tripPointsData, {
  MIN_TRIP_POINTS,
  MAX_TRIP_POINTS
} from './data/trip-points';
import filtersData from './data/filters';
import {getRandomNumber} from './utils/util';
import TripPointComponent from './components/trip-point/trip-point';
import TripPointEditComponent from './components/trip-point-edit/trip-point-edit';
import Filter from './components/filter/filter';

const tripFiltersWrapper = document.querySelector(`.trip-filter`);
const tripPointsWrapper = document.querySelector(`.trip-day__items`);

const initTripPoint = (data) => {
  const tripPointComponent = new TripPointComponent(data);
  const tripPointEditComponent = new TripPointEditComponent(data);
  tripPointsWrapper.appendChild(tripPointComponent.render());

  tripPointComponent.onClick = () => {
    tripPointEditComponent.render();
    tripPointsWrapper.replaceChild(tripPointEditComponent.element, tripPointComponent.element);
    tripPointComponent.destroy();
  };

  tripPointEditComponent.onSubmit = (newTripPoint) => {
    tripPointComponent.update(newTripPoint);
    tripPointComponent.render();
    tripPointsWrapper.replaceChild(tripPointComponent.element, tripPointEditComponent.element);
    tripPointEditComponent.destroy();
  };

  tripPointEditComponent.onReset = () => {
    tripPointComponent.render();
    tripPointsWrapper.replaceChild(tripPointComponent.element, tripPointEditComponent.element);
    tripPointEditComponent.destroy();
  };
};

tripFiltersWrapper.addEventListener(`change`, () => {
  const data = tripPointsData.slice(0, getRandomNumber(MAX_TRIP_POINTS, MIN_TRIP_POINTS));
  tripPointsWrapper.innerHTML = ``;
  data.forEach(initTripPoint);
});

filtersData.forEach((it) => {
  const filter = new Filter(it);
  tripFiltersWrapper.appendChild(filter.render());
});

tripPointsData.forEach(initTripPoint);
