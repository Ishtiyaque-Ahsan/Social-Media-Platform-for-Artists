import React from 'react'

export default function SugBox() {
  return (
    <div className="sg-box-container">
      <div className='sg-box'>
        <h6>Name</h6>
        <div> Apply Now</div>
      </div>
      <div style={{display: 'flex' , width: '100%'}}>
      <p style={{width: '60%'}}>Job Title with Time</p>
      <p >Date and Time</p>
      </div>
    </div>
    
  )
}
