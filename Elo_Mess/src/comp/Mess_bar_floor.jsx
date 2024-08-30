import React from 'react';
import smle from '../assets/smiling-emoji.png';
import sendd from '../assets/send.png';
export default function Mess_bar_floor() {
  return (
    <div>
      <div
        style={{
          margin: "0px 15px",
          height: "60px",
          border: "2px solid black",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Adjusted to evenly distribute content
        }}
      >
        <div className='frst___icon' style={{display: 'flex'
            }}>
            <div  style={{
              margin: "2px 6px",
              height: "34px",
              width: "35px",
            //  border: "1px solid grey",
              borderRadius: "15px",
              display:'flex',
              justifyContent:'center',
              alignItems:'center'
            }}><img src={smle} alt="Filter Icon" className="img___filter" /></div>
            <div  style={{
              margin: "2px 0px",
              height: "34px",
              width: "35px",
            //  border: "1px solid grey",
              borderRadius: "15px",
              display:'flex',
              justifyContent:'center',
              alignItems:'center'
            }}><img src={smle} alt="Filter Icon" className="img___filter" /></div>
        </div>
        

        <div
          className='abc'
          style={{
            margin: "2px 10px",
            height: "50px",
            width: "50%",
          //  border: "2px solid white",
            borderRadius: "150px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "10px", // Added padding to space out from the icon
            }}
          >
            <p style={{ marginBottom: "0px",fontSize: '13px' }}>Initially voice</p>
            <p style={{ margin: "0px" ,fontSize: '13px'}}>If user starts typing, then show send button</p>
          </div>
          <div
            style={{
              margin: "2px 0px",
              height: "89%",
              width: "61px",
              //border: "1px solid grey",
              borderRadius: "15px",
              display:'flex',
              justifyContent:'center',
              alignItems:'center'
            }}
          ><img src={sendd} alt="Filter Icon" className="img___filter" /></div>
        </div>
      </div>
    </div>
  );
}
