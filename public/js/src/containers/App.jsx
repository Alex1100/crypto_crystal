import React, { Component } from 'react';
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      livecoin: [0,0,0,0,0,0,0],
      cCex: [0,0,0,0,0,0,0]
    }

    this.fetchPrices = this.fetchPrices.bind(this);
  }

  componentDidMount(){
    this.fetchPrices();
  }


  fetchPrices(){
    setInterval(() => {
      axios.get('/prices.json')
      .then(res => {
        this.setState({
          livecoin: [
            res.data.livecoin.BTCUSD.last,
            res.data.livecoin.ETHUSD.last,
            res.data.livecoin.ETHBTC.last,
            res.data.livecoin.LTCUSD.last,
            res.data.livecoin.LTCBTC.last,
            res.data.livecoin.DASHUSD.last,
            res.data.livecoin.DASHBTC.last
          ],
          cCex: [
            res.data.cCex.BTCUSD.lastprice,
            res.data.cCex.ETHUSD.lastprice,
            res.data.cCex.ETHBTC.lastprice,
            res.data.cCex.LTCUSD.lastprice,
            res.data.cCex.LTCBTC.lastprice,
            res.data.cCex.DASHUSD.lastprice,
            res.data.cCex.DASHBTC.lastprice
          ]
        });
      })
      .catch(err => {
        console.log("ERR GETTING PRICES FROM CRYSTAL: ", err);
      })
    }, 3000);
  }

  render(){
    const { cCex, livecoin } = this.state;
    return(
      <div>
        <div className="ticker-container">
          <h1>React on Crystal CryptoCurrency Ticker</h1>
          <h1>C-Cex/Livecoin CryptoCurrency Prices</h1>
          <table className="c-cex-table">
            <tr>
              <th>C-Cex BTCUSD</th>
              <th>C-Cex ETHUSD</th>
              <th>C-Cex ETHBTC</th>
              <th>C-Cex LTCUSD</th>
              <th>C-Cex LTCBTC</th>
              <th>C-Cex DASHUSD</th>
              <th>C-Cex DASHBTC</th>
            </tr>
            <tr>
              <td>{ cCex[0] }</td>
              <td>{ cCex[1] }</td>
              <td>{ cCex[2] }</td>
              <td>{ cCex[3] }</td>
              <td>{ cCex[4] }</td>
              <td>{ cCex[5] }</td>
              <td>{ cCex[6] }</td>
            </tr>
          </table>
          <br/>
          <br/>
          <table className="livecoin-table">
            <tr>
              <th>Livecoin BTCUSD</th>
              <th>Livecoin ETHUSD</th>
              <th>Livecoin ETHBTC</th>
              <th>Livecoin LTCUSD</th>
              <th>Livecoin LTCBTC</th>
              <th>Livecoin DASHUSD</th>
              <th>Livecoin DASHBTC</th>
            </tr>
            <tr>
              <td>{ livecoin[0] }</td>
              <td>{ livecoin[1] }</td>
              <td>{ livecoin[2] }</td>
              <td>{ livecoin[3] }</td>
              <td>{ livecoin[4] }</td>
              <td>{ livecoin[5] }</td>
              <td>{ livecoin[6] }</td>
            </tr>
          </table>
          <br/>
        </div>
      </div>
    )
  }
}

export default App;
