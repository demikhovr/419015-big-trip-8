export const getRandomNumber = (min, max, accuracy = 1) => {
  const randomNumber = Math.random() * (max - min + 1) + (min - 0.5);
  return Math.round(randomNumber * accuracy) / accuracy;
};
