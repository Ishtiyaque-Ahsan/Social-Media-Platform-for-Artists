import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Rgt() {
  return (
    <div className="rgtbox">

      <div className="outer-box " style={{ width: "90%" }}>
        <h6>Upcoming Event</h6>
        <div className="inner-box upc" style={{ height: "150px" }}></div>
        <h6 style={{marginBottom: "0px", marginLeft:"10px"}}>
          Dance</h6>
        
          <p style={{marginBottom: "0px", marginLeft:"10px"}}>last date
        </p>
      </div>

      <div className="outer-box " style={{ width: "90%" }}>
        <h6>Suggested Creators</h6>
        <div className="inner-box"  style={{ position: 'relative'}}>
          <span className="fp">-</span>
          <div>
            <h6 style={{ marginBottom:"0px"}}>Souvik Das</h6>
            
            Writer
          </div>
          <span className="ps" style={{textAlign: 'center',position: 'absolute',right: '10%'}}>+</span>
        </div>

        <div className="inner-box"  style={{ position: 'relative'}}>
          <span className="fp">-</span>
          <div>
            <h6 style={{ marginBottom:"0px"}}>Souvik Das</h6>
            
            Writer
          </div>
          <span className="ps" style={{textAlign: 'center',position: 'absolute',right: '10%'}}>+</span>
        </div>

        <div className="inner-box"  style={{ position: 'relative'}}>
          <span className="fp">-</span>
          <div>
            <h6 style={{ marginBottom:"0px"}}>Souvik Das</h6>
            
            Writer
          </div>
          <span className="ps" style={{textAlign: 'center',position: 'absolute',right: '10%'}}>+</span>
        </div>

        <div className="inner-box"  style={{ position: 'relative'}}>
          <span className="fp">-</span>
          <div>
            <h6 style={{ marginBottom:"0px"}}>Souvik Das</h6>
            
            Writer
          </div>
          <span className="ps" style={{textAlign: 'center',position: 'absolute',right: '10%'}}>+</span>
        </div>

        <div className="inner-box shm"  >
         Show more v
        </div>
        
      </div>
    </div>
  );
}
