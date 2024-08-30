import React from 'react'

export default function Genre_item() {
  return (
    <div className='genre-box'>
      <svg width="200" height="260">
      <rect x="10" y="100" width="180" height="150" fill="white" stroke="black" strokeWidth="1" rx="20" ry="20"  />
      
      <circle
        cx="100"
        cy="100"
        r="70"
        stroke="black"
        strokeWidth="1"
        fill="white"
      />

    </svg>
    </div>
  )
}
