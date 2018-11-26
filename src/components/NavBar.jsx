import React from 'react';
import NavBarButton from './NavBarButton';
import NavBarSearch from './NavBarSearch';

function NavBar(){
  var styles = {
    borderBottom: '3px solid #dcdcdc',

  };

  var stylesRight = {
    float: 'right',
    position: 'absolute',
    right: '20px',
    top: '10px',
  };

  return (
    <div style={styles}>
      <NavBarButton/>
      <div style={stylesRight}><NavBarSearch/></div>
    </div>
  );
}

export default NavBar;
