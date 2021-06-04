import React from "react";

export default function Coupons() {
  return (
    <div className="flex flex-column mt4 mb5 content-section">
      <div className="mb4 f4" style={{ color: "#999ba5" }}>
        Coupons Available
      </div>
      <div className="flex flex-column flex-row-l items-center justify-between w-100">
        <div className="flex flex-column justify-center align-center w-30 f6 br3 pa2 pointer ba b--white-20 grow" style={{backgroundColor: "rgb(146 151 179 / 13%)"}}>
          <p className="mt2 f-subheadline bg-green h4 w4 br-100 tc center ma0 pt3">🛒</p>
          <p className="mt4 mb0 tc w-100 flex-auto f4">Grocery Carts R Us</p>
          <div className="pt1 pb0 mb3 tc center w-75 f6 fw4 lh-copy pb2 bb b--white-20">
            Free hand sanitizer!
          </div>
          <div className="flex items-center center outline-transparent mt3 app-card-buttons">
            <button className="mb2 bg-transparent light-gray b--white-20 br-pill">Claim Your Reward</button>          
          </div>
        </div>
        <div className="flex flex-column justify-center align-center w-30 f6 br3 pa2 pointer ba b--white-20 grow" style={{backgroundColor: "rgb(146 151 179 / 13%)"}}>
          <p className="mt2 f-headline bg-gold h4 w4 br-100 tc center ma0 pt3">🥦</p>
          <p className="mt4 mb0 tc w-100 flex-auto f4">Produce Plaza</p>
          <div className="pt1 pb0 mb3 tc center w-75 f6 fw4 lh-copy pb2 bb b--white-20">
            10% Off Brocolli
          </div>
          <div className="flex items-center center outline-transparent mt3 app-card-buttons">
          <button className="mb2 bg-transparent light-gray b--white-20 br-pill">Claim Your Reward</button>          
            </div>
        </div>
        <div className="flex flex-column justify-center align-center w-30 f6 br3 pa2 pointer ba b--white-20 grow" style={{backgroundColor: "rgb(146 151 179 / 13%)"}}>
          <p className="mt2 f-headline bg-pink h4 w4 br-100 tc center ma0 pt3">💊</p>
          <p className="mt4 mb0 tc w-100 flex-auto f4">Scripts R Us</p>
          <div className="pt1 pb0 mb3 tc center w-75 f6 fw4 lh-copy pb2 bb b--white-20">
            Free Shipping
          </div>
          <div className="flex items-center center outline-transparent mt3 app-card-buttons">
            <button className="mb2 bg-transparent light-gray b--white-20 br-pill">Claim Your Reward</button>          
            </div>
        </div>
        
      </div>
    </div>
  );
}
