import './sass/main.scss';
import menu from './menu.json';
import cardTpl from './templates/menu-card.hbs';

const body = document.querySelector('body');
const check = document.querySelector('#theme-switch-toggle');
const itemForCards = document.querySelector('.js-menu');

const cardsMarkup = createCardsMarkup(menu);
function createCardsMarkup(el) {
  return el.map(cardTpl).join('');
}
itemForCards.insertAdjacentHTML('beforeend', cardsMarkup);

check.addEventListener('change', onChangeTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const light = Theme.LIGHT;
const dark = Theme.DARK;
const saveLocalStorage = localStorage.getItem('Theme');

if (saveLocalStorage === 'dark-theme') {
  check.checked = true;
  body.classList.add('dark-theme');
}
function onChangeTheme() {
  if (check.checked) {
    localStorage.setItem('Theme', dark);
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
  } else {
    localStorage.setItem('Theme', light);
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
  }
}
