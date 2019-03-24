import {
  getRandomNumber,
  getRandomArrayItems,
} from '../utils/util';

export const MIN_TRIP_POINTS = 1;
export const MAX_TRIP_POINTS = 7;
const HOURS = 2;
const MINUTES = 40;
const SECONDS = 60;
const MILLISECONDS = 1000;

export const TripPointTypes = {
  'taxi': {
    label: `Taxi to`,
    icon: `🚕`,
    group: `transport`,
  },
  'bus': {
    label: `Bus to`,
    icon: `🚌`,
    group: `transport`,
  },
  'train': {
    label: `Train to`,
    icon: `🚂`,
    group: `transport`,
  },
  'ship': {
    label: `Ship to`,
    icon: `🛳`,
    group: `transport`,
  },
  'transport': {
    label: `Transport to`,
    icon: `🚊`,
    group: `transport`,
  },
  'drive': {
    label: `Drive to`,
    icon: `🚗`,
    group: `transport`,
  },
  'flight': {
    label: `Flight to`,
    icon: `✈`,
    group: `transport`,
  },
  'check-in': {
    label: `Check-in into`,
    icon: `🏨`,
    group: `place`,
  },
  'sightseeing': {
    label: `Sightseeing`,
    icon: `🏛`,
    group: `place`,
  },
  'restaurant': {
    label: `Visit the restaurant in`,
    icon: `🍴`,
    group: `place`,
  },
};

export const scheduleLocaleOptions = [`en-gb`, {hour: `numeric`, minute: `numeric`}];

const photoParams = {
  URL: `http://picsum.photos/`,
  WIDTH: 300,
  HEIGHT: 150,
  MIN: 1,
  MAX: 5,
};

const offersAmount = {
  MIN: 0,
  MAX: 2,
};

const descriptionsAmount = {
  MIN: 1,
  MAX: 3,
};

const price = {
  MIN: 10,
  MAX: 200,
};

export const destinations = [
  `Amsterdam`,
  `New York`,
  `Paris`,
  `Paris`,
  `Tokyo`,
  `Rome`,
  `Seoul`,
  `airport`,
  `hotel`,
];

const offers = [
  {
    id: 1,
    content: `add-luggage`,
    price: 20,
    checked: true,
  },
  {
    id: 2,
    content: `switch-to-comfort-class`,
    price: 30,
    checked: true,
  },
  {
    id: 3,
    content: `add-meal`,
    price: 40,
    checked: true,
  },
  {
    id: 4,
    content: `choose-seats`,
    price: 50,
    checked: true,
  },
];

const descriptions = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus`,
];

const getType = () => Object.keys(TripPointTypes)[getRandomNumber(Object.keys(TripPointTypes).length - 1)];
const getPhotoUrl = () => `${photoParams.URL}/${photoParams.WIDTH}/${photoParams.HEIGHT}?=${Math.random()}`;
const getPhotoUrls = () => new Array(photoParams.MAX).fill(null).map(getPhotoUrl);
const getDescriptions = () => getRandomArrayItems(descriptions, descriptionsAmount.MAX, descriptionsAmount.MIN).join(``);
const getOffers = () => getRandomArrayItems(offers, offersAmount.MAX, offersAmount.MIN);

const getTripPoint = (item, id) => ({
  id,
  day: `1 March`,
  type: getType(),
  destination: destinations[getRandomNumber(destinations.length - 1)],
  images: getPhotoUrls(),
  offers: getOffers(),
  description: getDescriptions(),
  schedule: {
    start: Date.now(),
    end: Date.now() + HOURS * getRandomNumber(MINUTES) * SECONDS * MILLISECONDS,
  },
  price: getRandomNumber(price.MAX, price.MIN),
  isFavorite: Boolean(getRandomNumber()),
});

export default new Array(MAX_TRIP_POINTS)
  .fill(null)
  .map(getTripPoint);
