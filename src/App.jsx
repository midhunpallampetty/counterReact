import {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './component/Todo';
import Counter from './component/Counter';


class App extends Component{
  state ={
    myStrings:'Iam fine thenks',
    myStrings2:'Test',
    testString:[12,8,7,6,9]

  };
  handleChange=()=>{
this.setState({
  myStrings:'Brototype',
})
  };
  render(){
    return(
      
      <div className="App">
                <Todo myStrings={this.state.myStrings}/>
                <Counter/>
{
/* <button className='btn1'onClick={this.handleChange}>Change Text</button> */
}
    
   
   
    </div>
   
    );
  }
}

export default App;
