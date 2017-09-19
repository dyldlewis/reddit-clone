import React from "react";
import PostList from "./PostList";
import { v4 } from "uuid";
import constants from "./../constants";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";



class BlogInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleNewBlogFormSubmission = this.handleNewBlogFormSubmission.bind(this);
  }

  handleNewBlogFormSubmission(event) {
    event.preventDefault();
    const { _title, _author, _content } = this.refs;
    const { dispatch } = this.props;
    const action = {
      type: constants.ADD_POST,
      id: v4(),
      title: _title.value,
      author: _author.value,
      content: _content.value
    }
    dispatch(action);
  }

  render() {

    var containerStyle ={
      margin: 30,
      textAlign: "center",
      marginTop: "50px",
    }

    var inputStyle = {
      width: "300px"
    }

    return(
      <div style={containerStyle}>
        <form onSubmit={this.handleNewBlogFormSubmission}>
          <input
          style={inputStyle}
          ref="_title"
          type="text"
          id="names"
          placeholder="Title"/>
          <br/>
          <input
          style={inputStyle}
          ref="_author"
          type="text"
          id="author"
          placeholder="author"/>
          <br/>
          <textarea
          style={inputStyle}
          ref="_content"
          id="content"
          placeholder="content"/>
          <br/>
          <Button bsStyle="warning" type="submit">Post</Button>
        </form>
        <PostList postList={this.props.masterPostList}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    masterPostList : state
  };
};


export default connect(mapStateToProps)(BlogInput);
