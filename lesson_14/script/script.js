const formNode = document.querySelector('#addForm');
const todos = [];

formNode.addEventListener('submit', (event) => {
    event.preventDefault();
    const {title, priority} = event.target;
    //const title = event.target.title;
    //const priority = event.target.priority;
    //console.log(title.value);
    //console.log(priority.value);
    const todo = {
        title: title.value, 
        priority: priority.value
    };
    todos.push(todo);
    rerender();
    event.target.reset();
})

function getTodoNode(title, priority){
    const container = document.createElement('div');
    const titleNode = document.createElement('p');
    // const priorityNode = document.createElement('p');
    
    titleNode.innerText = title;
    // priorityNode.innerText = priority;

    container.classList.add('item');
    container.append(titleNode, /*priorityNode*/);

    const bgColors = {
        0: "green",
        1: "pink",
        2: "red"
    };

    container.style.backgroundColor = '#7abc9c';
    return container;
}

function rerender(){
    const container = document.querySelector('#todosContainer');
    container.innerText = '';
    todos.forEach(({title, priority}) => container.append(getTodoNode(title, priority)));
}

const targetNode = document.querySelector('.target');

// targetNode.style.backgroundColor = "#2980b 9";
// targetNode.style.width = "400px";

// targetNode.setAttribute('class', 'marked target');

/*setInterval(() => {
    targetNode.classList.toggle('marked');
}, 500); */