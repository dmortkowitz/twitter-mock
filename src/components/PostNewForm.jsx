import React from 'react';
import PropTypes from 'prop-types';
import BlankProfile from '../assets/images/blank-profile.png';

function PostNewForm(props) {
  let _names = null;
  let _location = null;
  let _issue = null;


  function handleNewPostFormSubmission(event) {
    event.preventDefault();
      props.onNewPostCreation({content: _content.value, });
      _content.value = '';
    }
  return (
    <div>
      <style jsx>{`
      div {
      margin-bottom: 5%;
      background-color: #f5f8fa;
    }
      input {
        width: 84%;
        height: 40px;
        margin-left: 15%;
        float: clear;
      }
      img {
        width: 10%;
        border: 2px solid #ffffff;
        border-radius: 90px;
        

      }
      `}</style>
    <img src={BlankProfile} />
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          id='content'
          placeholder='What is on your mind?'/>
      </form>
    </div>

  );
}

PostNewForm.propTypes = {
  onNewPostCreation: PropTypes.func
};


export default PostNewForm;
