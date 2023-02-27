import React, {ChangeEvent, useState} from 'react';
import {observer} from "mobx-react-lite";
import todo from "./store/todo";
import LoadableImage from "./LoadableImage/LoadableImage";

const Todo = () => {

    let [title, setTitle] = useState("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onclickHandler = () => {
        todo.add(title)
        setTitle('')
    }

    return (
        <div>
            <button onClick={()=>{todo.fetchTodos()}}> fetch </button>
            {todo.todos.map(el=>
                <div key={el.id}>
                    <input type={'checkbox'} checked={el.completed} onChange={()=>todo.completeTodo(el.id)}/>
                    <span>{el.title}</span>
                    <button onClick={()=>todo.removeTodo(el.id)}>x</button>
                </div>
            )}
            <input value={title} onChange={onChangeHandler}/>
            <button onClick={onclickHandler}>add</button>
            <div><button onClick={()=>todo.getCat()}>get cat</button></div>
            {todo.img && <LoadableImage src={todo.img}/> }
        </div>
    );
};

export default observer(Todo);