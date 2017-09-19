import React from "react";
import PropTypes from "prop-types"
import { Button } from "react-bootstrap"


function Post(props) {
  var postStyle = {
    border: "solid grey 1px",
    margin: "15px",
    textAlign: "center"
  }

  var buttonStyle = {
    marginBottom: "10px",
  }

  var titleStyle = {
    color: "orange"
  }

  var likeStyle = {
    float: "right",
    // marginRight: "50px"
  }

  return (

    <div style={postStyle}>
      <h1>{props.post.title}</h1>
      <h4 style={titleStyle}>{props.post.author}</h4>
      <h4>{props.post.content}</h4>
      <p>{props.post.timePosted}</p>
      <p style={likeStyle}>Likes: </p>
      <Button bsStyle="success" style={buttonStyle} onClick={() => {props.handleNewLike(props.post)}}>Like</Button>
    </div>
  )
}


Post.propTypes = {
  post: PropTypes.object,
  handleNewLike: PropTypes.func
}

export default Post;
