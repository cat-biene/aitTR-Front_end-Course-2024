/*const btnNode = document.querySelector("#btn");
let number = 0;
btnNode.innerText = number;

btnNode.addEventListener("click", ({target}) => {
    number++;
    target.innerText = number;
});

btnNode.addEventListener("mouseover", ({target}) => {
    number++;
    target.innerText = number;
});*/

// Выбираем HTML-элемент формы с идентификатором "addForm" и сохраняем его в переменной formNode
const formNode = document.querySelector("#addForm");

// Создаем пустой массив с именем tasks для хранения заголовков задач
const tasks = [];

// Добавляем слушатель событий к formNode для события "submit"
/*formNode.addEventListener("submit", (event) => {
    // Предотвращаем стандартное поведение отправки формы (предотвращает отправку HTTP-запроса)
    event.preventDefault();

    // Получаем значение поля ввода с именем "title" из отправленной формы
    const title = event.target.title.value;

    // Добавляем извлеченный заголовок в массив tasks
    tasks.push(title);

    // Выводим обновленный массив tasks в консоль
    console.log(tasks);

    // Сбрасываем значения полей формы к их значениям по умолчанию
    event.target.reset();
})*/

formNode.addEventListener("submit", (event) => {
    // Предотвращаем стандартное поведение отправки формы (предотвращает отправку HTTP-запроса)
    event.preventDefault();
    const title = event.target.title.value;
    const employee = event.target.employee.value;
    const price = +event.target.price.value;
    tasks.push({title, employee, price});
    console.log(tasks);
    event.target.reset();
})