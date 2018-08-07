import Search from "./models/Search";
import * as searchView from "./views/searchView";
import {
  elements,
  renderLoader,
  clearLoader
} from "./views/base";


/** Global state of App //
- Search objetct
*/

const state = {};

export const controlSearch = async () => {
  // 1) Get query from view
  const query = searchView.getInput();

  // Novo objeto de busca
  state.search = new Search(query);

  // Prepara a UI para os resultados
  searchView.clearInput();
  searchView.clearResults();
  renderLoader(elements.searchRes);

  // BUsca os posts

  // 4) Search for recipes
  await state.search.getResults();

  // 5) Render results on UI
  clearLoader();
  searchView.renderResults(state.search.result);
};

controlSearch();
elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});


elements.searchResPages.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline');
  if (btn) {
      const goToPage = parseInt(btn.dataset.goto, 10);
      searchView.clearResults();
      searchView.renderResults(state.search.result, goToPage);
  }
});