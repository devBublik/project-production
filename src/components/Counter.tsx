import React, {useState} from 'react';
import classes from './Counter.module.scss';
import classNames from "./Counter.module.scss";
export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button className={classNames.button} onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={() => setCount(count - 1)}>Delete</button>
            {count}
        </div>
    );
};