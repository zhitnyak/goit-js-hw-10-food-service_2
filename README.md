**Читать на других языках: [Русский](README.md), [Українська](README.ua.md).**

# Критерии приема

- Создан репозиторий `goit-js-hw-10-food-service`.
- При сдаче домашней работы есть две ссылки: на исходные файлы и рабочую страницу на GitHub Pages.
- При посещении рабочей страницы (GitHub Pages) задания, в консоли нету ошибок и предупреждений.
- Имена переменных и функций понятные, описательные.
- Проект собран с помощью `Parcel`.
- Код отформатирован `Prettier`.

# Задание

Создай страницу меню с возможностью выбора темы для сервиса заказа еды.
[Ссылка на демо видео](https://take.ms/RxIlv).

![Превью страницы](preview.jpg)

- Обязательно используй
  [parcel-project-template](https://github.com/goitacademy/parcel-project-template) для сборки и
  деплоя проекта.
- Массив объектов блюд лежит в [menu.json](./src/menu.json)

## Тема

Добавь функционал изменения темы при нажатии на чекбокс. По умолчанию тема светлая.

## Шаблонизация

Используя шаблонизатор [Handlebars](https://handlebarsjs.com/) Для иконок используется библиотека
`Material Icons`.

Ниже указана разметка элемента меню которая должна получаться по шаблону (данные будут разные для
каждого объекта).

```html
<li class="menu__item">
  <article class="card">
    <img
      src="https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg"
      alt="Картофель, запеченный в мундире"
      class="card__image"
    />
    <div class="card__content">
      <h2 class="card__name">Картофель, запеченный в мундире</h2>
      <p class="card__price">
        <i class="material-icons"> monetization_on </i>
        100 кредитов
      </p>

      <p class="card__descr">
        Ароматный, сытный, шипящий домашний картофель, фаршированный сметанно-беконной начинкой, —
        это очень простой и очень эффектный способ накормить большое количество человек, практически
        не потратив на готовку ни сил, ни времени. Обычную картошку при желании тут можно заменить
        на сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий красный перец.
      </p>

      <ul class="tag-list">
        <li class="tag-list__item">Картофель</li>
        <li class="tag-list__item">Чеснок</li>
        <li class="tag-list__item">Сметана</li>
        <li class="tag-list__item">Бекон</li>
        <li class="tag-list__item">Твердый сыр</li>
        <li class="tag-list__item">Зеленый лук</li>
      </ul>
    </div>

    <button class="card__button button">
      <i class="material-icons button__icon"> shopping_cart </i>
      В корзину
    </button>
  </article>
</li>
```
