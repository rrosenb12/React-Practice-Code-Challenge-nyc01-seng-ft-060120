import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiArray: [],
    plateArray: [],
    money: 100,
    page: 0
  }

  componentDidMount(){
    fetch(API)
    .then(response => response.json())
    .then(array => {
      this.setState({
        sushiArray: array
      })
    })
  }

  four = () => {
    return this.state.sushiArray.slice(this.state.page, this.state.page + 4)
  }

  moreSushi = () => {
    let newPage =  this.state.page + 4
    if (newPage >= this.state.sushiArray.length) {
      newPage = 0
    }
    this.setState({
      page: newPage
    })
    
  }

  eat = (obj) => {
    if (obj.price <= this.state.money && !this.state.plateArray.includes(obj)) {
      let moneyNow = this.state.money - obj.price
      this.setState({
      plateArray: [...this.state.plateArray, obj],
      money: moneyNow
      })
    }
  }

  addMoney = (money) => {
    let moneyNow = this.state.money + Number(money)
    this.setState({
      money: moneyNow
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.four()} moreSushi={this.moreSushi} eat={this.eat} eaten={this.state.plateArray}/>
        <Table plateArray={this.state.plateArray} money={this.state.money} addMoney={this.addMoney}/>
      </div>
    );
  }
}

export default App;