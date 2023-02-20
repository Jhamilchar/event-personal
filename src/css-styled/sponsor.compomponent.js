import styled from "styled-components";
import sponsorBg2 from "/assets/img/sponsor-bg2.jpg"

export const Background = styled.div`
  background: url(${sponsorBg2});
  background-size: cover;
  background-position: top left;
  height: 54rem;
  padding: 7.5rem 0;
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 75rem;
  height: 54rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

export const MiddleTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentImg = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.40625rem;
  justify-content: center;
`;

export const Card = styled.div`
  width: 17.25rem;
  height: 16.43rem;
  background-color: #0000003d;
  display: grid;
  place-items: center;
  box-sizing: border-box;
`;

export const Img = styled.img`
  min-width: 7.87rem;
  height: 7.06rem;
  transition: .3s;
  &:hover {
    transform: scale(.89);
  }
`;
;