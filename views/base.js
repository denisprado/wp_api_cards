import {element_id} from "./../config";
export const elements = {
  searchForm: document
    .getElementById(element_id)
    .getElementsByClassName("search")[0],
  searchInput: document
    .getElementById(element_id)
    .getElementsByClassName("search__field")[0],
  searchRes: document
    .getElementById(element_id)
    .getElementsByClassName('results')[0],
  searchResList: document
    .getElementById(element_id)
    .getElementsByClassName("results__list")[0],
  searchResPages: document
    .getElementById(element_id)
    .getElementsByClassName("results__pages")[0]
};
console.log(elements);
export const elementStrings = {
    loader: 'loader'
};

export const renderLoader = parent => {
    const loader = `
        <div class="${elementStrings.loader}">
            <svg>
                <use href="/src/img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if (loader) loader.parentElement.removeChild(loader);
};