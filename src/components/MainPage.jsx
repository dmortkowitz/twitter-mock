import React from 'react';
import RightColumn from './RightColumn';
import MiddleColumn from './MiddleColumn';
import LeftColumn from './LeftColumn';


function MainPage(){
  return (
    <div>
      <style jsx>{`
        textAlign: 'center',
        display: flex;


      `}</style>
    <RightColumn/>
    <MiddleColumn/>
    <LeftColumn/>
    </div>

  );
}


export default MainPage;
