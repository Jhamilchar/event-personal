import styled from "styled-components";
import teamBg2 from "/assets/img/team-bg2.jpg";


export const Background = styled.div`
  background: url(${teamBg2});
  background-size: cover;
  background-position: top;
  height: 63.5rem;
  padding-top: 7.5rem;
  padding-bottom: 3.125rem;
  @media screen and (max-width: 768px) {
    height: 215rem;
  }
  @media screen and (max-width: 450px) {
    height: auto;
    padding-bottom: 15rem;
  }
`;

export const Container = styled.div`
  width: 71.25rem;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.375rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding-top: 2rem;
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    gap: 19rem;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.43rem;
  @media screen and (max-width: 768px) {
    gap: 2rem;
  }
  @media screen and (max-width: 450px) {
    gap: 6rem;
  }
`;

export const ContainerImg = styled.div`
  width: 16.375rem;
  height: 16.375rem;
  transition: 0.3s;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 37.5rem;
    height: 37.5rem;
  }
  @media (max-width: 450px) {
    width: 87rem;
    height: 87rem;
  }
`;


export const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

export const DuoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 450px) {
    gap: 3rem;
  }
`;


export const Atext = styled.a`
  font-size: 1.25rem;
  color: white;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 2.3rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 4.6rem;
    font-weight: bold;
  }
`;

export const Ptext = styled.p`
  font-size: 0.9375;rem;
  color: white;
  font-weight: 200;
  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 3.4rem;
  }
`;

// export const