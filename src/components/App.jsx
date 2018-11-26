import React from 'react';
import NavBar from './NavBar';
import MainPage from './MainPage';
//import PropTypes from "prop-types";

function App(){

  return (
    <div>
      <style global jsx>{`
          body {
            background-color: #e4ebef;
          }


      `}</style>
      <NavBar/>
      <MainPage/>
    </div>

  );
}

//App.propTypes = {
//};

export default App;
