# NgKpMyVotes

[DEMO](http://ng-kp.irustam.ru/)

Каталог/менеджер просмотренных фильмов.

Приложение на Angular.  
Стили в SCSS.  
Информация хранится на сервере в JSON.  
С JSON работает через PHP.

Менее доделанный (функциональный) [аналог на React](https://github.com/hasan42/kp-my-votes).

Собирается инфомрация о просмотренных фильмах через [расширение для Chrome](https://github.com/hasan42/chrome-extension)

**Сделал:**
- отображение списка просмотренных фильмов;
- в фильмах указывается сиквелы/приквелы по порядку;
- отмечается какие из сиквелов/приквелов просмотренны;
- если фильм является сериалом - отображается количество сезонов и серий;
- можно отметить на каком сезоне и эпизоде остановился;
- возможность добавить новые фильмы через форму или ввиде JSON объекта.

**Доделать:**
- прелоадер;
- поправить верстку;
- поправить ссылки и якоря на фильмы;
- добавить импорт/экспорт JSON;
- переработать в JSON часть сиквелов (сделать отдельным файлом);
- поиск;
- (?) избавиться от PHP;
- (?) сделать систему аккаунтов.