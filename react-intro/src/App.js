import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem';

class App extends Component {

  state = {
    inputValue: '',
    todos: [], //array of todo items[string]
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //push new item to todo array
    const newTodoItem = this.state.inputValue;
    this.setState({
      // todos: this.state.todos.push(newTodoItem)
      todos: [...this.state.todos, newTodoItem],
      inputValue: '',
    })
    //clear value of input
  }

  handleInputChange = (e) => {
    console.log(e.target.value)

    this.setState({
      inputValue: e.target.value,
    })
  }
  handleDeleteItem = (item) => {
    //delete item
    console.log('delete ' + item)
    this.setState({
      todos: this.state.todos.filter((todoItem) => {
        if (todoItem === item) {
          return false;
        } else {
          return true;
        }
      })
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Add item'
            value={this.state.inputValue}
            onChange={this.handleInputChange} />
          <button type='submit'>Add</button>
        </form>
        <div className='totoList'>
          {this.state.todos.map((item, index) => {
            return (
              <div key={index}>
                <div>{item}
                  <button onClick={() => {
                    this.handleDeleteItem(item);
                  }}>Delete</button></div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
