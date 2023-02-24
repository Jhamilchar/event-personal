import { useEffect, useState } from "react";
import styled from "styled-components";

const ButtonToTop = styled.button`
  position: fixed;
  bottom: 30px;
  right: 20px;
  height: 43px;
  width: 50px;
  border: none;
  font-size: 25px;
  color: white;
  background: #fa0368;
  transition: .3s;
  cursor: pointer;
  &:hover {
    background: #c70053;
  }
`;

export const ButtonlToTop = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100) {
        setBackToTopButton(true)
      }else{
        setBackToTopButton(false)
      }
    })
  }, []);

  const scrollUp = ( ) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      {backToTopButton && (
        <ButtonToTop onClick={scrollUp} >^</ButtonToTop>
      )}
    </div>
  )
}
