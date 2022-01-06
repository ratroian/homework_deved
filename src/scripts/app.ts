import '../styles/main.css';

const todos: NodeListOf<HTMLElement> = document.querySelectorAll('.todo');
const allStatus: NodeListOf<HTMLElement> = document.querySelectorAll('.status');
let draggableTodo = null;
const btns: NodeListOf<HTMLElement> = document.querySelectorAll('[data-target-modal]');
const closeModals: NodeListOf<HTMLElement> = document.querySelectorAll('.close-modal');
const overlay: HTMLElement = document.getElementById('overlay');
const todoSubmit: HTMLElement = document.getElementById('todo_submit');
const closeBtns: NodeListOf<HTMLElement> = document.querySelectorAll('.close');

function dragStart(): void {
    draggableTodo = this;
    setTimeout(():void => {
        this.style.display = 'none';
    }, 0);
}

function dragEnd(): void {
    draggableTodo = null;
    setTimeout(():void => {
        this.style.display = 'block';
    }, 0);
}

function dragEnter(): void {
    this.style.border = '1px dashed #ccc';
}

function dragLeave(): void {
    this.style.border = 'none';
}

const dragOver = (event): void => {
    event.preventDefault();
};

function dragDrop(): void {
    this.style.border = 'none';
    this.appendChild(draggableTodo);
}

btns.forEach((btn:HTMLButtonElement): void => {
    btn.addEventListener('click', ():void => {
        document.querySelector(btn.dataset.targetModal).classList.add('active');
        overlay.classList.add('active');
    });
});

closeModals.forEach((btn): void => {
    btn.addEventListener('click', (): void => {
        const modal: HTMLElement = btn.closest('.modal');
        modal.classList.remove('active');
        overlay.classList.remove('active');
    });
});

window.onclick = (event): void => {
    if (event.target === overlay) {
        const modals: NodeListOf<HTMLElement> = document.querySelectorAll('.modal');
        modals.forEach((modal) => modal.classList.remove('active'));
        overlay.classList.remove('active');
    }
};

const createTodo = () => {
    const todoElem: HTMLElement = document.createElement('div');
    const inputValue = (<HTMLInputElement>document.getElementById('todo_input')).value;
    const txt: Text = document.createTextNode(inputValue);

    todoElem.appendChild(txt);
    todoElem.classList.add('todo');
    todoElem.setAttribute('draggable', 'true');

    const span: HTMLElement = document.createElement('div');
    const spanText: Text = document.createTextNode('\u00D7');
    const noStatusZone: HTMLElement = document.querySelector('#no_status');
    span.classList.add('close');
    span.appendChild(spanText);

    todoElem.appendChild(span);

    noStatusZone.appendChild(todoElem);

    span.addEventListener('click', ():void => {
        span.parentElement.style.display = 'none';
    });

    todoElem.addEventListener('dragstart', dragStart);
    todoElem.addEventListener('dragend', dragEnd);

    (<HTMLInputElement>document.getElementById('todo_input')).value = '';
    overlay.classList.remove('active');
};

closeBtns.forEach((btn) => {
    btn.addEventListener('click', (): void => {
        btn.parentElement.style.display = 'none';
    });
});

todoSubmit.addEventListener('click', createTodo);

allStatus.forEach((status) => {
    status.addEventListener('dragover', dragOver);
    status.addEventListener('dragenter', dragEnter);
    status.addEventListener('dragleave', dragLeave);
    status.addEventListener('drop', dragDrop);
});

todos.forEach((todo) => {
    todo.addEventListener('dragstart', dragStart);
    todo.addEventListener('dragend', dragEnd);
});
