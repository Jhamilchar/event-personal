import React, { useState } from 'react'
import '../styles/nav.css'
import { Link } from 'react-scroll';
import darkImg from "/assets/img/logo-dark.png";
import lightImg from "/assets/img/logo-light.png";
import points from "../../assets/img/nine-points.png";

export const Nav = () => {
  const closeMenu = () => setClick(false);

  const [fix, setFix] = useState(false);
  function setFixed() {
    if(window.scrollY >= 120) {
      setFix(true)
    } else {
      setFix(false)
    }
  }

  window.addEventListener('scroll', setFixed)

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  };


  return (
    <>
      <div className="bg-top" id="head">
        <div className={fix ? "wrap-top fixed" : "wrap-top"}>
          <div className="content">
            <div>
              <img
                className="logo-light"
                src={fix ? darkImg : lightImg}
                alt="desciption"
              />
            </div>
            <div className="wraper-right">
              <di className={showMenu ? "background-gradient show" : "background-gradient"}>
                <ul
                  className={showMenu ? "container-nav show" : "container-nav"}
                >
                  <li>
                    <Link
                      to="head"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-120}
                      duration={500}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="speakers"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      Speakers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="schedules"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      Schedules
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </di>
              <div>
                <img
                  src={points}
                  alt="description"
                  className="logo-right"
                  onClick={toggleMenu}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="wrap-mid">
          <h1 className="dig-mid">DIGITAL</h1>
          <h3 className="mar-mid">MARKETERS MEETUP</h3>
          <h5 className="num-mid">18-20 DECEMBER 2021 | PARK HYATT NEW YORK</h5>
        </div>
      </div>
    </>
  );
}
