
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: ["slkdfj"],
      input: "",
    };
  }
  render() {
    const handleInput = (e) => {
      const todo = e.target.value;
      this.setState({ input: todo })
    }
    const addTodo = (e) => {
      this.setState({ todos: [...this.state.todos, this.state.input] });
      this.setState({ input: "" })
    }
    const deleteTodo = (index) => {
      const remainingTodos = [...this.state.todos]
      const deletedTodo = remainingTodos.splice(index, 1)
      console.log(deletedTodo)
      this.setState({ todos: remainingTodos })
    }
    return (
      <div id="App">
        <input type="text" name="" id="" onChange={(e) => handleInput(e)} value={this.state.input} />
        <button onClick={(e) => addTodo()}>Add</button>
        <ul>
          {this.state.todos.map((todo, index) => <div><li key={new Date()}>{todo}</li><button onClick={() => deleteTodo(index)}>delete</button></div>)}
        </ul>
      </div>
    );
  }
}
export default App;
