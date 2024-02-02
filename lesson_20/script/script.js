const rootNode = document.querySelector('#root');

for(let i = 0; i < 10; i++) {
    const pNode = document.createElement('p');
    pNode.innerText = i;
    pNode.classList.add('item');
    rootNode.append(pNode);
}

const img = document.createElement('img');
img.src = 'media/photo.png';
rootNode.append(img);


const firstNameNode = document.createElement('p');
const secondNameNode = document.createElement('p');
firstNameNode.innerText = 'Iryna';
secondNameNode.innerText = 'Yakymchuk';
const divNode = document.createElement('div');
divNode.append(firstNameNode, secondNameNode);
rootNode.append(divNode);

const words = [
    'bike',
    'bus',
    'car',
    'train'
];

const divWordsNode = document.createElement('div');
words.forEach(word => {
    const pElem = document.createElement('p');
    pElem.innerText = word;
    divWordsNode.append(pElem);  
})
rootNode.append(divWordsNode);