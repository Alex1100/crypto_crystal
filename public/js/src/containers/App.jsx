import React, { Component } from 'react';
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      livecoin: ["0","0","0","0","0","0","0"],
      cCex: ["0","0","0","0","0","0","0"],
      hitbtc: ["0","0","0","0","0","0","0"],
      prev_livecoin: ["0","0","0","0","0","0","0"],
      prev_cCex: ["0","0","0","0","0","0","0"],
      prev_hitbtc: ["0","0","0","0","0","0","0"]
    }

    this.fetchPrices = this.fetchPrices.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    if(this.state.livecoin[0] === "0"){
      axios.get('/prices.json')
        .then(res => {
          console.log("WORKING INIT")
          this.setState({
            livecoin: [
              parseFloat(res.data.livecoin.BTCUSD).toPrecision(5),
              parseFloat(res.data.livecoin.ETHUSD).toPrecision(5),
              parseFloat(res.data.livecoin.ETHBTC).toPrecision(5),
              parseFloat(res.data.livecoin.LTCUSD).toPrecision(5),
              parseFloat(res.data.livecoin.LTCBTC).toPrecision(5),
              parseFloat(res.data.livecoin.DASHUSD).toPrecision(5),
              parseFloat(res.data.livecoin.DASHBTC).toPrecision(5)
            ],
            cCex: [
              parseFloat(res.data.cCex.BTCUSD).toPrecision(5),
              parseFloat(res.data.cCex.ETHUSD).toPrecision(5),
              parseFloat(res.data.cCex.ETHBTC).toPrecision(5),
              parseFloat(res.data.cCex.LTCUSD).toPrecision(5),
              parseFloat(res.data.cCex.LTCBTC).toPrecision(5),
              parseFloat(res.data.cCex.DASHUSD).toPrecision(5),
              parseFloat(res.data.cCex.DASHBTC).toPrecision(5)
            ],
            hitbtc: [
              parseFloat(res.data.hitbtc.BTCUSD).toPrecision(5),
              parseFloat(res.data.hitbtc.ETHUSD).toPrecision(5),
              parseFloat(res.data.hitbtc.ETHBTC).toPrecision(5),
              parseFloat(res.data.hitbtc.LTCUSD).toPrecision(5),
              parseFloat(res.data.hitbtc.LTCBTC).toPrecision(5),
              parseFloat(res.data.hitbtc.DASHUSD).toPrecision(5),
              parseFloat(res.data.hitbtc.DASHBTC).toPrecision(5)
            ]
          }, () => this.handleChange());
        })
        .catch(err => {
          setTimeout(() => {
            this.fetchPrices();
          }, 60000);
        });
    }
  }

  handleChange(){
    const { prev_cCex, prev_livecoin, prev_hitbtc } = this.state;

    if(prev_livecoin[0] === "0"){
      return;
    }

    const cCex = document.getElementsByClassName('cCex');
    const Livecoin = document.getElementsByClassName('livecoin');
    const HitBTC = document.getElementsByClassName('hitbtc');

    if(cCex[0].innerHTML !== prev_cCex[0]){
      if(parseFloat(cCex[0].innerHTML).toPrecision(5) > parseFloat(prev_cCex[0]).toPrecision(5)){
        cCex[0].style.webkitTextStroke = "1px green"
      } else {
        cCex[0].style.webkitTextStroke = "1px red"
      }
    } else {
      cCex[0].style.webkitTextStroke = ""
    }
    if(cCex[1].innerHTML !== prev_cCex[1]){
      if(parseFloat(cCex[1].innerHTML).toPrecision(5) > parseFloat(prev_cCex).toPrecision(5)){
        cCex[1].style.webkitTextStroke = "1px green"
      } else {
        cCex[1].style.webkitTextStroke = "1px red"
      }
    } else {
      cCex[1].style.webkitTextStroke = ""
    }
    if(cCex[2].innerHTML !== prev_cCex[2]){
      if(parseFloat(cCex[2].innerHTML).toPrecision(5) > parseFloat(prev_cCex[2]).toPrecision(5)){
        cCex[2].style.webkitTextStroke = "1px green"
      } else {
        cCex[2].style.webkitTextStroke = "1px red";
      }
    } else {
      cCex[2].style.webkitTextStroke = ""
    }
    if(cCex[3].innerHTML !== prev_cCex[3]){
      if(parseFloat(cCex[3].innerHTML).toPrecision(5) > parseFloat(prev_cCex[3]).toPrecision(5)){
        cCex[3].style.webkitTextStroke = "1px green"
      } else {
        cCex[3].style.webkitTextStroke = "1px red"
      }
    } else {
      cCex[3].style.webkitTextStroke = ""
    }
    if(cCex[4].innerHTML !== prev_cCex[4]){
      if(parseFloat(cCex[4].innerHTML).toPrecision(5) > parseFloat(prev_cCex).toPrecision(5)){
        cCex[4].style.webkitTextStroke = "1px green"
      } else {
        cCex[4].style.webkitTextStroke = "1px red"
      }
    } else {
      cCex[4].style.webkitTextStroke = ""
    }
    if(cCex[5].innerHTML !== prev_cCex[5]){
      if(parseFloat(cCex[5].innerHTML).toPrecision(5) > parseFloat(prev_cCex[5]).toPrecision(5)){
        cCex[5].style.webkitTextStroke = "1px green"
      } else {
        cCex[5].style.webkitTextStroke = "1px red";
      }
    } else {
      cCex[5].style.webkitTextStroke = ""
    }
    if(cCex[6].innerHTML !== prev_cCex[6]){
      if(parseFloat(cCex[6].innerHTML).toPrecision(5) > parseFloat(prev_cCex).toPrecision(5)){
        cCex[6].style.webkitTextStroke = "1px green"
      } else {
        cCex[6].style.webkitTextStroke = "1px red"
      }
    } else {
      cCex[6].style.webkitTextStroke = ""
    }

    if(Livecoin[0].innerHTML !== prev_livecoin[0]){
      if(parseFloat(Livecoin[0].innerHTML).toPrecision(5) > parseFloat(prev_livecoin[0]).toPrecision(5)){
        Livecoin[0].style.webkitTextStroke = "1px green"
      } else {
        Livecoin[0].style.webkitTextStroke = "1px red"
      }
    } else {
      Livecoin[0].style.webkitTextStroke = ""
    }
    if(Livecoin[1].innerHTML !== prev_livecoin[1]){
      if(parseFloat(Livecoin[1].innerHTML).toPrecision(5) > parseFloat(prev_livecoin).toPrecision(5)){
        Livecoin[1].style.webkitTextStroke = "1px green"
      } else {
        Livecoin[1].style.webkitTextStroke = "1px red"
      }
    } else {
      Livecoin[1].style.webkitTextStroke = ""
    }
    if(Livecoin[2].innerHTML !== prev_livecoin[2]){
      if(parseFloat(Livecoin[2].innerHTML).toPrecision(5) > parseFloat(prev_livecoin[2]).toPrecision(5)){
        Livecoin[2].style.webkitTextStroke = "1px green"
      } else {
        Livecoin[2].style.webkitTextStroke = "1px red";
      }
    } else {
      Livecoin[2].style.webkitTextStroke = ""
    }
    if(Livecoin[3].innerHTML !== prev_livecoin[3]){
      if(parseFloat(Livecoin[3].innerHTML).toPrecision(5) > parseFloat(prev_livecoin[3]).toPrecision(5)){
        Livecoin[3].style.webkitTextStroke = "1px green"
      } else {
        Livecoin[3].style.webkitTextStroke = "1px red"
      }
    } else {
      Livecoin[3].style.webkitTextStroke = ""
    }
    if(Livecoin[4].innerHTML !== prev_livecoin[4]){
      if(parseFloat(Livecoin[4].innerHTML).toPrecision(5) > parseFloat(prev_livecoin).toPrecision(5)){
        Livecoin[4].style.webkitTextStroke = "1px green"
      } else {
        Livecoin[4].style.webkitTextStroke = "1px red"
      }
    } else {
      Livecoin[4].style.webkitTextStroke = ""
    }
    if(Livecoin[5].innerHTML !== prev_livecoin[5]){
      if(parseFloat(Livecoin[5].innerHTML).toPrecision(5) > parseFloat(prev_livecoin[5]).toPrecision(5)){
        Livecoin[5].style.webkitTextStroke = "1px green"
      } else {
        Livecoin[5].style.webkitTextStroke = "1px red";
      }
    } else {
      Livecoin[5].style.webkitTextStroke = ""
    }
    if(Livecoin[6].innerHTML !== prev_livecoin[6]){
      if(parseFloat(Livecoin[6].innerHTML).toPrecision(5) > parseFloat(prev_livecoin).toPrecision(5)){
        Livecoin[6].style.webkitTextStroke = "1px green"
      } else {
        Livecoin[6].style.webkitTextStroke = "1px red"
      }
    } else {
      Livecoin[6].style.webkitTextStroke = ""
    }


    if(HitBTC[0].innerHTML !== prev_hitbtc[0]){
      if(parseFloat(HitBTC[0].innerHTML).toPrecision(5) > parseFloat(prev_hitbtc[0]).toPrecision(5)){
        HitBTC[0].style.webkitTextStroke = "1px green"
      } else {
        HitBTC[0].style.webkitTextStroke = "1px red"
      }
    } else {
      HitBTC[0].style.webkitTextStroke = ""
    }
    if(HitBTC[1].innerHTML !== prev_hitbtc[1]){
      if(parseFloat(HitBTC[1].innerHTML).toPrecision(5) > parseFloat(prev_hitbtc).toPrecision(5)){
        HitBTC[1].style.webkitTextStroke = "1px green"
      } else {
        HitBTC[1].style.webkitTextStroke = "1px red"
      }
    } else {
      HitBTC[1].style.webkitTextStroke = ""
    }
    if(HitBTC[2].innerHTML !== prev_hitbtc[2]){
      if(parseFloat(HitBTC[2].innerHTML).toPrecision(5) > parseFloat(prev_hitbtc[2]).toPrecision(5)){
        HitBTC[2].style.webkitTextStroke = "1px green"
      } else {
        HitBTC[2].style.webkitTextStroke = "1px red";
      }
    } else {
      HitBTC[2].style.webkitTextStroke = ""
    }
    if(HitBTC[3].innerHTML !== prev_hitbtc[3]){
      if(parseFloat(HitBTC[3].innerHTML).toPrecision(5) > parseFloat(prev_hitbtc[3]).toPrecision(5)){
        HitBTC[3].style.webkitTextStroke = "1px green"
      } else {
        HitBTC[3].style.webkitTextStroke = "1px red"
      }
    } else {
      HitBTC[3].style.webkitTextStroke = ""
    }
    if(HitBTC[4].innerHTML !== prev_hitbtc[4]){
      if(parseFloat(HitBTC[4].innerHTML).toPrecision(5) > parseFloat(prev_hitbtc).toPrecision(5)){
        HitBTC[4].style.webkitTextStroke = "1px green"
      } else {
        HitBTC[4].style.webkitTextStroke = "1px red"
      }
    } else {
      HitBTC[4].style.webkitTextStroke = ""
    }
    if(HitBTC[5].innerHTML !== prev_hitbtc[5]){
      if(parseFloat(HitBTC[5].innerHTML).toPrecision(5) > parseFloat(prev_hitbtc[5]).toPrecision(5)){
        HitBTC[5].style.webkitTextStroke = "1px green"
      } else {
        HitBTC[5].style.webkitTextStroke = "1px red";
      }
    } else {
      HitBTC[5].style.webkitTextStroke = ""
    }
    if(HitBTC[6].innerHTML !== prev_hitbtc[6]){
      if(parseFloat(HitBTC[6].innerHTML).toPrecision(5) > parseFloat(prev_hitbtc).toPrecision(5)){
        HitBTC[6].style.webkitTextStroke = "1px green"
      } else {
        HitBTC[6].style.webkitTextStroke = "1px red"
      }
    } else {
      HitBTC[6].style.webkitTextStroke = ""
    }
  }


  fetchPrices(){
    setInterval(() => {
      axios.get('/prices.json')
      .then(res => {
        console.log("WORKING")
        this.setState({
          prev_livecoin: this.state.livecoin,
          prev_cCex: this.state.cCex,
          prev_hitbtc: this.state.hitbtc,
          livecoin: [
            parseFloat(res.data.livecoin.BTCUSD).toPrecision(5),
            parseFloat(res.data.livecoin.ETHUSD).toPrecision(5),
            parseFloat(res.data.livecoin.ETHBTC).toPrecision(5),
            parseFloat(res.data.livecoin.LTCUSD).toPrecision(5),
            parseFloat(res.data.livecoin.LTCBTC).toPrecision(5),
            parseFloat(res.data.livecoin.DASHUSD).toPrecision(5),
            parseFloat(res.data.livecoin.DASHBTC).toPrecision(5)
          ],
          cCex: [
            parseFloat(res.data.cCex.BTCUSD).toPrecision(5),
            parseFloat(res.data.cCex.ETHUSD).toPrecision(5),
            parseFloat(res.data.cCex.ETHBTC).toPrecision(5),
            parseFloat(res.data.cCex.LTCUSD).toPrecision(5),
            parseFloat(res.data.cCex.LTCBTC).toPrecision(5),
            parseFloat(res.data.cCex.DASHUSD).toPrecision(5),
            parseFloat(res.data.cCex.DASHBTC).toPrecision(5)
          ],
          hitbtc: [
            parseFloat(res.data.hitbtc.BTCUSD).toPrecision(5),
            parseFloat(res.data.hitbtc.ETHUSD).toPrecision(5),
            parseFloat(res.data.hitbtc.ETHBTC).toPrecision(5),
            parseFloat(res.data.hitbtc.LTCUSD).toPrecision(5),
            parseFloat(res.data.hitbtc.LTCBTC).toPrecision(5),
            parseFloat(res.data.hitbtc.DASHUSD).toPrecision(5),
            parseFloat(res.data.hitbtc.DASHBTC).toPrecision(5)
          ]
        }, () => this.handleChange());
      })
      .catch(err => {
        console.log("ERR GETTING PRICES FROM CRYSTAL: ", err);
      })
    }, 60000);
  }

  render(){
    const { cCex, livecoin, hitbtc } = this.state;
    return(
      <div>
        <div className="ticker-container">
          <h1>React on Crystal CryptoCurrency Ticker</h1>
          <h1>C-Cex/Livecoin/HitBTC CryptoCurrency Prices</h1>
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
              <td className="cCex">{ cCex[0] }</td>
              <td className="cCex">{ cCex[1] }</td>
              <td className="cCex">{ cCex[2] }</td>
              <td className="cCex">{ cCex[3] }</td>
              <td className="cCex">{ cCex[4] }</td>
              <td className="cCex">{ cCex[5] }</td>
              <td className="cCex">{ cCex[6] }</td>
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
              <td className="livecoin">{ livecoin[0] }</td>
              <td className="livecoin">{ livecoin[1] }</td>
              <td className="livecoin">{ livecoin[2] }</td>
              <td className="livecoin">{ livecoin[3] }</td>
              <td className="livecoin">{ livecoin[4] }</td>
              <td className="livecoin">{ livecoin[5] }</td>
              <td className="livecoin">{ livecoin[6] }</td>
            </tr>
          </table>
          <br/>
          <br/>
          <table className="hitbtc-table">
            <tr>
              <th>HitBTC BTCUSD</th>
              <th>HitBTC ETHUSD</th>
              <th>HitBTC ETHBTC</th>
              <th>HitBTC LTCUSD</th>
              <th>HitBTC LTCBTC</th>
              <th>HitBTC DASHUSD</th>
              <th>HitBTC DASHBTC</th>
            </tr>
            <tr>
              <td className="hitbtc">{ hitbtc[0] }</td>
              <td className="hitbtc">{ hitbtc[1] }</td>
              <td className="hitbtc">{ hitbtc[2] }</td>
              <td className="hitbtc">{ hitbtc[3] }</td>
              <td className="hitbtc">{ hitbtc[4] }</td>
              <td className="hitbtc">{ hitbtc[5] }</td>
              <td className="hitbtc">{ hitbtc[6] }</td>
            </tr>
          </table>
          <br/>
        </div>
      </div>
    )
  }
}

export default App;
