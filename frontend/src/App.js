import React from 'react';
import { MEALS } from './data';
import './App.css';
import DisplayFood from './components/DisplayFood';

class App extends React.Component {

  state = {
    mealDisplay: "",
    newFood: "",
    chooseMeal: "Breakfast",
    foods: []
  }

  componentDidMount(){
    fetch('http://localhost:9292/foods')
    .then(res => res.json())
    .then(data => this.setState({
      foods: data.foods
    }))
  }

  handleClick =(e) => {
    e.target.innerText === "All" ? 
    this.setState({mealDisplay: ""}) :
    this.setState({mealDisplay: e.target.innerText})
  }

  handleDelete  = (deleteFood) => {

    fetch('http://localhost:9292/foods/'+deleteFood.id, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      } 
    })

    this.setState({
      foods: this.state.foods.filter(food => food !== deleteFood)
    })
  }

  handleAddFood = (e) => {
    e.preventDefault()

    fetch('http://localhost:9292/foods', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: this.state.newFood, 
        meal: this.state.chooseMeal
      })
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        foods: [...this.state.foods, data.food], 
        newFood: ""
      })
    })
  }

  render() {
    console.log(this.state.foods)
    let filterFoods = this.state.foods.filter(food => food.meal.includes(this.state.mealDisplay))

    return (
      <div className='mw6 center'>
        <h2>My Foods</h2>
        <div className=''>
          <h5>Meal filters</h5>
          {MEALS.map((meal, i) => <button key={i} onClick={this.handleClick}>{meal}</button>)}
        </div>
        <div className=''>
          <h5>Foods</h5>
          <form className=''>
            <input onChange={(e) => this.setState({newFood: e.target.value})} placeholder="New food details" type="text" value={this.state.newFood}></input>
              <select onChange={(e) => this.setState({chooseMeal: e.target.value})}>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Snack</option>
                <option>Dessert</option>
              </select>
            <input onClick={this.handleAddFood} type="submit" value="Add food"></input>
          </form>
          {filterFoods.map((food,i) => <DisplayFood key={i} food={food} handleDelete={this.handleDelete}/> )}
        </div>
      </div>
    );
  }
}

export default App;