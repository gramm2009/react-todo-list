import React from 'react';
import ReactDom from 'react-dom';

const container = document.getElementById('root');

function sendMessage(){
  
  arr.push({name: 'Sara', 
            message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, voluptatem ipsa? Fugiat, iure unde.',
            hours:new Date().getHours(),
            minutes:new Date().getMinutes(),
            seconds:new Date().getSeconds()
  
})
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: arr};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: arr
    });
  }

  render() {
    return (
      <div>
        <h2>DISPLAY {this.state.date.arr}.</h2>
        <ArrObj/>
      </div>
    );
  }
}

let arr = [];

const ArrObj=(props) => arr.map(el => 
  <div class="character">                                
    <p style={{background:'silver', width:300+"px",position:'relative'}}>
       <b>{ el.name }:</b> 
       <span style={{marginRight:60+"px"}}>{ el.message }</span>  
       <span style={{position:'absolute', right:0}}>{el.hours}:{el.minutes}:{el.seconds}</span>
    </p>
  </div>);

const content = <button onClick={sendMessage}>Send message</button>

ReactDom.render(
  <div>
  <Clock />
  {content}
  </div>
    , container);
