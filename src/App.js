import './App.scss';
import React from 'react';
import Input from './Components/Input';
import ToDo from './Components/ToDo';


class App extends React.Component {
  state = {
    list: [],
    inputItem: ''
  }


  changeHandler = (event) => {
    this.setState({
      inputItem: event.target.value
    })
  }

  addItem = (inputName) => {
    const newItem = {
      name: inputName,
      id: Date.now()
    }
    const list = [...this.state.list];
    list.push(newItem);
    this.setState({
      list,
      inputItem: ''
    })
  }

  removeItem = (id) => {
    const list = [...this.state.list];
    const updateList = list.filter((elem) => elem.id !== id);
    this.setState({
      list: updateList
    })
  }


  render() {
    return (
      <div className='container app-container mt-5'>
        <h1>Todo App</h1>
        <p>New Todo</p>
        <Input
          addTask={this.addItem}
          inputItem={this.state.inputItem}
          changeHandler={this.changeHandler}
          clearInput={this.clearInput}
        />
        {this.state.list.map((todo) => {
          return (
            <ToDo
              key={todo.id}
              todo={todo}
              removeItem={this.removeItem}
            />
          )
        })}
        <p>There is {this.state.list.length} pending tasks</p>
      </div>
    )
  }
}

export default App;
