import React, { Component } from "react";

class DisplayFood extends Component {
  render() {
    return (
      <>
        <li className="list flex justify-between items-center w-100 h-100 pa2 nowrap bb b--white-20">
          <div
            className="flex items-center justify-between"
            style={{ width: "20rem" }}
          >
            <div className="flex items-center w1 w2-l">
              <p className="ml0 mr2 mv0 flex-shrink-0">🍏</p>
              {this.props.food.text}
            </div>
            <div className="flex items-center justify-center">
              <span className="w2 relative dn-s">
                <span
                  className="absolute bg-green br3"
                  style={{
                    top: "3px",
                    left: "-20px",
                    width: ".75rem",
                    height: ".75rem",
                  }}
                ></span>
                {this.props.food.meal}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-end w2 button-wrapper">
            <button
              className="mt0 pv1 ph1 ph2-l bg-transparent light-gray b--white-20 br-pill pointer"
              onClick={() => this.props.handleDelete(this.props.food)}
            >
              Remove from List
            </button>
          </div>
        </li>
      </>
    );
  }
}

export default DisplayFood;
