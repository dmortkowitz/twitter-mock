import React from 'react';

import MiddleFeed from './MiddleFeed';
import PostNewForm from './PostNewForm';
//import PropTypes from "prop-types";

function MiddleColumn(){
  return (
    <div>
      <style jsx>{`
          height: auto;
          width: 40%;
          background-color: white;
          position: absolute;

          padding-bottom: 1%;
          left: 29%;
          margin-top: 2%;

      `}</style>
      <MiddleFeed/>

    </div>

  );
}


export default MiddleColumn;
