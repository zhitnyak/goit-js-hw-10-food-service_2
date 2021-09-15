import './sass/main.scss';
import menu from './menu.json';
import cardTpl from './templates/menu-card.hbs';

const itemForCards = document.querySelector('.js-menu');
console.log(cardsMarkup);
const cardsMarkup = createCardsMarkup(menu);
function createCardsMarkup(el) {
  return el.map(cardTpl).join('');
}
itemForCards.insertAdjacentHTML('beforeend', cardsMarkup);
