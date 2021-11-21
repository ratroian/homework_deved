const list = document.querySelector('.todo-list');
const input = document.querySelector('.todo-input');
const priority = document.querySelector('.todo-priority');
const messageTemplate = document.querySelector('#list-item-template').content
const contentTemplate = messageTemplate.querySelector('.content');
const buttonTodoAdd = document.querySelector('.todo-add')
let messageElement;

const showMessageSuccess = () => {
    contentTemplate.textContent = input.value
    messageElement = messageTemplate.cloneNode(true);
    list.appendChild(messageElement);
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
            break;
        case ('edit'):
            target.parentNode.contentEditable = true;
            break;
        case('remove'):
            target.parentNode.remove()
            break;
        case ('done'):
            target.parentNode.classList.toggle('green')
    };
});