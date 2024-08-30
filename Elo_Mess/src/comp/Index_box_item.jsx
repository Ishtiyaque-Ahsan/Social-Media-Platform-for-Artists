import React from "react";

export default function Index_box_item() {
  return (
    <div>
      <div
        style={{
          marginTop: "10px",
          height: "50px",
          border: "2px solid black",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            margin: "2px 5px",
            height: "39px",
            width: "15%",
            border: "2px solid black",
            borderRadius: "150px",
            display: "flex",
          }}
        ></div>
        <div className="text_box" style={{ flex: 1, marginLeft: "10px", alignSelf: "center" }}>
          <h6 style={{ marginTop:'15px'}}>Name</h6>
          <p>Last Message</p>
        </div>
        <div
          style={{
            textAlign: "right",
            marginRight: "10px",
            alignSelf: "center",
          }}
        >
          <p>5 min ago</p>
        </div>
      </div>
    </div>
  );
}
