import React from "react";
import ReactDom from "react-dom";
import Todo from "./Todo.Component"
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            input: "",
            users: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.SaveTodo = this.SaveTodo.bind(this);
        this.handlerChange = this.handlerChange.bind(this);
    }
    addTodo() {
        this.state.users.push({
            name: this.state.input,
            age: this.state.age,
            email: this.state.email
        })
        this.setState({
            users: this.state.users
        });
        this.refs.name.value = "";
        this.refs.age.value = "";
        this.refs.email.value = "";
        
    }
    deleteTodo(index) {
        this.state.users.splice(index, 1);
        this.setState({
            users: this.state.users
        })
    }
    SaveTodo() {
        this.setState({
            input: this.refs.name.value,
            age:this.refs.age.value,
            email:this.refs.email.value
        });
    }
    handlerChange(value) {
        this.SaveTodo(value)
    }
    render() {
        return (
            <div>
              <Todo />
            </div>
        )
    }
}
ReactDom.render(<App name="Mohammad Arsalan Rajput" />, document.getElementById("react-container"));