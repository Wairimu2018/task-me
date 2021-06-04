import React, { Component } from "react";
import { MEALS } from "../data";
import DisplayFood from "./DisplayFood";
import Coupons from "./Coupons";
import "./MainContainer.css";

class App extends Component {

  state = {
    mealDisplay: "",
    newFood: "",
    chooseMeal: "Breakfast",
    foods: [],
    allState: true,
    breakfastState: false,
    lunchState: false,
    dinnerState: false,
    snackState: false,
    dessertState: false
  };

  componentDidMount() {
    fetch("http://localhost:9292/foods")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          foods: data.foods,
        })
      );
  }

  handleClick = (e) => {
    //   console.log(e.target.innerText)
    e.target.innerText === "All" ? this.setState({ mealDisplay: "" }) : this.setState({ mealDisplay: e.target.innerText });

    // switch(e) {
    //     case (e.target.innerText === "All"):
    //         console.log('All')
    //         break;
    //     case (e.target.innerText === "Breakfast"):
    //         console.log('Breakfast')
    //         break;
    //     case (e.target.innerText === "Lunch"):
    //         console.log('Lunch')
    //         break;
    //     case (e.target.innerText === "Dinner"):
    //         console.log('Dinner')
    //         break;
    //     case (e.target.innerText === "Snack"):
    //         console.log('Snack')
    //         break;
    //     case (e.target.innerText === "Dessert"):
    //         console.log('Dessert')
    //         break;
    //     default:
    //         console.log('This is the default case.')
    // }
  };

  handleDelete = (deleteFood) => {
    fetch("http://localhost:9292/foods/" + deleteFood.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.setState({
      foods: this.state.foods.filter((food) => food !== deleteFood),
    });
  };

  handleAddFood = (e) => {
    e.preventDefault();

    fetch("http://localhost:9292/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: this.state.newFood,
        meal: this.state.chooseMeal,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          foods: [...this.state.foods, data.food],
          newFood: "",
        });
      });
  };

  render() {
    console.log(this.state.foods);
    let filterFoods = this.state.foods.filter((food) =>
      food.meal.includes(this.state.mealDisplay)
    );

    return (
      <div className="flex flex-column items-center bb b--white-20 h3 flex-shrink-0 w-75">
        <div className="flex flex-column-s center container-menu w-100 justify-center ph3 nowrap">
          {MEALS.map((meal, i) => (
            <a
              href="#top"
              className="link white f5 f6-l"
              key={i}
              onClick={this.handleClick}
            >
              {meal}
            </a>
          ))}
        </div>
        <div
          className="content-wrapper white flex flex-column ph4 pt4 w-100"
          style={{ backgroundColor: "rgba(16 18 27 / 40%)" }}
        >
          <div className="flex items-center w-100 justify-between br3 ph4 pv3 h5 content-wrapper-header">
            <div className="flex flex-column justify-end w-100 pb2">
              <h3 className="fw5 f2 flex flex-column ma0">
                <p className="pa0 ma0">🍔 🍇 🍉 🥦</p>
                <p className="pa0 ma0">Meal Prepper</p>
              </h3>
              <div className="fw4 f4 pv2 mt2 white pre content-text">
                Build meals with ingredients.
              </div>
              <button className="bg-blue bn pv2 white br-pill mt1 pointer nowrap grow w-50">
                Start free trial
              </button>
            </div>
            <img
              className="w5 ma2 content-wrapper-img"
              src="https://b.kisscc0.com/20180813/kjq/kisscc0-drawing-computer-icons-dairy-grocery-store-simple-isometric-store-5b71121ab73605.2018158515341368587504.png"
              alt=""
            />
          </div>

          <div className="flex flex-column mt4">
            <div className="mb4 f4" style={{ color: "#999ba5" }}>
              Add Groceries
            </div>
            <div className="">
              <form className="flex justify-between">
                <div>
                  <input
                    className="outline-transparent w5 pv2 ph4 ml3 ba b--white-20 br-pill bg-transparent white"
                    onChange={(e) => this.setState({ newFood: e.target.value })}
                    placeholder="Add item to Grocery List"
                    type="text"
                    value={this.state.newFood}
                  ></input>
                </div>
                <div>
                  <select
                    className="outline-transparent pv1 ph4 mh3 ba b--white-20 br-pill bg-transparent white"
                    onChange={(e) =>
                      this.setState({ chooseMeal: e.target.value })
                    }
                  >
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Snack</option>
                    <option>Dessert</option>
                  </select>
                  <input
                    className="outline-transparent pv2 ph4 mr3 ba b--white-20 br-pill bg-transparent white"
                    onClick={this.handleAddFood}
                    type="submit"
                    value="Add food"
                  ></input>
                </div>
              </form>
            </div>
          </div>

          <div className="flex flex-column mt4">
            <div className="mb4 f4" style={{ color: "#999ba5" }}>
              Your Grocery List
            </div>
            <ul
              className="f6 flex flex-column w-100 h-100 justify-around pl0 ma0 ba b--white-20 pointer br3 content-section"
              style={{ backgroundColor: "rgb(146 151 179 / 13%)" }}
            >
              {filterFoods.map((food, i) => (
                <DisplayFood
                  key={i}
                  food={food}
                  handleDelete={this.handleDelete}
                />
              ))}
            </ul>
          </div>

          <Coupons />
        </div>
      </div>
    );
  }
}

export default App;
