export class View  {
    constructor (controllerArgument) {
        this.UserController = controllerArgument
    }

    showMessageSuccess = (todos) => {
        this.UserController.items.list.innerHTML = '';
        todos.forEach((item) => {
            console.log(item)
            if (item.title) {
                this.UserController.items.contentTemplate.textContent = item.title;
            } else {
                this.UserController.items.contentTemplate.textContent = item;
                console.log(item)
            }
            this.UserController.items.messageElement = this.UserController.items.messageTemplate.cloneNode(true);
            if (item.completed) {
                this.UserController.items.messageElement.querySelector('li').classList.add('green');
            }
            this.UserController.items.messageElement.querySelector('li').dataset.id = item.id;

            this.UserController.items.list.appendChild(this.UserController.items.messageElement);
        });
    }
}