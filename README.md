Тестовое задание

https://valentin93z.github.io/test-task/

При выполнении использовались: React, MaterialUI.


Верстка

1. Верстка блока

Если времен больше чем на 1 строчку, то в конце строчки появляется кнопка "ещё..." при нажатии на которую раскрываются скрытые времена.
Если под ценой нет надписи "1200₽ на причале" - цена выровнена посередине относительно копки "подробнее".

2. Таблица на странице

Вариант 1: Удаляем горизонтальный скролл, указав свойство box-sizing: border-box для блока с классом .blog, а так же добавив перенос слов с помощью word-break: break-word.

Вариант 2: Т.к. таблица не имеет хедера и если контекст позволяет - адаптировать таблицу под одну колонку для мобильных устройств.


JS

1. Билеты на событие

При заказе доступны 2 новых типа билетов: льготный и групповой, каждый имеет свое название и цену в зависимости от события. При отправке заказа вся инфрмация попадает в таблицу с соответствующими параметрами.
В таблицу добавлена отдельная колонка с индивидуальными кодами для каждого билета.

2. Время из A в B

На странице пользователь выбрав направление, время и количество билетов сможет посчитать итоговые значения: общую стоимость, время в пути. При клике на кнопку "Посчитать" выводится результат с направлением, временем в пути, временем отправления и временем прибытия в часовом поясе пользователя.
