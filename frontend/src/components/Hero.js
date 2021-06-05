import React from "react";

export default function Hero() {
  return (
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
  );
}
