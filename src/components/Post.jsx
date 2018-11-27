import React from 'react';
import PropTypes from 'prop-types';
import BlankProfile from '../assets/images/blank-profile.png';

function Post(props){

  return (
    <div>
      <style jsx>{`
          div {
          border-bottom: 2px solid #efeff0;
          width: 100%;
          padding-left: 2%;
          padding-right: 2%;
          font-family: Helvetica;
          }
          img {
            width: 60px;
            border: 2px solid #ffffff;
            border-radius: 90px;
            float: left;
            margin-right: 2%;
          }

      `}</style>
    <ul>
    <li><img src={BlankProfile} />
    {props.content}</li>
    </ul>
    </div>

  );
}

Post.propTypes = {
  content: PropTypes.string,
};

export default Post;
