import React from 'react';

import MiddleFeed from './MiddleFeed';
//import PropTypes from "prop-types";

function MiddleColumn(){
  return (
    <div>
      <style jsx>{`
          height: 400px;
          width: 40%;
          border: 2px solid black;
          position: absolute;
          left: 30%;


      `}</style>
      <MiddleFeed/>
    </div>

  );
}


export default MiddleColumn;
