import React from 'react'

export const Cards = ({ title, title2, imageSource, num }) => {
  return (
    <div className="cards-6">
      <div className="f-card">
        <img src={imageSource} alt="des" />
        <h2 className="num">{num}</h2>
      </div>
      <div className='f-card_2'>
        <h3 className="des-card">{title}</h3>
        <p className="des-text">
          {title2}
        </p>
      </div>
    </div>
  );
}
