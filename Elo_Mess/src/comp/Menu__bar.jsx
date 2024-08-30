import React from 'react'
import Index_box_item from './Index_box_item'

import settng from '../assets/setting-2.png';
import arrowl from '../assets/arrow-circle-left.png';
import cameera from '../assets/camera.png';
import cllock from '../assets/clock.png';
import hoome from '../assets/home.png';
import useer from '../assets/user-add.png';
import mesg from '../assets/message.png';


export default function Menu__bar() {
  return (
    <div>
      <div className="Menu_box">
        <div className='Index_'>
          <div 
          style={{width:"70%",border:"1px solid black",height:'45px',
            backgroundColor:'lightgray', borderRadius:'16px',marginLeft:'20%',
             marginTop:'60px', marginBottom:'60px'}}>

          </div>
          <div className='Index_item'>
          <img src={hoome} alt="Filter Icon" className='img___filter'/>
          </div>
          <div className='Index_item'>
          <img src={cllock} alt="Filter Icon" className='img___filter'/>
          </div>
          <div className='Index_item'>
          <img src={useer} alt="Filter Icon" className='img___filter'/>
          </div>
          <div className='Index_item'>
          <img src={mesg} alt="Filter Icon" className='img___filter'/>
          </div>
          <div className='Index_item'>
          <img src={settng} alt="Filter Icon" className='img___filter'/>
          </div>
          <div className='Index_item'>
          <img src={settng} alt="Settingg Icon" className='img___filter'/>
          </div>
          
        </div>
        <div className='Index_box'>
            <center style={{marginTop:'20px'}}><h4>Messages</h4></center>
            <div style={{margin:'5px 10px', height:'35px',
              border:'1px solid black', borderRadius:'20px',display: 'flex' }}>

              <div style={{ height:'35px',border:'1px solid black',
              borderRadius:'20px 0 0 20px',display: 'flex',width:'50%',
              alignItems:'center', justifyContent:'center',backgroundColor:'lightgray' }}>Inbox</div>

              <div style={{ height:'35px',border:'1px solid black',
                 borderRadius:'0 20px 20px 0',display: 'flex',width:'50%',
                 alignItems:'center', justifyContent:'center' }}>Team</div>
            
            </div>

            <div style={{margin:'10px 10px', height:'35px',
              border:'2px solid black', borderRadius:'10px',display: 'flex' }}>
            </div>

            <Index_box_item/>
            <Index_box_item/>
            <Index_box_item/>
            <Index_box_item/>
            <Index_box_item/>
            <Index_box_item/>
            <Index_box_item/>
            <Index_box_item/>
        </div>
      </div>
    </div>
  )
}
