import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            todo: ''
        };
        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, todo } = this.state;

        return (
            <form>
                <label>Name</label>
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                />
                <label>Todo</label>
                <input  
                    type="text"
                    name="todo"
                    value={todo}
                    onChange={this.handleChange}
                />
                <input 
                    type="button"
                    className="submitBtn"
                    value="Submit"
                    onClick={this.submitForm}
                />
            </form>
        );
    }
}

export default Form;