const containerNode = document.querySelector('.img_container');

/*containerNode.addEventListener('click', () => {
    if(containerNode.classList.contains('clicked')){
        containerNode.classList.remove('clicked');
    }else{
        containerNode.classList.add('clicked');
    }
})*/

containerNode.addEventListener('click', () => {
        containerNode.classList.toggle('clicked');
})

const imagesNodeList = document.querySelectorAll('.small_cards img');


imagesNodeList.forEach(imgNode => {
    imgNode.addEventListener('click', event => {
        const bigCardNode = document.querySelector('.big_cards');
        bigCardNode.src = event.target.src;
        imagesNodeList.forEach(elem => elem.classList.remove('selected'));
        event.target.classList.add('selected');
    })  
})

