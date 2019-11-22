import './styles.css';
import arr from './menu.json';
import template from './template.hbs';

const ul = document.querySelector('.js-menu');

const string = template(arr);
ul.innerHTML = string;

const body = document.querySelector('body');
const switcher = document.querySelector('input.js-switch-input');

// body.classList.add(localStorage.getItem('theme'));

if (localStorage.getItem('theme') === 'dark-theme') {
  body.classList.add('dark-theme');
  switcher.checked = true;
}

switcher.addEventListener('click', () => {
  if (switcher.checked === true) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  }
  if (switcher.checked === false) {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
  }
});
