import React from "react";

export default function MenuBar() {
  return (
    <div className="menubar-box">
      <center style={{ textAlign: "center", padding: "20px" }}>
        Elemenopee
      </center>

      <div
        className="inner-box"
        style={{ margin: "0px", paddingRight:"10px",backgroundColor: "rgb(240, 240, 240)", width:"90%" }}
      >
        <span
          className="fp"
          style={{ backgroundColor: "white", color: "white" }}
        >
          -
        </span>
        <div>
          <h6 style={{ marginBottom:"0px"}}>Sauvik das</h6>
          Writer
        </div>
      </div>

      <div class="menu-item">
        <a href="../App_exp">Flex Box </a>
        <a href="#">Explore</a>
        <a href="#">Collaboration</a>
        <a href="#">Messages</a>
        <a href="#">Event</a>
        <a href="#">Setting</a>
      </div>
    </div>
  );
}
/*
media query : mobile
laptop : flex box , %
*/
