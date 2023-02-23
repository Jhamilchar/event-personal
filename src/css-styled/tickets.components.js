import styled from "styled-components";

export const Background = styled.div`
  height: 43rem;
  width: 100%;
  padding: 7.18rem 0;
  background-color: #faf4fe;
  @media screen and (max-width: 768px) {
    height: 132.78rem;
  }
`;

export const Container = styled.div`
  width: 71.68rem;
  height: 43.56rem;
  margin: 0 auto;
`;

export const H2 = styled.h2`
  color: black;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.375rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    place-items: center;
    gap: 3rem;
  }
`;
// 351
// 498
// Card Component


export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 23.25rem;
  height: 31.125rem;
  background: #ffffff;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 36.78rem;
    height: 55.56rem;
    gap: 2.8rem;
  }
`;

export const Numb = styled.h5`
  color: #151748;
  font-size: 3.125rem;
  border-bottom: 1px dashed gray;
  padding-bottom: 1.2rem;
  @media screen and (max-width: 768px) {
    font-size: 5.56rem;
  }
`;


export const ListTick = styled.div`
  & ul {
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
    margin: 1.875rem 0;
  }

  & ul li {
    color: #44455b;
    font-size: 0.99rem;
    font-weight: 400;
    @media screen and (max-width: 768px) {
      font-size: 1.67rem;
    }
  }
`;


export const ContButt = styled.div`

`;

export const CompButton = styled.a`
  border: none;
  padding: 14px 40px 14px 40px;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  color: #ffffff;
  background-color: transparent;
  background-image: linear-gradient(140deg, #ff0066 0%, #a445b2 160%);
  border-radius: 5px 5px 5px 5px;
  &:hover {
    background: rgba(0, 0, 0, 0)
      linear-gradient(130deg, #ff0066 0%, #d41872 50%, #a445b2 100%) repeat
      scroll 0% 0%;
  }
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;