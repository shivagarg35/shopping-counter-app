import React, { Component } from 'react';

class Counter extends Component {
  
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

 


    render(){
        return ( 
        <div>
            <h4>Item #{this.props.counter.id}</h4>
            <button onClick={() => this.props.onDecrement(this.props.counter)} className='btn btn-secondary btn-sm'>Decrement</button>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className= 'btn btn-danger btn-sm m-2'>DELETE</button>
        </div>
        );
    }

    getBadgeClasses = () => {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount = () => {
    
        return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
    }
}
 
export default Counter;