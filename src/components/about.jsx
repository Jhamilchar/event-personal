import React from 'react'
import '../styles/about.css'

export const About = () => {
  return (
    <div className="About" id="about">
      <div className="wrap-about">
        <div>
          <img
            className="img-p"
            src="../../public/img/about.png"
            alt="description"
          />
        </div>
        <div>
          <div className="about-w-top">
            <p className="t-about">ABOUT EVENT</p>
            <h2 className="t-wel">Welcome to Digital Marketing Meetup 2021</h2>
            <p className="t-large">
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
              accu santium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto.
            </p>
          </div>
          <div className='sup'>
            <div className="sup-2">
              <div className="flex-duo">
                <img className="duo-img" src="../../public/img/1.png" alt="" />
                <h5 className="par">Where</h5>
              </div>
              <p className="duo-text">
                Park Hyatt New York 11110,
                <br /> United States.
              </p>
            </div>
            <div className="sup-2">
              <div className="flex-duo">
                <img className="duo-img" src="../../public/img/2.png" alt="" />
                <h5 className="par">When</h5>
              </div>
              <p className="duo-text">
                18-21 December 2021. <br /> 10:00-17:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
