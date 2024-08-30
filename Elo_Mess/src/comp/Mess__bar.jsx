import React from 'react';
import Mess_bar_top from './Mess_bar_top';
import Mess_bar_body from './Mess_bar_body';
import Mess_bar_floor from './Mess_bar_floor';

export default function Mess__bar() {
  return (
    <div className='Mess_box'>
      <Mess_bar_top/>
      <Mess_bar_body/>
      <Mess_bar_floor/>
    </div>
  );
}
