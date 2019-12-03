'use strict';
import fetchCountries from './fetchCountries.js';
import debounce from 'lodash.debounce';
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
import './styles.css';
import 'pnotify/dist/PNotifyBrightTheme.css';

const refs = {
  input: document.querySelector('.input'),
  cardWrapper: document.querySelector('.cardWrapper'),
};

function languagesList(item) {
  let languages = '';
  item.map(item => (languages += `<li class="countryItems">${item.name}</li>`));
  return languages;
}

refs.input.addEventListener(
  'input',
  debounce(e => {
    fetchCountries(e.target.value)
      .then(data => {
        if (data.length === 1) {
          data.map(item => {
            const countryCard = `<li class="country">${
              item.name
            }</li><li class="countryItems">Capital: ${
              item.capital
            }</li><li class="countryItems">Population: ${
              item.population
            }</li><ul class="countryItems">Languages: ${languagesList(
              item.languages,
            )}</ul><img class="flags"src=${item.flag}>`;
            return (refs.cardWrapper.innerHTML = countryCard);
          });
        }
        if (data.length >= 10) {
          PNotify.error({
            title: 'Too many matches found.',
            text: 'Please enter more specific query',
            hide: true,
          });
        }
        if (data.length <= 10 && data.length >= 2) {
          let countryCard = '';
          data.map(item => {
            countryCard += `<li>${item.name}</li>`;
            refs.cardWrapper.innerHTML = countryCard;
          });
        }
      })
      .catch(console.error('server err 404'));
  }),
  500,
);
