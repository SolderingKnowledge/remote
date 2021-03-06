import React from 'react';
function Todo({todo, id, complete, delette, edit, change, save, priority, increment, decrement}) {
    return (
        <div className="todo-box">
            <h1 style={{textDecoration: todo.isCompleted?
                "line-through": ""
            }}>
                {todo.edit? 
                        <span>
                            <input placeholder={todo.text} value={todo.text}
                                onChange={(e)=> {
                                e.preventDefault();
                                change(e.target.value, id);
                                }
                            } 
                            />
                            <button onClick={() => save(id)}>
                                save
                            </button> 
                        </span>
                        : todo.text
                }
                {todo.edit? "":
                    <span>
                        <button onClick={()=> complete(id)}>
                            {todo.isCompleted? "completed": "complete"}
                        </button>
                        <button onClick={()=> edit(id)}>
                            edit
                        </button>
                        <button onClick={()=> delette(id)}>
                            x
                        </button>
                    </span>
                }   
            </h1>
            <div>Priority: <button onClick={()=> increment(id)}>+</button><span>{priority}</span><button onClick={()=> decrement(id)}>-</button></div>
        </div>
    );
}

export default Todo;