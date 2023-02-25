import styled from "styled-components";
import sponsorBg2 from "../../assets/img/sponsor-bg2.jpg"

export const Background = styled.div`
  background: url(${sponsorBg2});
  background-size: cover;
  background-position: top left;
  height: 54rem;
  padding: 7.5rem 0;
  @media screen and (max-width: 768px) {
    height: 180.78rem;
  }
  @media screen and (max-width: 450px) {
    height: 225rem;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 75rem;
  height: 54rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  @media screen and (max-width: 768px) {
    gap: 9rem;
  }
  @media screen and (max-width: 450px) {
    gap: 14rem;
  }
`;

export const MiddleTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentImg = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.40625rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 2.6rem;
  }
`;

export const Card = styled.div`
  width: 17.25rem;
  height: 16.43rem;
  background-color: #0000003d;
  display: grid;
  place-items: center;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    width: 37.33rem;
    height: 35.22rem;
  }
  @media screen and (max-width: 450px) {
    width: 42rem;
    height: 40rem;
  }
`;

export const Img = styled.img`
  width: 7.87rem;
  height: 7.06rem;
  transition: 0.3s;
  &:hover {
    transform: scale(0.89);
  }
  @media screen and (max-width: 768px) {
    width: 20.67rem;
    height: 18.56rem;
  }
  @media screen and (max-width: 450px) {
    width: 26.89rem;
    height: 24.22rem;
  }
`;
;