import React from "react";
import ReactDOM from "react-dom";
import TodoItem from "./TodoItem.Component";
import AddTodo from "./TodoAddItem.Component";
import { Button, ControlLabel, FormControl, Form, Grid, Row, Col } from 'react-bootstrap';


class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
        }
        this.renderItem = this.renderItem.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }
    renderItem() {
        this.state.todos.map((item, index) => {
            return <TodoItem item="item" key={index} />
        })
    }
    addTodo() {
        this.state.todos.push({
            item: ReactDOM.findDOMNode(this.refs.item.refs.input).value,
            edit: false
        });
        this.setState({
            todos: this.state.todos
        })
        ReactDOM.findDOMNode(this.refs.item.refs.input).value = "";
    }
    deleteTodo(index) {
        this.state.todos.splice(index, 1);
        this.setState({
            todos: this.state.todos
        })
    }
    update(index) {
        this.state.todos[index].item = ReactDOM.findDOMNode(this.refs.item.refs.input).value;
        this.state.todos[index].edit = false;

        this.setState({
            todos: this.state.todos
        })
        ReactDOM.findDOMNode(this.refs.item.refs.input).value = ""
    }
    edit(index) {
        ReactDOM.findDOMNode(this.refs.item.refs.input).value = this.state.todos[index].item;
        let edit = this.state.todos[index].edit = true
        this.setState({
            todos: this.state.todos
        })
    }
    cancel(index) {
        this.state.todos[index].edit = false
        this.setState({
            todos: this.state.todos
        });
        ReactDOM.findDOMNode(this.refs.item.refs.input).value = ""
    }
    isEdit(index) {
        if (this.state.todos[index].edit) {
            return <div>
             <Button bsStyle="primary" onClick={() => {
                    this.cancel(index)
                } }>Cancel</Button>
                 <Button bsStyle="success" onClick={() => {
                    this.update(index)
                } }>Save </Button>
            </div>
        }
        else {
            return <div>
                <Button bsStyle="danger" onClick={() => {
                    this.deleteTodo(index)
                } }>Delete</Button>
               <Button bsStyle="info" onClick={() => {
                    this.edit(index)
                } }>Edit </Button>
            </div>
        }

    }
    render() {
        return (
            <div>
                <AddTodo addTodo={this.addTodo} ref="item" value={this.refs.item} />
            <Grid>
                    <Row className="show-grid">
                        <Col xs={2} md={2}> </Col>
                        <Col xs={8} md={8}>
                            <ul>
                                {this.state.todos.map((item, index) => {
                                    return <div key={index}>
                                        <TodoItem item={item} />
                                        {this.isEdit(index)}
                                    </div>
                                })}
                            </ul>
                        </Col>
                        <Col xs={2} md={2}> </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Todo;
 