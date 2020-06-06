import React from 'react';
function Todo({todo, index, complete, delette, edit, change, save}) {
    return (
        <h1 style={{textDecoration: todo.isCompleted?
            "line-through": ""
        }}>
            {todo.edit? 
                    <span>
                        <input placeholder={todo.text} value={todo.text}
                            onChange={(e)=> {
                             e.preventDefault();
                             change(e.target.value, index);
                            }
                        } 
                        />
                        <button onClick={() => save(index)}>
                            save
                        </button> 
                    </span>
                    : todo.text
            }
            {todo.edit? "":
                <span>
                    <button onClick={()=> complete(index)}>
                        {todo.isCompleted? "completed": "complete"}
                    </button>
                    <button onClick={()=> edit(index)}>
                        edit
                    </button>
                    <button onClick={()=> delette(index)}>
                        x
                    </button>
                </span>
            }   
        </h1>
    );
}

export default Todo;