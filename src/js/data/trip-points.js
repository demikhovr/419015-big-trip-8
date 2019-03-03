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
  taxi: {
    title: `Taxi to`,
    icon: `🚕`,
  },
  bus: {
    title: `Bus to`,
    icon: `🚌`,
  },
  train: {
    title: `Train to`,
    icon: `🚂`,
  },
  ship: {
    title: `Ship to`,
    icon: `🛳`,
  },
  transport: {
    title: `Transport to`,
    icon: `🚊`,
  },
  drive: {
    title: `Drive to`,
    icon: `🚗`,
  },
  flight: {
    title: `Flight to`,
    icon: `✈`,
  },
  checkIn: {
    title: `Check-in into`,
    icon: `🏨`,
  },
  sightseeing: {
    title: `Sightseeing`,
    icon: `🏛`,
  },
  restaurant: {
    title: `Restaurant in`,
    icon: `🍴`,
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

const destinations = [
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
    content: `Add luggage`,
    currency: `+&euro;`,
    price: 20,
  },
  {
    content: `Switch to comfort class`,
    currency: `+&dollar;`,
    price: 30,
  },
  {
    content: `Add meal`,
    currency: `+&euro;`,
    price: 40,
  },
  {
    content: `Choose seats`,
    currency: `+&dollar;`,
    price: 50,
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

const getTripPoint = () => ({
  type: getType(),
  destination: destinations[getRandomNumber(destinations.length - 1)],
  photos: getPhotoUrls(),
  offers: getOffers(),
  description: getDescriptions(),
  schedule: {
    start: Date.now(),
    end: Date.now() + HOURS * getRandomNumber(MINUTES) * SECONDS * MILLISECONDS,
  },
  price: `&euro;&nbsp;${getRandomNumber(price.MAX, price.MIN)}`,
});

export default new Array(MAX_TRIP_POINTS)
  .fill(null)
  .map(getTripPoint);
