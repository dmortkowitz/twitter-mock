import React from 'react';


function Profile(){
  var profileUpper = {
    border: '2px solid #2c97de',
    width: '98%',
    height: '130px',
    borderWidth: '2px',
    backgroundColor: '#2c97de',
    marginLeft: '1%',

    position: 'relative',
  };
  var profileLower = {
    border: '2px solid #dcdcdc',
    width: '98%',
    height: '100px',
    borderWidth: '2px',
    marginLeft: '1%',
    backgroundColor: '#ffffff',

    textAlign: 'right',
  };
  var profileImage = {
    height: '80px',
    width: '80px',
    transform: 'translate(30px, 80px)',
    borderRadius: '90px',
    position: 'relative',
    border: '2px solid white',
  };
  var profileHeader = {
    lineHeight: '0px',
    marginBottom: '45px',
    fontSize: '20px',
    fontFamily: 'Helvetica',
    position: 'relative',
    transform: 'translate(-20px)',
  };
  var profileLinks = {
    paddingTop: '10px',
    // textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: '15px',
    paddingRight: '10px',
    textDecoration: 'none',
    color: 'gray',
    marginTop: '10px',
    marginBottom: '10px',
    marginLeft: '5px',
    marginRight: '5px',

    textAlign: 'center',
  };
  var linkContainer = {
    marginTop: '20px',
  };
  var underProfile = {
    height: '400px',
    border: '2px solid #dcdcdc',
    marginTop: '20px',
    marginLeft: '1%',
    width: '98%',
    color: 'gray',
    textAlign: 'left',
    lineHeight: '1.5',
    overflow: 'none',
    backgroundColor: '#ffffff',
  };

  return (
    <div>
      <div>
        <div style={profileUpper}>
          <img style={profileImage} src="http://www.centro-renacer.org/wp-content/uploads/2016/06/blank-profile.png"></img>
        </div>
        <div style={profileLower}>
          <h3 style={profileHeader}>Kellie A. Corrigan</h3>
          <div style={linkContainer}>
            <a style={profileLinks} href="#">TWEETS</a>
            <a style={profileLinks} href="#">FOLLOWING</a>
            <a style={profileLinks} href="#">FOLLOWERS</a>
          </div>
        </div>
      </div>

      <div>
        <div style={underProfile}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  );
}

export default Profile;
