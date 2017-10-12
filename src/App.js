import React, { Component } from 'react';

import Header from './components/Header'
import Form from './components/Form'
import TodoItem from './components/TodoItem'
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todoList: [
                { id: 1, taskName: 'Task 1'},
                { id: 2, taskName: 'Task 2'},
                { id: 3, taskName: 'Task 3'}
            ],
            nextId: 4
        };
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    addTask(taskName) {
        let todos = this.state.todoList.slice();
        todos.push({ id: this.state.nextId, taskName: taskName });
        this.setState({
            todoList: todos,
            nextId: ++this.state.nextId
        })
    }

    removeTask(id) {
        this.setState({
            todoList: this.state.todoList.filter((task, index) => task.id !== id)
        })
    }

    render() {

        return (
            <div className="app">
                <div className="todo-wrapper mdc-theme--dark">
                    <Header />
                    <Form addTask={ this.addTask } />
                    <ul className="mdc-list todo-list">
                        {
                            this.state.todoList.map(task => {
                                return (
                                    <TodoItem key={ task.id }
                                              id={ task.id }
                                              task={ task }
                                              removeTask={ this.removeTask } />
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
