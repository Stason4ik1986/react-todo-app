import React, { Component } from 'react';
import '../App.css';

class TodoItem extends Component {

    render() {
        const { task, removeTask } = this.props;
        return(
            <li className="mdc-list-item">
                { task }
                <button className="mdc-button mdc-button--stroked mdc-button--dense mdc-ripple-upgraded"
                        onClick={ removeTask }>
                    Delete task
                </button>
            </li>
        )
    }
}

export default TodoItem;