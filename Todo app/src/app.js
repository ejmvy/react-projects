import React, { Component } from 'react';
import Table from './table';
import Form from './form';


class App extends Component {
    state = {
        todos: []
    };

    removeTodo = index => {
        const { todos } = this.state;

        this.setState({
            todos: todos.filter((todo, i) => {
                return i !== index;
            })
        })
    }

    handleSubmit = todo => {
        this.setState({todos: [...this.state.todos, todo]})
    }


    render() {
        const {todos} = this.state;


        return (
            <div className="container">
                <h1 className="title">The Japan Checklist</h1>
                <div className="top">
                    <h4 className="desc">Write out your todos and who should complete them!</h4>
                    <div className="form-area">
                        <Form 
                            handleSubmit={this.handleSubmit} 
                        />
                    </div>

                </div>
                <div className="table-area">
                    <Table 
                        todoData={todos}
                        removeTodo={this.removeTodo}    
                    />
                </div>
                
                
            </div>
        );
    }
}


export default App;