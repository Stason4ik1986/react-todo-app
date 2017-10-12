import React, { Component } from 'react';

import '../App.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { taskName: '' };
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e) {
        this.setState({ taskName: e.target.value });
    }

    addTask(task) {
        if (task.length) {
            this.props.addTask(task);
            this.setState({ taskName: '' });
        }
    }

    handleKeyPress = (event) => {
        let task = this.state.taskName;
        if (event.key === 'Enter') {
            this.addTask(task);
        }
    };

    render() {
        return (
            <div className="form-wrapper">
                <div className="mdc-textfield">
                    <input type="text"
                           id="my-textfield"
                           className="mdc-textfield__input"
                           placeholder="What are you working on?"
                           value={ this.state.taskName }
                           onChange={ this.handleChange }
                           onKeyPress={ this.handleKeyPress } />
                </div>
                <button className="mdc-button mdc-button--stroked mdc-button--dense mdc-ripple-upgraded"
                        onClick={ () => this.addTask(this.state.taskName) }>Add task</button>
            </div>
        );
    }
}

export default Form;
