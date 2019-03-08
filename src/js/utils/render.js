export default (data, templateCallback, container, clearContainer) => {
  if (clearContainer) {
    container.innerHTML = ``;
  }

  const templateString = data.map(templateCallback).join(``);
  container.insertAdjacentHTML(`beforeend`, templateString);
};
