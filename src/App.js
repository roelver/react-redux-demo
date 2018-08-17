import React, { Component } from 'react';
import { connect } from 'react-redux';

import {increase, decrease, reset } from './actions/app';
import logo from './logo.svg';
import './App.css';
import Child, {preferredGreeting}  from './Child';
import Simple  from './Simple';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      oldCounter: undefined
    }
    this.handleIncreaseClick = this.handleIncreaseClick.bind(this);
    this.handleDecreaseClick = this.handleDecreaseClick.bind(this);
  }
  componentDidMount() {
    this.props.reset(1);
  }
  componentDidUpdate(prevProps) {
    if (this.props.counter !== prevProps.counter) {
      this.setState({oldCounter: prevProps.counter});
    }
  }
  handleResetClick() {
    this.props.reset(0);    
  }

  handleDecreaseClick(factor = 1) {
    const num = Math.ceil(Math.random() * 5);
    this.props.decrease(num * factor);
  }
  handleIncreaseClick(factor = 1) {
    const num = Math.ceil(Math.random() * 20);
    this.props.increase(num * factor);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <span className="headline">This is React running here</span>
          <span className="line">This is my child's preferred Greeting: {preferredGreeting}</span>
        </p>
        <div>
          <button className="bigger-button" onClick={() => this.handleResetClick()}>RESET</button>
          <button className="big-button" onClick={() => this.handleDecreaseClick(3)}>-</button>
          <span className="headline">The counter is: {this.props.counter}</span>
          <span className="headline">Previous value was: {this.state.oldCounter}</span>
          <button className="big-button" onClick={() => this.handleIncreaseClick(3)}>+</button>
        </div>
        <Simple text="Hello" color="red" space={`${this.props.counter/ 5}px`}/>
        <Simple text="Hi" color="blue" space={`${this.props.counter / 2}px`}/>
        <Simple text="Goodbye" color="#559" space={'22px'}/>
        <Simple text="See u" color="#9bc" space={`${this.props.counter / 10}px`}/>
        <Child greeting="1st child" decrease={this.handleDecreaseClick} increase={this.handleIncreaseClick}/>
        <Child greeting="2nd child" decrease={this.handleDecreaseClick} increase={this.handleIncreaseClick}/>
        <Child greeting="3rd child" decrease={this.handleDecreaseClick} increase={this.handleIncreaseClick}/>
        <Child greeting="4th child" decrease={this.handleDecreaseClick} increase={this.handleIncreaseClick}/>
        <Child greeting="5th child" decrease={this.handleDecreaseClick} increase={this.handleIncreaseClick}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}
export default connect(mapStateToProps, {increase, decrease, reset})(App);
