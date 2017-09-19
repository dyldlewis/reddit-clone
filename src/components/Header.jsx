import React from "react";



function Header() {
  var headerStyle = {
    textAlign: "left",
    fontSize: "50px",
    color: "orange",
    border: "solid grey 1px",
    marginRight: "950px",
    padding: "10px",
  }

  return(

    <div>
      <h1 style={headerStyle}>Reddit</h1>
      <hr/>
    </div>
  );
}

export default Header;
