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
          position: absolute;
          left: 3%;
          overflow: visible;
          margin-top: 2%;


      `}</style>
      <Profile/>
    </div>

  );
}

//App.propTypes = {
//};

export default LeftColumn;
