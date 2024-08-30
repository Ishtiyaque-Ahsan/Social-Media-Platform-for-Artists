import React from 'react'

export default function Small_box(props) {
  return (
    <div
          className="st-outer-box "
         
        >
          <div className="st-inner-box " ></div>
          <p
            style={{
              fontSize: "13px",
              margin: "0px",
              paddingBottom: "0px",
              textAlign: "center",
            }}
          >
            username{props.num}
          </p>
        </div>
  )
}
