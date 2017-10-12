import React, { Component } from 'react';

import '../App.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { taskName: '' };
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    handleChange(ev) {
        this.setState({ taskName: ev.target.value });
    }

    addTask(event) {
        event.preventDefault();
        if (this.state.taskName.length) {
            this.setState({ taskName: '' });
            this.props.addTask(this.state.taskName);
        }
    }

    render() {
        return (
            <form onSubmit={ this.addTask } className="form-wrapper">
                <div className="mdc-textfield">
                    <input type="text"
                           id="my-textfield"
                           className="mdc-textfield__input"
                           placeholder="What are you working on?"
                           value={ this.state.taskName }
                           onChange={ this.handleChange } />
                </div>
                <button type="submit" 
                    className="mdc-button mdc-button--stroked mdc-button--dense mdc-ripple-upgraded">
                    Add task
                </button>
            </form>
        );
    }
}

export default Form;
