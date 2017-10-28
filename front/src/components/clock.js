import React, {Component} from 'react';
import '../app.css';

class Clock extends Component{
  constructor(props){
    super(props);
    this.state = {
      'days' : 0,
      'hours' : 0,
      'minutes' : 0,
      'seconds' : 0
    }
    this.getTimeUntill = this.getTimeUntill.bind(this);
  }

  componentWillMount(){
    this.getTimeUntill(this.props.deadly);
  }

  componentDidMount(){
    setInterval(()=>this.getTimeUntill(this.props.deadly), 1000)
  }

  getTimeUntill(deadly){
    const time = Date.parse(deadly) - Date.parse(new Date());
    console.log(time);

    const newSeconds = Math.floor((time/1000) % 60);
    const newMinutes = Math.floor((time/1000/60) %60);
    const newHours = Math.floor(time/(1000*60*60) % 24);
    const newDays = Math.floor(time/(1000*60*60*24))

     console.log('newSeconds', newSeconds, 'newMinutes', newMinutes, 'newHours', newHours, 'newDays', newDays );

    this.setState({
      days : newDays,
      hours : newHours,
      minutes : newMinutes,
      seconds : newSeconds
    });
  }

  render(){
    return(
      <div>
        <div className="Clock-days">{this.state.days} Days</div>
        <div className="Clock-hours">{this.state.hours} Hours</div>
        <div className="Clock-minutes">{this.state.minutes} Minutes</div>
        <div className="Clock-seconds">{this.state.seconds} Seconds</div>
      </div>
    )
  }
}

export default Clock;
