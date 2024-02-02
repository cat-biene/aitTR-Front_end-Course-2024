// methods for getting elements(Node)

const elem = document.querySelector("p");

/*
// reading the text contect Node
console.log(elem.toU.innerText);

// reading the text contect Node
elem.innerText = "The new text";
*/
// elem.innerText = elem.innerText.toUpperCase() + '!!!';

// создать div который содержит
// h2 заголовок
// p текст

/*function creatTopic(title, text, link) {
    // creation div
    const container = document.createElement("div");

    // creation h2
    const titleNod = document.createElement("h2");

    // creation p
    const textNod = document.createElement("p");
    const linkNod = document.createElement('a')

    // filling h2 and p
    titleNod.innerText = title;
    textNod.innerText = text;
    linkNod.innerText = "anything...";

    // two ways
    // 1. universal
    // linkNod.setAttribute("href", link);

    // 2. easier
    linkNod.href = link;

    // adding h2 and p in the div
    container.append(titleNod, textNod, linkNod);

    return container;
}*/

// adding conteiner in the #root
/*const root = document.querySelector('#root');
const result = creatTopic(
    'Cats', 'Cats, known for their graceful demeanor and enigmatic charm, have been companions to humans for thousands of years.','https://www.google.com/'
);
root.append(result);*/
/*const array = [
    {
      title: "Заголовок 1",
      text: "Текст 1",
      link: "http://www.example1.com"
    },
    {
      title: "Заголовок 2",
      text: "Текст 2",
      link: "http://www.example2.com"
    },
    {
      title: "Заголовок 3",
      text: "Текст 3",
      link: "http://www.example3.com"
    }
  ];

  function render(topics) {
    const root = document.querySelector('#root');
    topics.forEach(({title, text, link}) => root.append(creatTopic(title, text, link)));
  }

  render (array);*/

  // создать функцию, которая получает в качестве аргументов название задачи и ее номер
// функция должна вывести следующую структуру
// getTask("сходить в бассейн", 12)
// <div>
//     <p>Номер задачи: 12</p>
//     <p>Задача: сходить в бассейн</p>
// </div>

function getTask(text, number) {  
    const conteiner = document.createElement('div');
    const textNod2 = document.createElement('p');
    const textNod1 = document.createElement('p');
    textNod1 = 'Номер задачи:' + number;
    textNod2.innerText = 'Задача:' + text;
    conteiner.append(textNod1, textNod2);
    return conteiner;
}

const tasks = [
    { title: "Заголовок 1", number: 42 },
    { title: "Заголовок 2", number: 17 },
    { title: "Заголовок 3", number: 99 },
    { title: "Заголовок 4", number: 23 },
    { title: "Заголовок 5", number: 7 }
  ]

const root = document.querySelector('#root');
tasks.forEach(({title, number}) => root.append(getTask(title, number)));
