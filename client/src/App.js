import React, {Component} from 'react';
import './App.css';
import Todo from "./components/Todo";
import Form from "./components/TodoForm";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//Custom imports
import { 
    fetchData,
    addData,
    deleteData,
    editData,
    changeData,
    saveData,
    completeTodo,
    incrementPriority,
    decrementPriority,
} from "./actions/index";

class App extends Component {
    // state = {
    //     todos: []
    // }
    UNSAFE_componentWillMount(){
            this.props.fetchData();

            // axios
            // axios.get("http://localhost:5000/todo").then((res) => {
            //     this.setState({todos: res.data})
            // });

            // fetch
            // fetch("http://localhost:5000/todo").then(res => res.json()).
            //     then( res => {
            //         this.setState({todos: res})
            //     });
    }
    add = (text)=> {
        // axios.post("http://localhost:5000/todo/add", {
        //     text: text,
        // }).then((res) => {
        //     const newTodos = [...this.state.todos, res.data];
        //     this.setState({todos: newTodos});
        // });

        this.props.addData(text);
    }

    complete = id => {
        // axios.put(`http://localhost:5000/todo/complete/${id}`).then((res) => {
        //     this.setState({todos: res.data});
        // })

        this.props.completeTodo(id);
    }
    
    delette = id => {
        // axios.delete(`http://localhost:5000/todo/${id}`)
        //     .then((res) => {
        //     const newTodos= this.state.todos.filter(todo => todo._id !== res.data._id );
        //     this.setState({todos: newTodos});
        // });

        this.props.deleteData(id);
    }

    edit = (id) => {
        // axios.put(`http://localhost:5000/todo/${id}`).then((res) => {
        //     this.setState({todos: res.data});
        // })

        this.props.editData(id);
    }


    change = (value, id) => {
        // const newTodos = this.state.todos.map( todo => {
        //     if(todo._id === id){
        //         todo.text = value;
        //     }
        //     return todo;
        // })
        // this.setState({todos: newTodos});

        const newTodos = this.props.todos.map( todo => {
            if(todo._id === id){
                todo.text = value;
            }
            return todo;
        })

        this.props.changeData(newTodos);
    }

    save = ( id )=>{
        // let text = ""
        // for(let found of this.state.todos){
        //     if(found._id === id){
        //         text = found.text;
        //     }
        // }
        // axios.post(`http://localhost:5000/todo/${id}`, {
        //     text: text
        // }).then(res => {
        //     this.setState({todos: res.data});
        // });
        let text = "";
        for(let found of this.props.todos){
            if(found._id === id){
                text = found.text;
            }
        }
        this.props.saveData(id, text);
    }

    increment = (id) => {
        console.log("increment: ", id);
        this.props.incrementPriority(id);
    }

    decrement = (id) => {
        console.log("decrement: ", id);
        this.props.decrementPriority(id);
    }

    render(){
        // return (
        //     <div className="App">
        //         {
        //             this.state.todos.length && this.state.todos[0]._id ? this.state.todos.map((todo, idx) => {
        //                 return (
        //                     <Todo key={idx} id={todo._id}
        //                         todo={todo} complete={this.complete}
        //                         delette={this.delette} edit={this.edit}
        //                         change={this.change} save={this.save}
        //                     /> 
        //                 )
        //             }): ""
        //         }
        //         <Form add={this.add} />
        //     </div>
        // );
        return (
            <div className="App">
                {
                    this.props.todos.length && this.props.todos[0]._id ? this.props.todos.map((todo, idx) => {
                        return (
                            <Todo key={idx} id={todo._id}
                                todo={todo} complete={this.complete}
                                delette={this.delette} edit={this.edit}
                                change={this.change} save={this.save}
                                priority={todo.priority}
                                increment={this.increment}
                                decrement={this.decrement}
                            /> 
                        )
                    }): ""
                }
                <Form add={this.add} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {todos: state.todos}
}
const mapDispatchToProps = dispatch => bindActionCreators({
    fetchData,
    addData,
    deleteData,
    editData,
    changeData,
    saveData,
    completeTodo,
    incrementPriority,
    decrementPriority,

}, dispatch);

export default connect( mapStateToProps, mapDispatchToProps)(App);
// export default App;
