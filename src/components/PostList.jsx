import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";





function PostList(props) {
  console.log(props);
  var showList;
  if (props.postList.length > 0) {
    showList = <h1>Top Reddit Posts</h1>;
  }

  return (
    <div>
      {showList}
      {props.postList.map((post) =>
      <Post
      post={post}
      key={post.id}
      postList={props.postList}
      />
      )}
    </div>
  )
}

PostList.propTypes = {
  postList: PropTypes.array
};

export default PostList;
