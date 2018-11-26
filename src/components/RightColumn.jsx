import React from 'react';
import RightFeed from './RightFeed';
//import PropTypes from "prop-types";

function RightColumn(){
  return (
    <div>
      <style jsx>{`
          height: 400px;
          width: 25%;
          position: absolute;
          left: 72%;
          margin-top: 2%;
          background-color: white;


      `}</style>
      <RightFeed/>
    </div>

  );
}

//App.propTypes = {
//};

export default RightColumn;
