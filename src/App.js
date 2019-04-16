import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './App.css';

class App extends Component {

  constructor(props)
  {
    super(props)
    this.state =
    {
      things: [],
      text: ''
    }

  this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event)
  {
    this.setState({ text: event.target.value });
  }

  preracunaj(text)
  {
    const cde = this.state.text.split(" ").length
    const kolkA = this.state.text.split( new RegExp( "a", "gi" ) ).length-1
    const kolkE = this.state.text.split( new RegExp( "e", "gi" ) ).length-1
    const kolkI = this.state.text.split( new RegExp( "i", "gi" ) ).length-1
    const kolkO = this.state.text.split( new RegExp( "o", "gi" ) ).length-1
    const kolkU = this.state.text.split( new RegExp( "u", "gi" ) ).length-1

    const text_all = "Text length: " + this.state.text.length + "<br />Word count: " + cde + "<br />How many letters A?" + kolkA + "<br />How many letters E?" + kolkE + "<br />How many letters I?" + kolkI + "<br />How many letters O?" + kolkO + "<br />How many letters U?" + kolkU;
    alert(text_all)
    this.setState({
      things: [...this.state.things, text_all],
      text: '',
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <textarea rows="30" cols="100" value={this.state.text} onChange={this.handleChange}>
          </textarea>
          <button onClick={() => this.preracunaj()}>
            Preračunaj
          </button>

          <div id="output-text">
          {this.state.things.map((thing, index) =>
            {
              return (<div class="text-analysis" key={index}>{ ReactHtmlParser(thing) }</div>)
            }
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
