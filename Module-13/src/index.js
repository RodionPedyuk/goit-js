'use strict';

import './styles.css';
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
  getData(searchValue, pageNumber).then(data => {
    const cards = refs.gallery.insertAdjacentHTML('beforeend', template(data));
    return cards;
  });
}

refs.input.addEventListener('submit', e => {
  e.preventDefault();
  console.log('checks');
  state.searchValue = e.target.query.value;
  state.pageNumber = 1;
  getDataGlobal(state.searchValue, state.pageNumber);
});

refs.btn.addEventListener('click', e => {
  state.pageNumber += 1;
  getDataGlobal(state.searchValue, state.pageNumber)
    .then(cards => refs.gallery.insertAdjacentHTML('beforeend', cards))
    .then(() => {
      const position = refs.btn.offsetTop;
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    });
});
