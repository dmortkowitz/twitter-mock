import React from 'react';
import RightFeed from './RightFeed';
//import PropTypes from "prop-types";

function RightColumn(){
  return (
    <div>
      <style jsx>{`
          height: 400px;
          width: 25%;
          border: 4px solid green;
          position: absolute;
          left: 72%;


      `}</style>
      <RightFeed/>
    </div>

  );
}

//App.propTypes = {
//};

export default RightColumn;
