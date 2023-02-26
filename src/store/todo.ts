import {makeAutoObservable} from "mobx";
import {v1} from 'uuid';

class Todo {
    todos = [
        {id: v1(), title: 'Сходи в магазин', completed: false},
        {id: v1(), title: 'Посмотри TV', completed: false},
        {id: v1(), title: 'Ложись спать', completed: false},
        {id: v1(), title: 'wake up', completed: false},
    ];

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo: {id: string, title: string, completed: boolean}) {
        this.todos.push(todo)
    }

    add(title:string){
        const todo = {id: v1(), title, completed:false}
        this.todos = [...this.todos, todo]
    }

    removeTodo(id: string) {
        this.todos = this.todos.filter(el => el.id !== id)
    }

    completeTodo(id:string){
        console.log('change checkbox')
        this.todos = this.todos.map(el=> el.id === id ? {...el, completed: !el.completed} : el)
    }

    fetchTodos(){
        console.log('fetch')
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => this.todos = [...this.todos, ...json])
    }

}

export default new Todo();
