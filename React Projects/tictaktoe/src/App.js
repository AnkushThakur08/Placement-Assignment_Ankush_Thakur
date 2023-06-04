import React, { useState } from 'react';

// React Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Custom CSS
import './App.css';

// Component
import Icon from './components/Icon';

class App extends Icon {
  constructor(props) {
    super(props);
    this.state = {
      isCross: false,
      winMessage: '',
      itemArray: new Array(9).fill('empty'),
    };
  }

  checkIsWinner = () => {
    const { itemArray } = this.state;

    if (itemArray[0] === itemArray[1] && itemArray[0] === itemArray[2] && itemArray[0] !== 'empty') {
      this.setState({ winMessage: `${itemArray[0]} Wins` });
    } else if (itemArray[3] === itemArray[4] && itemArray[3] === itemArray[5] && itemArray[3] !== 'empty') {
      this.setState({ winMessage: `${itemArray[3]} Wins` });
    } else if (itemArray[6] === itemArray[7] && itemArray[6] === itemArray[8] && itemArray[6] !== 'empty') {
      this.setState({ winMessage: `${itemArray[6]} Wins` });
    } else if (itemArray[0] === itemArray[3] && itemArray[0] === itemArray[6] && itemArray[0] !== 'empty') {
      this.setState({ winMessage: `${itemArray[0]} Wins` });
    } else if (itemArray[1] === itemArray[4] && itemArray[1] === itemArray[7] && itemArray[1] !== 'empty') {
      this.setState({ winMessage: `${itemArray[1]} wins` });
    } else if (itemArray[2] === itemArray[5] && itemArray[2] === itemArray[8] && itemArray[2] !== 'empty') {
      this.setState({ winMessage: `${itemArray[2]} Wins` });
    } else if (itemArray[0] === itemArray[4] && itemArray[0] === itemArray[8] && itemArray[0] !== 'empty') {
      this.setState({ winMessage: `${itemArray[0]} Wins` });
    } else if (itemArray[2] === itemArray[4] && itemArray[2] === itemArray[6] && itemArray[2] !== 'empty') {
      this.setState({ winMessage: `${itemArray[2]} Wins` });
    }
  };

  changeItem = (itemNumber) => {
    const { winMessage, isCross, itemArray } = this.state;

    if (winMessage) {
      return alert(winMessage);
    }

    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = isCross ? 'cross' : 'circle';
      this.setState({ isCross: !isCross }, () => {
        this.checkIsWinner();
      });
    } else {
      return alert('Place is Already Filled');
    }
  };

  reloadGame = () => {
    this.setState({
      isCross: false,
      winMessage: '',
      itemArray: new Array(9).fill('empty'),
    });
  };

  render() {
    const { isCross, winMessage, itemArray } = this.state;

    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            {winMessage ? (
              <div className="mb-2 mt-2 text-center">
                <h1 className="text-center text-uppercase text-warning">{winMessage}</h1>
                <button className="text-center btn btn-success btn-block" onClick={this.reloadGame}>
                  Reload Game
                </button>
              </div>
            ) : (
              <h1 className="text-center text-uppercase text-warning">{isCross ? 'Cross' : 'Circle'} Turns</h1>
            )}
            <div className="m-4">
              <h4 className="text-white text-center">{isCross ? 'Cross Play' : 'Circle Play'}</h4>
            </div>

            <div className="grid">
              {itemArray.map((IndividualItem, index) => (
                <div className="card" onClick={() => this.changeItem(index)} key={index}>
                  <div className="card-body">
                    <Icon name={IndividualItem} size={40} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
