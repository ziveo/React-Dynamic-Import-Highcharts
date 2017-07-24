import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  loadHighcharts = () => {
    import('./import-modules/Highcharts')
        .then(({Highcharts}) => {
          Highcharts.chart('hc__container', {
            chart: {
              type: 'bar'
            },
            title: {
              text: 'Fruit Consumption'
            },
            xAxis: {
              categories: ['Apples', 'Bananas', 'Oranges']
            },
            yAxis: {
              title: {
                text: 'Fruit eaten'
              }
            },
            series: [{
              name: 'Jane',
              data: [1, 0, 4]
            }, {
              name: 'John',
              data: [5, 7, 3]
            }]
          });
        })
        .catch(err => {
          // Handle failure
        });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.loadHighcharts}>Load Highcharts</button>
        <div id="hc__container">
          <h3 className="chart__title">Highcharts Container</h3>
        </div>
      </div>
    );
  }
}

export default App;
