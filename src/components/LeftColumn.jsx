import React from 'react';
import Profile from './Profile';


function LeftColumn(){
  var styles = {
  };
  return (
    <div style={styles}>
      <style jsx>{`
          height: 400px;
          width: 25%;
          border: 2px solid yellow;
          position: absolute;
          left: 3%;
          overflow: visible;


      `}</style>
      <Profile/>
    </div>

  );
}

//App.propTypes = {
//};

export default LeftColumn;
