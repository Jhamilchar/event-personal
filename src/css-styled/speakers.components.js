import styled from "styled-components";

export const Background = styled.div`
  background: url("../../public/img/team-bg2.jpg");
  background-size: cover;
  background-position: top;
  height: 74.120rem;
`;

export const Container = styled.div`
  width: 71.25rem;
  height: 63.5rem;
  margin: 0 auto;
  padding-top: 7.5rem;
  padding-bottom: 3.125rem;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.375rem;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.43rem;

`;

export const ContainerImg = styled.div`
  width: 16.375rem;
  height: 16.375rem;
  transition: 0.3s;
  overflow: hidden;
`;


export const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s;
  &:hover {
    transform: scale(1);
  }
`;

export const DuoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;


export const Atext = styled.a`
  font-size: 1.25rem;
  color: white;
  font-weight: 500;
`;
0, 9375;
export const Ptext = styled.p`
  font-size: 0.9375;rem;
  color: white;
  font-weight: 200;
`;

// export const