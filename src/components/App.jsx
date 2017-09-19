import React from "react";
import Header from "./Header";
import BlogInput from "./BlogInput"

function App(props){

  var containerStyle = {
    margin: '30'
  }

  return (
    <div style={containerStyle}>
      <Header/>
      <BlogInput/>
    </div>
  );
}

export default App;
