import React from 'react';
import PostList from './PostList';
import Post from './Post';
import PostNewForm from './PostNewForm';

//import PropTypes from "prop-types";

class MiddleFeed extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      masterPostList: []
    };
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
  }

  handleAddingNewPostToList(newPost) {
    var newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }

  render(){
    return (
      <div>
        <style jsx>{`
        `}</style>


      <PostNewForm onNewPostCreation={this.handleAddingNewPostToList}/>
      <PostList postList={this.state.masterPostList} />
      </div>

    );
  }
}

//App.propTypes = {
//};

export default MiddleFeed;
