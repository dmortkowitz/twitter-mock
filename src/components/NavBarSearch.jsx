import React from "react";

function NavBarSearch(){
  var styles = {
    border: '4px solid #2c97de',
    borderRadius: '25px',
    fontFamily: 'Helvetica',
    padding: '5px',
    paddingRight: '20px',
    paddingLeft: '20px',
    marginLeft: '20px',
    float: 'right',
    position: 'absolute',
    right: '10px',
    top: '10px',


  }

  var stylesSearch = {
    border: '4px solid #2c97de',
    borderRadius: '25px',
    float: 'left',
    fontFamily: 'Helvetica',
    padding: '5px',
    position: 'absolute',
    right: '130px',
    top: '10px',
    paddingRight: '150px',
    // marginLeft: '40px',
  }


  return (
  <div>
    <div style={stylesSearch}>Search</div>
    <div style={styles}>Tweet</div>
  </div>
  )
}

export default NavBarSearch;
