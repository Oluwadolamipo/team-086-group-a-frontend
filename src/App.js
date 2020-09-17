<<<<<<< HEAD
import React from 'react';
// import logo from './logo.svg';
import Home from './blogFold/containers/Home';
import Blogs from './blogFold/blog';
import Card from './blogFold/components/UI/Card/index';
import './App.css';

function App() {
  return (
    <div className="App">
      
      
      <Home/><br/>
      <Blogs/><br/>
      <Card/>
      {/* <h3>Blogs</h3> */}
    </div>
    
  );
}

export default App;
=======
import React from "react";
import Routes from "./Routes/Routes";
// import appStyles from "./App.css";
const App = () => (
  <div className="app">
    <Routes />
  </div>
);

export default App;
>>>>>>> develop
