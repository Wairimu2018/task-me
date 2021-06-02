import React from 'react';
import { MEALS } from './data'
import './App.css';

class App extends React.Component {

  state = {
    foods: []
  }

  componentDidMount(){
    fetch("http://localhost:9292/foods")
    .then(res => res.json())
    .then(data => this.setState({
      foods: data.foods
    }))
  }

  handleClick() {
    console.log("handleClick firing.")
  }

  render() {
    console.log(this.state.foods)

    return (
      <div className="">
        <h2>My Foods</h2>
        <div className=''>
          <h5>Meal filters</h5>
          {MEALS.map((meal, i) => <button key={i} onClick={this.handleClick}>{meal}</button>)}
        </div>
        <div className="">
          <h5>Foods</h5>
          <form className="">
            <input onChange={(e) => console.log(e)} placeholder="New food details" type="text" value="Food"></input>
              <select onChange={(e) => console.log(e)}>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Snack</option>
                <option>Dessert</option>
              </select>
            <input onClick={(e) => console.log(e)} type="submit" value="Add food"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default App;