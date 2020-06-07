import React, {Component} from 'react';
import './App.css';
import Todo from "./components/Todo";
import Form from "./components/TodoForm";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//Custom imports
import { fetchData, addData, deleteData } from "./actions/index";

class App extends Component {

    UNSAFE_componentWillMount(){
            this.props.fetchData();
            // axios.get("http://localhost:5000/todo").then((res) => {
            //     this.setState({todos: res.data})
            // });
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

    // complete = id => {
    //     axios.put(`http://localhost:5000/todo/complete/${id}`).then((res) => {
    //         this.setState({todos: res.data});
    //     })
    // }
    
    delette = id => {
        // axios.delete(`http://localhost:5000/todo/${id}`)
        //     .then((res) => {
        //     const newTodos= this.state.todos.filter(todo => todo._id !== res.data._id );
        //     this.setState({todos: newTodos});
        // });
        this.props.deleteData(id);
    }

    // edit = (id) => {
    //     axios.put(`http://localhost:5000/todo/${id}`).then((res) => {
    //         this.setState({todos: res.data});
    //     })
    // }
    // change = (value, id) => {
    //     const newTodos = this.state.todos.map( todo => {
    //         if(todo._id === id){
    //             todo.text = value;
    //         }
    //         return todo;
    //     })
    //     this.setState({todos: newTodos});
    // }

    // save = ( id )=>{
    //     let text = ""
    //     for(let found of this.state.todos){
    //         if(found._id === id){
    //             text = found.text;
    //         }
    //     }
    //     axios.post(`http://localhost:5000/todo/${id}`, {
    //         text: text
    //     }).then(res => {
    //         this.setState({todos: res.data});
    //     });
    // }
    render(){
        console.log("aikol-todos", this.props.todos)
        return (
            <div className="App">
                {
                    this.props.todos.length && this.props.todos[0]._id ? this.props.todos.map((todo, idx) => {
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

const mapStateToProps = state => {
    return {todos: state.todos}
}
const mapDispatchToProps = dispatch => bindActionCreators({
    fetchData,
    addData,
    deleteData
}, dispatch);

export default connect( mapStateToProps, mapDispatchToProps)(App);
