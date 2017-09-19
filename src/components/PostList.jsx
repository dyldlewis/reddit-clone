import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";




function PostList(props) {
  var showList;
  if (props.postList.length > 0) {
    showList = <h1>Top Reddit Posts</h1>;
  }

  return (
    <div>
      {showList}
      {props.postList.map((post, index) =>
      <Post
      post={post}
      key={post.id}
      handleNewLike={props.handleNewLike}/>
      )}
    </div>
  )
}

PostList.propTypes = {
  postList: PropTypes.array,
  handleNewLike: PropTypes.func
};

export default PostList;
