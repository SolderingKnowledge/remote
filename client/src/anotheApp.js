import React, {useEffect, useState} from 'react';
import './App.css';

function AnotherApp() {
    const [ count, setCount ] = useState(1);
    const [ {money, person}, setMoney ] = useState({money:10, person: 1});
    return (
        <h1 className="App">
            <h1>Person: {person}</h1>
            <h1>Money: {money}</h1>
            <button onClick={ () => {
                setMoney( obj => {
                    return {
                        ...obj,
                        money: obj.money + 10,
                        person: obj.person+1
                    }
                })
                setCount(counter => counter+100)

            }}>
                money&person
            </button>

            <div>
                <button onClick={() => setCount(counter => counter+1)}>increment: {count}</button>
            </div>
        </h1>
    );
}

export default AnotherApp;
