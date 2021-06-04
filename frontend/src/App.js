import React from 'react';
import './App.css';
import Header from './components/Header';
import LeftSide from './components/LeftSide';
import MainContainer from './components/MainContainer';

class App extends React.Component {

  render() {
    return (
      <div className='vh-100 w-100 cover bg-center flex items-center justify-center flex-column pa2 pa4-l page-container'>
        <div className='mw8 br3 pre w-100 h-100 app-container' style={{backgroundColor: "rgba(16 18 27 / 40%)"}}>
          <Header />
          <div className="flex flex-grow-1 pre h8 h-100">
            <LeftSide />
            <MainContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;