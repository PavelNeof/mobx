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
        <div className='border border-amber-500'>
            <button onClick={()=>{todo.fetchTodos()}}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> fetch </button>
            {todo.todos.map(el=>
                <div key={el.id}>
                    <input type={'checkbox'} checked={el.completed} onChange={()=>todo.completeTodo(el.id)}/>
                    <span>{el.title}</span>
                    <button onClick={()=>todo.removeTodo(el.id)}>x</button>
                </div>
            )}
            <div><input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Input"
                value={title} onChange={onChangeHandler}/></div>
            <div><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1 rounded"
                         onClick={onclickHandler}>add</button></div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={()=>todo.getCat()}>get cat</button>
            {todo.img && <LoadableImage src={todo.img}/> }
        </div>
    );
};

export default observer(Todo);