import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

var masterPostList = [
  {
    name: 'Joe',
    username: '@JoeMade',
    time: 'time',
    content: 'I had some toast today',
  },
  {
    name: 'Moe',
    username: '@MoeisBest',
    time: 'time',
    content: 'I had lots of toast today; more than Joe',
  },
  {
    name: 'Loe',
    username: '@LowMain',
    time: 'time',
    content: 'I hate toast with all my heart',
  }
];

function PostList(){
  return (
    <div>
    {masterPostList.map((post, index) =>
      <Post name={post.name}
        username={post.username}
        time={post.time}
        content={post.content}
        key={index}/>
    )}
    </div>
  );
}

export default PostList;
