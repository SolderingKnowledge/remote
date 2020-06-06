import React, { useState} from 'react';

function Form({add}) {
    const [ value, setValue] = useState("");

    const onSubmit = e => {
        e.preventDefault();
        if(!value) return;
        add(value);
        setValue("");
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="add todo.." value={value} onChange={ e => {
                setValue(e.target.value);
            }} />
        </form>
    );
}

export default Form;
