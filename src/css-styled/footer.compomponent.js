import styled from "styled-components";
import footerBg from "../../assets/img/footer-bg.jpg";

export const BacgroundFooter = styled.div`
  background: url(${footerBg});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  height: 29.625rem;
  width: 100%;
  @media screen and (max-width: 768px) {
    height: 63.33rem;
  }
  @media screen and (max-width: 450px) {
    height: 115.55rem;
  }
`;

export const ContainFooter = styled.div`
  width: 75rem;
  height: 100%;
  margin 0 auto;
`;

export const TopFooter = styled.div`
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
  }
`;

export const BottomFooter = styled.div`
  display: flex;
  align-items: center;
  height: 10%;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
  p {
    color: white;
    @media screen and (max-width: 768px) {
      font-size: 1.7rem;
    }
    @media screen and (max-width: 450px) {
      font-size: 3.34rem;
      text-align: center;
    }
  }
`;

export const ImgLogo = styled.img`
  width: 11.1875rem;
  @media screen and (max-width: 768px) {
    width: 19.89rem;
  }
  @media screen and (max-width: 450px) {
    width: 39.78rem;
  }
`;

export const FlexCards = styled.div`
  display: flex;
  width: 47.5rem;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2.5rem;
  }
  @media screen and (max-width: 450px) {
    gap: 6rem;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  h5 {
    font-size: 1.25rem;
    color: #ffffff;
    @media screen and (max-width: 768px) {
      font-size: 2.22rem;
    }
    @media screen and (max-width: 450px) {
      font-size: 4.44rem;
    }
  }
  p {
    font-size: 0.95rem;
    color: #ffffff;
    @media screen and (max-width: 768px) {
      font-size: 1.67rem;
    }
    @media screen and (max-width: 450px) {
      font-size: 3.33rem;
    }
  }
  a {
    font-size: 0.95rem;
    color: #ffffff;
    transition: 0.4s;
    @media screen and (max-width: 768px) {
      font-size: 1.67rem;
    }
    @media screen and (max-width: 450px) {
      font-size: 3.33rem;
    }
    &:hover {
      color: #fa0368;
    }
  }
`;