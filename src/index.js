import './sass/main.scss';
import menu from './menu.json';
import cardTpl from './templates/menu-card.hbs';

const body = document.querySelector('body');
const check = document.querySelector('#theme-switch-toggle');
const itemForCards = document.querySelector('.js-menu');

const cardsMarkup = createCardsMarkup(menu);
function createCardsMarkup(el) {
  // console.log(el);
  return el.map(cardTpl).join('');
}
itemForCards.insertAdjacentHTML('beforeend', cardsMarkup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

check.addEventListener('change', onChangeTheme);

const light = Theme.LIGHT;
const dark = Theme.DARK;
// localStorage.clear();
console.dir(check);
function onChangeTheme() {
  if (localStorage.getItem('Theme') === light) {
    // localStorage.setItem('Theme', light);

    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
  }
  if (localStorage.getItem('Theme') === dark) {
    // localStorage.setItem('Theme', dark);

    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
  }
  if (check.checked) {
    localStorage.setItem('Theme', dark);
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
    console.log(localStorage.setItem('Theme', dark));
  }
  if (!check.checked) {
    localStorage.setItem('Theme', light);
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');

    console.log(localStorage.setItem('Theme', light));
  }
}

console.log(body);
console.dir(check.value);
console.log(localStorage.getItem('Theme'));
