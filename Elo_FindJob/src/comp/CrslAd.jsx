import React from 'react'

export default function CrslAd() {
  return (
    <div
    id="carouselExampleAutoplaying"
    className="carousel slide ad-box"
    data-bs-ride="carousel"
    
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <center>slide 1</center>
        <img src="..." className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
      <center>slide 2</center>
        <img src="..." className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
      <center>slide 3</center>
        <img src="..." className="d-block w-100" alt="..." />
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span
        className="carousel-control-prev-icon"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      <span
        className="carousel-control-next-icon"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}
