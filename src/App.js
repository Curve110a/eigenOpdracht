import React, { Component } from 'react';
import Timer from './components/Timer';
import './App.css';

class App extends Component {
  state = {
    seconds: 10,
    finished: false
  }
  setCounter() {
      return {seconds: this.state.seconds = document.getElementById('timeInput').value}
    // console.log(document.getElementById('timeInput').value);
  }
render(){
  const { seconds, finished } = this.state
  return (
    <div className="App">
      <Timer timer={this.state.count}/>
  <h1>Counter: {seconds} </h1>
  <input type="number" id="timeInput" onInput={this.setCounter.bind(this)} />
    </div>
  );
}
}

export default App;
