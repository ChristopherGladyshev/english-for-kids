### english-for-kids

[Реализованное приложение](https://web-mralderson.github.io/english-for-kids/)

[dev-branch](https://github.com/web-mrAlderson/english-for-kids/tree/dev)


## Для старта 
1. npm i   
- установит необходимые зависимости 
2. npm run dev
- стартанет приложение в дев режиме на port:3000
3. npm run build
- соберет прод
## Описание страниц

1. Главная страница приложения
* на главной странице приложения размещаются ссылки на страницы с категориями слов
* минимальное количество категорий - восемь
* каждая ссылка содержит тематическую картинку и название категории
* ссылки дублируются в выезжающем боковом меню, которое открывается и скрывается по клику на иконку в левом верхнем углу страницы
* на главной странице приложения и на страницах категорий есть переключатель Train/Play (тренировка/игра)



2. Страница категории 
* страница категории содержит название категории и карточки со словами соответствующей тематики 
* минимальное количество карточек со словами в каждой категории - восемь   
* каждая карточка содержит тематическую картинку и слово на английском языке  
* при клике по карточке звучит произношение слова на английском языке  
* на каждой карточке есть кнопка, при клике по которой карточка переворачивается. На оборотной стороне карточки размещается перевод слова. При клике по оборотной стороне карточки ничего не происходит, произношение слова не звучит.
* обратный поворот карточки на лицевую сторону происходит автоматически, когда курсор мыши перемещается за её границы

3. Страница со статистикой 
* описание страницы находится в критериях оценивания (Hacker scope)

## Работа приложения

Приложение работает в режиме тренировки и в режиме игры.  
Описание работы приложения в данных режимах находится в критериях оценивания (Basic scope и Advanced scope соответственно).
При загрузке приложения или перезагрузке страницы приложение открывается в режиме тренировки.
Переключение между тренировкой и игрой происходит при клике по переключателю Train/Play. 