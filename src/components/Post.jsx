import React from "react";
import PropTypes from "prop-types"
import { Button } from "react-bootstrap"


function Post(props) {
  var postStyle = {
    border: "solid grey 1px"
  }

  return (

    <div style={postStyle}>
      <h1>{props.post.author}</h1>
      <h4>{props.post.title}</h4>
      <h4>{props.post.content}</h4>
      <Button bsStyle="success">Like</Button>
    </div>
  )
}


Post.propTypes = {
  post: PropTypes.object
}

export default Post;
