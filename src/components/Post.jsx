import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import constants from "./../constants";
import { connect } from "react-redux";


function Post(props) {
  console.log(props)
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

  function postWasLiked(post) {
    const { dispatch } = props;
    const action = {
      type: constants.LIKE_POST,
      content: post.content,
      author: post.author,
      title: post.title,
      id: post.id,
      timePosted: post.timePosted,
      likeCount: post.likeCount
    }
    dispatch(action);
  }

  function handleButton() {
    console.log(props);
    postWasLiked(props.post);
  }

  return (
    <div style={postStyle}>
      <h1>{props.post.title}</h1>
      <h4 style={titleStyle}>{props.post.author}</h4>
      <h4>{props.post.content}</h4>
      <p>{props.post.timePosted}</p>
      <p>Likes:{props.post.likeCount} </p>
      <Button bsStyle="success" style={buttonStyle} onClick={() => {handleButton()}}>Like</Button>
    </div>
  )
}


Post.propTypes = {
  post: PropTypes.object,
  postList: PropTypes.array
}

export default connect()(Post);
