import React, { useState } from "react";

const Header = () => {
  const [listState, setListState] = useState(true);
  const [tripsState, setTripsState] = useState(false);
  const [discoverState, setDiscoverState] = useState(false);
  const [marketState, setMarketState] = useState(false);

  const handleListToggle = (e) => {
    setListState(true);
    setTripsState(false);
    setDiscoverState(false);
    setMarketState(false);
  };

  const handleTripsToggle = (e) => {
    setListState(false);
    setTripsState(true);
    setDiscoverState(false);
    setMarketState(false);
  };

  const handleDiscoverToggle = (e) => {
    setListState(false);
    setTripsState(false);
    setDiscoverState(true);
    setMarketState(false);
  };

  const handleMarketToggle = (e) => {
    setListState(false);
    setTripsState(false);
    setDiscoverState(false);
    setMarketState(true);
  };

  return (
    <div className="flex items-center flex-shrink-0 h3 w-100 bb b--white-20 ph3 nowrap f6">
      <div className="menu-circle"></div>
      <div className="flex items-center header-menu">
        <a
          className={listState ? "is-active" : ""}
          href="#top"
          onClick={handleListToggle}
        >
          Grocery List
        </a>
        <a
          className={tripsState ? "is-active notify" : "notify"}
          href="#top"
          onClick={handleTripsToggle}
        >
          Past Grocery Trips
        </a>
        <a
          className={discoverState ? "is-active" : ""}
          href="#top"
          onClick={handleDiscoverToggle}
        >
          Discover
        </a>
        <a
          className={marketState ? "is-active notify" : "notify"}
          href="#top"
          onClick={handleMarketToggle}
        >
          Market
        </a>
      </div>
      <div className="search-bar h2 flex w-100 mw6 pl2 br2">
        <input
          className="w-100 h-100 bn br2 fw5 pr1 pl4 outline-transparent bg-black"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="header-profile">
        <div className="relative">
          <span className="header-notification absolute bg-blue br-100 w1 h1 white f6 flex items-center justify-center">
            3
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-bell ml2"
          >
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
          </svg>
        </div>
        <svg viewBox="0 0 512 512" fill="currentColor" className="ml2">
          <path d="M448.773 235.551A135.893 135.893 0 00451 211c0-74.443-60.557-135-135-135-47.52 0-91.567 25.313-115.766 65.537-32.666-10.59-66.182-6.049-93.794 12.979-27.612 19.013-44.092 49.116-45.425 82.031C24.716 253.788 0 290.497 0 331c0 7.031 1.703 13.887 3.006 20.537l.015.015C12.719 400.492 56.034 436 106 436h300c57.891 0 106-47.109 106-105 0-40.942-25.053-77.798-63.227-95.449z" />
        </svg>
        <img
          className="profile-img"
          src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjB3b21hbiUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
