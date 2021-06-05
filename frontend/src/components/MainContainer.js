import React, { Component } from "react";
import { MEALS } from "../data";
import Hero from "./Hero";
import DisplayFood from "./DisplayFood";
import Coupons from "./Coupons";

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
    dessertState: false,
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
    // e.target.innerText === "All"
    // ? this.setState({ mealDisplay: "" })
    // : this.setState({ mealDisplay: e.target.innerText });

    if (e.target.innerText === "All") {
      this.setState({
        mealDisplay: "",
        allState: true,
        breakfastState: false,
        lunchState: false,
        dinnerState: false,
        snackState: false,
        dessertState: false,
      });
      console.log("All");
    }

    if (e.target.innerText === "Breakfast") {
      this.setState({
        mealDisplay: e.target.innerText,
        allState: false,
        breakfastState: true,
        lunchState: false,
        dinnerState: false,
        snackState: false,
        dessertState: false,
      });
      console.log("Breakfast");
    }

    if (e.target.innerText === "Lunch") {
      this.setState({
        mealDisplay: e.target.innerText,
        allState: false,
        breakfastState: false,
        lunchState: true,
        dinnerState: false,
        snackState: false,
        dessertState: false,
      });
      console.log("Lunch");
    }

    if (e.target.innerText === "Dinner") {
      this.setState({
        mealDisplay: e.target.innerText,
        allState: false,
        breakfastState: false,
        lunchState: false,
        dinnerState: true,
        snackState: false,
        dessertState: false,
      });
      console.log("Dinner");
    }

    if (e.target.innerText === "Snack") {
      this.setState({
        mealDisplay: e.target.innerText,
        allState: false,
        breakfastState: false,
        lunchState: false,
        dinnerState: false,
        snackState: true,
        dessertState: false,
      });
      console.log("Snack");
    }

    if (e.target.innerText === "Dessert") {
      this.setState({
        mealDisplay: e.target.innerText,
        allState: false,
        breakfastState: false,
        lunchState: false,
        dinnerState: false,
        snackState: false,
        dessertState: true,
      });
      console.log("Dessert");
    }
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
        <div className="app-menu flex flex-column-s center container-menu w-100 h3 justify-center ph3 nowrap">
          {MEALS.map((meal, i) => (
            <a
              className={
                this.state.allState
                  ? "is-active link white f5 f6-l"
                  : "link white f5 f6-l" || this.state.breakfastState
                  ? "is-active link white f5 f6-l"
                  : "link white f5 f6-l" || this.state.lunchState
                  ? "is-active link white f5 f6-l"
                  : "link white f5 f6-l" || this.state.dinnerState
                  ? "is-active link white f5 f6-l"
                  : "link white f5 f6-l" || this.state.snackState
                  ? "is-active link white f5 f6-l"
                  : "link white f5 f6-l" || this.state.dessertState
                  ? "is-active link white f5 f6-l"
                  : "link white f5 f6-l"
              }
              href="#top"
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
          <Hero />

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
