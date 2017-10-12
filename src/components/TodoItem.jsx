import React, { Component } from 'react';
import '../App.css';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.removeTask = this.removeTask.bind(this);
    }

    removeTask(id) {
        this.props.removeTask(id);
    }

    render() {
        const { id, task } = this.props;
        return(
            <li className="mdc-list-item">
                { task.taskName }
                <button className="mdc-button mdc-button--stroked mdc-button--dense mdc-ripple-upgraded"
                        onClick={(e) => this.removeTask(id)}>Delete task</button>
            </li>

        )
    }
}

export default TodoItem;