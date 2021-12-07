// import axios from 'axios';
// const URL = 'https://jsonplaceholder.typicode.com/todos';

export class Model {
    constructor(view) {
        this.todos = [
            // {
            //     id: 1,
            //     completed: true,
            //     priority: false,
            //     title: 'create'
            // },
            // {
            //     id: 2,
            //     completed: false,
            //     priority: true,
            //     title: 'title'
            // }
        ];
        this.view = view;
        // this.getTodos();
        // this.addTaskServ();
    }

    addTask = (value) => {
        this.todos.push(value);
        console.log(value)
        this.view.showMessageSuccess(this.todos);
    }

    initeState = () => {
        this.view.showMessageSuccess(this.todos);
    }

    deleteTask = (id) => {
        const index = this.todos.findIndex(item => item.id === id);
        this.todos.splice(index - 1, 1);
        this.view.showMessageSuccess(this.todos);
    }

    // async getTodos() {
    //     try {
    //         const response = await axios.get(`${URL}?_limit=5`);
    //         this.data = response.data;
    //         const arrayToDos = response.data;
    //         console.log(arrayToDos)
    //         this.view.showMessageSuccess(this.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    //
    // async addTaskServ(todo) {
    //     try {
    //         const response = await axios.post(URL, todo);
    //         if (200 <= response.status && response.status < 300) {
    //             if (response.data.id) this.data.push(response.data);
    //         }
    //         this.view.showMessageSuccess(this.data);
    //         console.log(this.data)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // async removeTask(id) {
    //     try {
    //         const response = await axios.delete(`${URL}/${id}`);
    //         if (200 <= response.status && response.status < 300) {
    //             let index = this.todos.findIndex(todo => todo.id === id);
    //             this.todos.splice(index, 1);
    //         }
    //         this.view.showMessageSuccess(this.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}