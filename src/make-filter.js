export default ({name, checked = false}) => {
  const filterName = name.toLowerCase();
  const caption = filterName[0].toUpperCase() + filterName.slice(1).toLowerCase();
  const checkedState = checked ? `checked` : ``;

  return `<input
    type="radio"
    id="filter-${filterName}"
    name="filter"
    value="${filterName}"
    ${checkedState}
    >
  <label
    class="trip-filter__item"
    for="filter-${filterName}"
  >
    ${caption}
  </label>`;
};
