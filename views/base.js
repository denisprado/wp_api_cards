import {path} from "./../config";
export const elements = {
    searchForm: document.querySelector(`#${path} .search`),
    searchInput: document.querySelector(`#${path} .search .search__field`),
    searchRes: document.querySelector(`#${path} .results`),
    searchResList: document.querySelector(`#${path} .results__list`),
    searchResPages: document.querySelector(`#${path} .results__pages`)
};

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