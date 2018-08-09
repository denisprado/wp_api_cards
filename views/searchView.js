import { elements } from "./base"; // elementos da UI
import { resPerPage as resPP, element_id } from "./../config";

export const getInput = () => elements.searchInput.value; // retorna o valor inserido no campo de busca//

export const clearInput = () => {
  elements.searchInput.value = "";
  elements.searchResPages.value = "";
};

export const clearResults = () => {
  elements.searchResList.innerHTML = "";
  elements.searchResPages.innerHTML = "";
  console.log(elements);
};

export const renderPost = post => {
  let markup;
  if (element_id === "insta") {
    markup = `
            <div class="card">
                <a class="results__link card-img-top" target="_blank" href="${post.link}">
                    <figure class="results__fig">
                        <img src="${post.images.standard_resolution
                          .url}" title="${post.caption.text}" alt="${post
      .caption.text}" class="img-responsive">
                    </figure>
                </a>
                <div class="card-body">
                    <p class="results__caption card-text">${post.caption.text.substring(
                      0,
                      post.caption.text.substring(0, 144).lastIndexOf(" ")
                    )} (...) <a class="results__link" target="_blank" href="${post.link}">Leia tudo</a></p>
                </div>
            </div>
    `;
  } else {
    markup = `
      <div class="card">
          <a class="results__link card-img-top" href="${post.guid.rendered}">
              <img src="${!post.better_featured_image
                ? "/src/img/logo.png"
                : post.better_featured_image
                    .source_url}?resize=300%2C200" alt="${post.title
      .rendered}" class="img-responsive">
          </a>
          <div class="card-body">
              <h4 class="card-title results__name">${post.title.rendered}</h4>
              <p class="card-text">${post.excerpt.rendered}</p>
          </div>
      </div>
      `;
  }
  elements.searchResList.insertAdjacentHTML("beforeend", markup);
};

// type: 'prev' or 'next'
const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === "prev"
  ? page - 1
  : page + 1}>
        <span>Página ${type === "prev" ? page - 1 : page + 1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === "prev"
              ? "left"
              : "right"}"></use>
        </svg>
    </button>
`;

const renderButtons = (page, numResults, resPerPage) => {
  const pages = Math.ceil(numResults / resPerPage);

  let button;
  if (page === 1 && pages > 1) {
    // Only button to go to next page
    button = createButton(page, "next");
  } else if (page < pages) {
    // Both buttons
    button = `
            ${createButton(page, "prev")}
            ${createButton(page, "next")}
        `;
  } else if (page === pages && pages > 1) {
    // Only button to go to prev page
    button = createButton(page, "prev");
  }

  elements.searchResPages.insertAdjacentHTML("afterbegin", button);
};

export const renderResults = (posts, page = 1, resPerPage = resPP) => {
  // renderiza resultado da página
  const start = (page - 1) * resPerPage;
  const end = page * resPerPage;
  console.log(posts);
  if (element_id === "insta") {
    posts.data.slice(start, end).forEach(renderPost);
  } else {
    posts.slice(start, end).forEach(renderPost);
  }

  // render pagination buttons
  renderButtons(page, posts.length, resPerPage);
};
