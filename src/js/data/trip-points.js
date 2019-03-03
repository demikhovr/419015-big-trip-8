const MAX_TRIP_POINTS = 7;

const TripPointTypes = {
  TAXI: `taxi`,
  BUS: `bus`,
  TRAIN: `train`,
  SHIP: `ship`,
  TRANSPORT: `transport`,
  DRIVE: `drive`,
  CHECK_IN: `check-in`,
  SIGHTSEEING: `sightseeing`,
  RESTAURANT: `restaurant`,
};

const cities = [
  `Amsterdam`,
  `New York`,
  `Paris`,
  `Paris`,
  `Tokyo`,
  `Rome`,
];

const TripPointIcons = {
  TAXI: `🚕`,
  BUS: `🚌`,
  TRAIN: `🚂`,
  SHIP: `🛳`,
  TRANSPORT: `🚊`,
  DRIVE: `🚗`,
  FLIGHT: `✈`,
  CHECK_IN: `🏨`,
  SIGHTSEEING: `🏛`,
  RESTAURANT: `🍴`,
};

const getTripPoint = () => ({
  icon: `🚕`,
  title: `Taxi to Airport`,
  price: `&euro;&nbsp;20`,
  schedule: {
    start: `10:00`,
    end: `11:00`,
  },
  duration: `1h 30m`,
  offers: [
    {
      content: `Order UBER`,
      price: `+&euro;&nbsp;20`,
    },
    {
      content: `Upgrade to business`,
      price: `+&euro;&nbsp;20`,
    },
  ],
});

export default new Array(MAX_TRIP_POINTS)
  .fill(null)
  .map(getTripPoint);
