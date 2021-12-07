import {View} from '../view/view';
import {Model} from "../model/model";

export class Controller {
    constructor() {
        this.items = {
            list: document.querySelector('.todo-list'),
            input: document.querySelector('.todo-input'),
            priority: document.querySelector('.todo-priority'),
            messageTemplate: document.querySelector('#list-item-template').content,
            buttonTodoAdd: document.querySelector('.todo-add'),
            messageElement: '',
            toDos: '',
        }
        this.items.contentTemplate = this.items.messageTemplate.querySelector('.content');
        this.userView = new View(this);
        this.userModel = new Model(this.userView);
        this.userModel.initeState();
        this.items.buttonTodoAdd.addEventListener('click', this.showMessageSuccessHandler)
        this.items.list.addEventListener('click', (event) => this.checkEventHandler(event));
    }
    showMessageSuccessHandler = (event) => {
        event.preventDefault();
        const value = this.items.input.value;
        this.userModel.addTask(value);
        this.items.input.value = '';
    }
    checkEventHandler = (event) => {
        let target = event.target;
        const id = +target.dataset.id;
        switch (target.id) {
            case ('priority'):
                target.parentNode.classList.toggle('red');
                break;
            case ('edit'):
                target.parentNode.contentEditable = true;
                break;
            case('remove'):
                this.userModel.deleteTask(id);
                break;
            case ('done'):
                target.parentNode.classList.toggle('green');
        }
    }
}