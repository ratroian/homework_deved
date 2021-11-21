const list = document.querySelector('.todo-list');
const input = document.querySelector('.todo-input');
const priority = document.querySelector('.todo-priority');
const messageTemplate = document.querySelector('#list-item-template').content
const contentTemplate = messageTemplate.querySelector('.content');
const buttonTodoAdd = document.querySelector('.todo-add')
let messageElement;
let toDos;

const toLocal = () => {
    toDos = list.innerHTML
    localStorage.setItem('todos', toDos)
};

const showMessageSuccess = () => {
    contentTemplate.textContent = input.value
    messageElement = messageTemplate.cloneNode(true);
    list.appendChild(messageElement);
    toLocal();
};

buttonTodoAdd.onclick = function (evt) {
    evt.preventDefault();
    showMessageSuccess()
    input.value = '';
};

list.addEventListener('click', (event) => {
    let target = event.target;
    switch (target.id) {
        case ('priority'):
            target.parentNode.classList.toggle('red');
            toLocal();
            break;
        case ('edit'):
            target.parentNode.contentEditable = true;
            toLocal();
            break;
        case('remove'):
            target.parentNode.remove();
            toLocal();
            break;
        case ('done'):
            target.parentNode.classList.toggle('green');
            toLocal()
    };
});

if (localStorage.getItem('todos')) {
    list.innerHTML = localStorage.getItem('todos')
}