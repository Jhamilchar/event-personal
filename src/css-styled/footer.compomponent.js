import styled from "styled-components";
import footerBg from "../assets/img/footer-bg.jpg";

export const BacgroundFooter = styled.div `
  background: url(${footerBg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 29.625rem;
  width: 100%;
`;

export const ContainFooter = styled.div`
  width: 75rem;
  height: 100%;
  margin 0 auto;
`;

export const TopFooter = styled.div`
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BottomFooter = styled.div`
  display: flex;
  align-items: center;
  height: 10%;
  p {
    color white
  }
`;

export const FlexCards = styled.div`
  display: flex;
  width: 47.5rem;
  justify-content: space-between;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  h5 {
    font-size: 1.25rem;
    color: #ffffff;
  }
  p {
    font-size: 0.95rem;
    color: #ffffff;
  }
  a {
    font-size: 0.95rem;
    color: #ffffff;
    transition: .4s;
  &:hover {
    color: #fa0368;
  }
  }
`;