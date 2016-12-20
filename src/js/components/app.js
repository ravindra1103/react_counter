import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super (props);
    this.state = {
      counter: 0
    };
    this._increment = this._increment.bind(this);
    this._decrement = this._decrement.bind(this);
  }
  _increment() {
    let { counter } = this.state;
    ++counter;
    this.setState({
      counter
    });
  }
  _decrement() {
    let { counter } = this.state;
    --counter;
    this.setState({
      counter
    });
  }
  render () {
    let { counter } = this.state;
    return (
      <div>
        <h1>Counter</h1>
        <p>{counter}</p>
        <button onClick={this._increment}>Increment</button>
        <button onClick={this._decrement}>Decrement</button>
      </div>
    );
  }
}
