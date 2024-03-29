Когда работаете с Flexbox, три основных свойства, которые часто используются для контроля распределения элементов внутри контейнера, это justify-content, align-items и flex-direction. Дополнительно, свойство gap позволяет управлять пространством между элементами.

justify-content: Это свойство управляет выравниванием элементов вдоль оси главной (main) внутри Flexbox-контейнера. Ось главная обычно соответствует горизонтальной оси.

.flex-container {
    justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
flex-start: Элементы выравниваются к началу контейнера.
flex-end: Элементы выравниваются к концу контейнера.
center: Элементы выравниваются по центру контейнера.
space-between: Элементы распределены с равным пространством между ними.
space-around: Элементы распределены с равным пространством вокруг них.
space-evenly: Элементы распределены с равным пространством вокруг и между ними.
align-items: Это свойство управляет выравниванием элементов вдоль оси поперечной (cross) внутри Flexbox-контейнера. Ось поперечная обычно соответствует вертикальной оси.

.flex-container {
    align-items: stretch | flex-start | flex-end | center | baseline;
}
stretch: Элементы растягиваются, чтобы заполнить контейнер.
flex-start: Элементы выравниваются к началу контейнера.
flex-end: Элементы выравниваются к концу контейнера.
center: Элементы выравниваются по центру контейнера.
baseline: Элементы выравниваются по базовой линии (основе текста).
flex-direction: Это свойство определяет направление оси главной внутри Flexbox-контейнера.

.flex-container {
    flex-direction: row | row-reverse | column | column-reverse;
}
row: Основная ось идет слева направо.
row-reverse: Основная ось идет справа налево.
column: Основная ось идет сверху вниз.
column-reverse: Основная ось идет снизу вверх.
gap: Это свойство добавлено в CSS Grid и Flexbox для управления пространством между элементами.

.flex-container {
    gap: 10px; /* Размер пространства между элементами */
}
С использованием этих свойств в сочетании, вы можете легко создавать гибкие макеты, контролировать распределение и выравнивание элементов внутри Flexbox-контейнера.