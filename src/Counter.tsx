import React from 'react';
import counter from "./store/counter";
import {observer} from "mobx-react-lite";

const Counter = observer(() => {


    return (
        <div>
            <div>{counter.sum}</div>
            {'count = ' + counter.count}
            <div>{counter.total}</div>
            <div>
                <button onClick={()=>counter.increment()}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">+</button>
                <button onClick={()=>counter.decrement()}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 mx-2 rounded">-</button>
                <button onClick={()=>counter.allSum()}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">sum</button>
            </div>
        </div>
    );
})

export default Counter;