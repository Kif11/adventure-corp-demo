import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoMsg: ""
    }
  }

  handleMintBtnClick(event) {
    this.setState({infoMsg: "Token transferred"});
  }

  handleTransferBtnClick(event) {
    this.setState({infoMsg: "Token minted"});
  }

  render() {
    return (
      <div className="App">
        <div className="center-div">
          <button 
            className="waves-effect waves-light btn" 
            onClick={this.handleMintBtnClick.bind(this)}>
            mint
          </button>

          <button
            className="waves-effect waves-light btn"
            onClick={this.handleTransferBtnClick.bind(this)}>
            transfer
          </button>

          <div id="info-field"> {this.state.infoMsg} </div>
        </div>
      </div>
    );
  }
}

export default App;
