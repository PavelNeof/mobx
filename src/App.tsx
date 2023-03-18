import React from 'react';
import './App.css';
import Counter from "./Counter";
import Todo from "./Todo";
import Checkbox from "./Checkbox";


function App() {
    return (
        <div className="App">
            <Counter/>
            <Todo/>
            <Checkbox labelTxt={'Checkbox 1'} id={'1'}/>
            <Checkbox labelTxt={'Checkbox 2'} id={'2'}/>
        </div>
    );
}

export default App;
