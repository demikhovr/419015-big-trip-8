export const getRandomNumber = (max = 1, min = 0, accuracy = 1) => {
  const randomNumber = Math.random() * (max - min + 1) + (min - 0.5);
  return Math.round(randomNumber * accuracy) / accuracy;
};

export const getRandomArrayItems = (array, max, min = 0) => {
  const randomItems = new Set();
  const amount = getRandomNumber(max, min);

  while (randomItems.size < amount) {
    const item = array[getRandomNumber(array.length - 1)];
    randomItems.add(item);
  }

  return [...randomItems];
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template.trim();
  return newElement.firstChild;
};
