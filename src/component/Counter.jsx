import React,{ Component } from "react";
import './Counter.css'
class Counter extends Component{
    state={
        counter:0,
    };
 onDecrement =()=>{
this.setState({
    counter:this.state.counter-1,
})
 }
 onIncrement =() =>{
    this.setState({
        counter:this.state.counter+1,
    })
 }
    render(){
        return <div>
            <h1>Counter Component</h1>
            <h1>{this.state.counter}</h1>
        <button onClick={this.onDecrement} className="Counter-plus">-</button>
        <button onClick={this.onIncrement} className="Counter-minus">+</button>
        </div>
    }
}
export default Counter;