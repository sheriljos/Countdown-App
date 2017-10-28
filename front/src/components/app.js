import React, {Component} from 'react';
import Clock from './clock.js'
import '../app.css'
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component{
  //constructor allows us to add a local state wihin our class
  constructor(props){
    //props refers to inherited data from any parent component
    super(props);
    this.state = {
      deadline : 'December 25, 2017',
      newDeadline : ''
    }
    this.changeDeadline = this.changeDeadline.bind(this);
    this.ChangeInput = this.ChangeInput.bind(this);
  }

  ChangeInput(event){
    this.setState({newDeadline : event.target.value})
  }

  changeDeadline(){
    //never mutate the state directly, use only setState to mutate state
    this.setState({deadline:this.state.newDeadline})
  }

  render(){
    return(
      <div className = "App">
        <div className = "App-title">
        Countdown to {this.state.deadline}
        </div>
        <div>
          <Clock
            deadly = {this.state.deadline}
          />
        </div>
        <Form inline>
        <FormControl
        placeholder="Add a new day"
        className="Input-field"
        onChange = {this.ChangeInput}/>
        <br />
        <br />
        <Button className="btn btn-primary" onClick = {this.changeDeadline}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App;
