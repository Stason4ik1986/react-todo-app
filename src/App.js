import React, { Component } from 'react';

import Header from './components/Header'
import Form from './components/Form'
import TodoItem from './components/TodoItem'
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todoList: [],
        };
        this.addTask = this.addTask.bind(this);
    }

    addTask(taskName) {
        this.setState({
            todoList: [...this.state.todoList, taskName],
        })
    }

    removeTask(index) {
        const copy = this.state.todoList.slice();
        this.setState({
            todoList: copy.filter((e, i) => {
                return i !== index;
            })
        });
    }

    render() {
        return (
            <div className="app">
                <div className="todo-wrapper mdc-theme--dark">
                    <Header />
                    <Form addTask={ this.addTask } />
                    <ul className="mdc-list todo-list">
                        {
                            this.state.todoList.map((item, i) => {
                                return (
                                    <TodoItem key={ i }
                                              task={ item }
                                              removeTask={ () => this.removeTask(i) } />
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
