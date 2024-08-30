

import React, { useRef } from 'react';
import Small_box from './Small_box';
import Big_box from './Big_box';

export default function Midi(count) {
  count = 5;
  const bigboxes = Array.from({ length: count }, (_, index) => <Big_box key={index} />);
  const outerContainerRef = useRef(null);

  const handleScrollRight = () => {
    if (outerContainerRef.current) {
      outerContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const handleScrollLeft = () => {
    if (outerContainerRef.current) {
      outerContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div style={{display: 'flex'}}>
      <div className='search-bar' >Search Here...
      </div>
      <div className='bell'></div>
      <div className='bell'></div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="scroll-button" onClick={handleScrollLeft} style={{ width: '3%', height: '50px' }}>
          <h5>&lt;</h5>
        </div>

        <div className="scrollable-container">
        <div className="outer-container" ref={outerContainerRef}>
          <Small_box num='1'  />
          <Small_box num='2' />
          <Small_box num='3' />
          <Small_box num='4' />
          <Small_box num='5' />
          <Small_box num='6' />
          <Small_box num='7' />
          <Small_box num='8' />
          <Small_box num='9' />
          <Small_box num='10' />
          <Small_box num='11' />
          <Small_box num='12' />
          <Small_box num='13' />
        </div>
        </div>

        <div className="scroll-button" onClick={handleScrollRight} style={{ width: '3%', height: '50px' }}>
          <h5>&gt;</h5>
        </div>
      </div>

      <br />

      <div className="big-container">
        {bigboxes}
      </div>
    </div>
  );
}
