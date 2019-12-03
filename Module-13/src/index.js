'use strict';

import getData from './fetchData.js';
import template from './template.hbs';

const refs = {
  input: document.querySelector('.search-form'),
  btn: document.querySelector('button[type="submit"]'),
  gallery: document.querySelector('.gallery'),
};

const state = {
  searchValue: '',
  pageNumber: 1,
};
function getDataGlobal(searchValue, pageNumber) {
  const data = getData(searchValue, pageNumber);
  let card = template(data);
  refs.gallery.insertAdjacentHTML('beforeend', card);
}
refs.input.addEventListener('submit', e => {
  e.preventDefault();
  state.searchValue = e.target.query.value;
  state.pageNumber = 1;
  getDataGlobal(state.searchValue, state.pageNumber);
});

refs.btn.addEventListener('click', e => {
  state.pageNumber += 1;
  getDataGlobal(state.searchValue, state.pageNumber);
});
