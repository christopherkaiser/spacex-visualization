import React from 'react';
import './App.css';
import LaunchTimeLineContainer from './containers/LaunchTimeLineContainer';
import MenuContainer from './containers/MenuContainer';

const App = () => (
  <div className="App">
    <MenuContainer />
    <LaunchTimeLineContainer />
  </div>
);

export default App;
