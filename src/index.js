import React from "react";
import ReactDOM from "react-dom";
import {citations} from './Citation';
import {colors} from "./Color";
import './style.css'
import $ from "jquery";
//console.log(colors[2]);

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Next />
      </div>
    );
  }
}

class Next extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
       message: '',
       author: '',
       y: 0
    };
    this.getNember=this.getNember.bind(this);
  }
  getNember(){
    const x=Math.floor(Math.random()*(citations.length));
    const y=Math.floor(Math.random()*(colors.length))
    this.setState({
      message: citations[x]['quote'],
      author: citations[x]['author'],
      y: y
    });
    
    // jquery to handle body color 
    $('body').css({"background-color" : colors[y], "opacity":'0'});
    $('body').animate({opacity: '1'});
    // jquery for buttons color, faceb twit and next button
    $('#button').css({"background-color" : colors[y], "opacity":'0'});
    $('#button').animate({opacity: '1'});
    $('#twitbut').css({"background-color" : colors[y], "opacity":'0'});
    $('#twitbut').animate({opacity: '1'});
    $('#facebut').css({"background-color" : colors[y], "opacity":'0'});
    $('#facebut').animate({opacity: '1'});
  }
  //to beggin with first click automaticaly fired
  componentDidMount() {
    document.getElementById("button").click()
  }
  
  render(){
    return(
      <div className='container'>
        <div className='textContainer'>
          <div class="text-center">
            <h2 style={{color: colors[this.state.y]}}>
              <span>&#10077;</span>
              {this.state.message}
            </h2>
          </div>
          <div className='author'>
            <h4 style={{color: colors[this.state.y]}}>-{this.state.author}</h4>
          </div>
        </div>
        
        <div className='buttons'>
          <div>
          <a href='https://www.twitter.com/intent/tweet' target='_blanck'><button id="twitbut" type="button" class="btn btn-outline-primary">Twitter</button></a>
              <button id="facebut" type="button" class="btn btn-outline-primary">Facebook</button>
          </div>
            <button id="button" type="button" class="btn btn-outline-primary" onClick={this.getNember}>New citation</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("quote-box"));
