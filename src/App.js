import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';


class App extends Component {

state = { 
  counters: [
      { id:1, value: 0 },
      { id:2, value: 0 },
      { id:3, value: 0 },
      { id:4, value: 0 }
  ]
 }

handleDelete = (counterterID) => {
    const counters = this.state.counters.filter(c => c.id !== counterterID);
    this.setState({ counters });
};

handleReset = () => {
    const counters = this.state.counters.map( c => {
        c.value = 0;
        return c;
    });

    this.setState ({ counters });
};

handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value = (counters[index].value === 0) ? 0 : counters[index].value - 1;
    this.setState({ counters });
};


handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value ++ ;
    this.setState({ counters });
};

render(){
  return (
    <React.Fragment>
    <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length }/>
    <main className='containner'>
      <Counters
        counters={this.state.counters}
        onReset={this.handleReset} 
        onDecrement={this.handleDecrement}
        onIncrement={this.handleIncrement}
        onDelete={this.handleDelete}  
      />
    </main>
    </React.Fragment>
  );
}
}

export default App;
