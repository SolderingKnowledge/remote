import React, {Component} from 'react';
import './App.css';
import Todo from "./components/Todo";
import Form from "./components/TodoForm";
import axios from "axios";

class App extends Component {
    state = {
        todos: [],
    };

    UNSAFE_componentWillMount(){
            axios.get("http://localhost:5000/todo").then((res) => {
                console.log("response", res.data)
                this.setState({todos: res.data})
            });
            // fetch("http://localhost:5000/todo").then(res => res.json()).
            //     then( res => {
            //         this.setState({todos: res})
            //     });
    }
    add = (text)=> {
        axios.post("http://localhost:5000/todo/add", {
            text: text,
        }).then((res) => {
            const newTodos = [...this.state.todos, res.data];
            this.setState({todos: newTodos});
        });
    }

    complete = index => {
        const newTodos = [...this.state.todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        this.setState({todos: newTodos});
    }
    delette = id => {
        axios.delete(`http://localhost:5000/todo/${id}`)
            .then((res) => {
            const newTodos= this.state.todos.filter(todo => todo._id !== res.data._id );
            this.setState({todos: newTodos});
        });

        // const newTodos = [...this.state.todos];
        // newTodos.splice(index, 1);
        // this.setState({todos: newTodos});
    }

    edit = (index) => {
        const newTodos = [...this.state.todos];
        newTodos[index].edit = true;
        this.setState({todos: newTodos});
    }
    change = (value, index) => {
        const newTodos = [...this.state.todos];
        newTodos[index].text = value;
        this.setState({todos: newTodos});
    }

    save = (index)=>{
        const newTodos = [...this.state.todos];
        newTodos[index].edit = !newTodos[index].edit;
        // if(newTodos[index].isCompleted) newTodos[index].isCompleted=false // optional after edit
        this.setState({todos: newTodos});
    }
    render(){
        return (
            <div className="App">
                {
                    this.state.todos.length ? this.state.todos.map((todo, idx) => {
                        return (
                            <Todo key={idx} id={todo._id}
                                todo={todo} complete={this.complete}
                                delette={this.delette} edit={this.edit}
                                change={this.change} save={this.save}
                            /> 
                        )
                    }): ""
                }
                <Form add={this.add} />
            </div>
        );
    }
}

export default App;
