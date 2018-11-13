import React from "react";

function NavBarButton(){
  var styles = {
    border: '3px solid #dcdcdc',
    width: '8%',
    padding: '10px',
    paddingTop: '15px',
    paddingBottom: '15px',
    display: 'inline-block',
    textAlign: 'center',
    marginBottom: '10px',
    marginRight: '-1px',
    marginLeft: '-1px',
    color: 'black',
    fontFamily: 'Helvetica',
    }

    var stylesContainer = {
      marginLeft: '11px',
    }

  return (
    <div style={stylesContainer}>
      <div style={styles}>Home</div>
      <div style={styles}>Notifications</div>
      <div style={styles}>Messages</div>
    </div>
  )
}

export default NavBarButton;
