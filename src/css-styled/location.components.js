import styled from "styled-components";

export const ContentLocation = styled.div`
  padding-top: 6.875rem;
  padding-bottom: 7.5rem;
  height: 90.1875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 277rem;
  }
  @media screen and (max-width: 450px) {
    height: 610rem;
  }
`;

export const LocationWraperTop = styled.div`
  height: 40.31rem;
  width: 75rem;
  margin-top: 4rem;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const LocationWraperBottom = styled.div`
  height: 31.32rem;
  width: 75rem;
  padding-top: 6.25rem;
  align-items: center;
  @media screen and (max-width: 450px) {
    padding-top: 17rem;
  }
`;

export const MiddleTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
694 / 680;

export const Img = styled.img`
  width: 41.125rem;
  height: 40.31rem;
  @media screen and (max-width: 768px) {
    width: 77.11rem;
    height: 75.5rem;
  }
  @media screen and (max-width: 450px) {
    width: 94rem;
    height: 92.22rem;
  }
`;

export const LocationInfo = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 5rem;
  }
`;

export const AsideContact = styled.div `
`;

export const WrapperAside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CardGradient = styled.div`
  background-image: linear-gradient(80deg, #1a0b8c 40%, #fa50cb 120%);
  width: 19.82rem;
  height: 5.875rem;
  display: flex;
  gap: 2rem;
  padding: 1.875rem;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 75rem;
    height: 17.11rem;
  }
  @media screen and (max-width: 450px) {
    width: 86rem;
    height: 34.22rem;
    padding: 3rem;
  }
`;

export const ImgContact = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  @media screen and (max-width: 768px) {
    width: 5.56rem;
    height: 5.56rem;
  }
  @media screen and (max-width: 450px) {
    width: 50px;
    height: 50px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  gap: 0.5rem;
  h5 {
    font-size: 1.25rem;
    @media screen and (max-width: 768px) {
      font-size: 2.2rem;
    }
    @media screen and (max-width: 450px) {
      font-size: 20px;
    }
  }
  p {
    font-size: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 1.7rem;
    }
    @media screen and (max-width: 450px) {
      font-size: 15px;
    }
  }
`;

export const WraperHotel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  place-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
    gap: 6rem;
    justify-content: center;
  }
`;
337/477

export const ContainerCardHotel = styled.div`
  width: 24rem;
  height: 31.37rem;
  box-shadow: 0px 6px 25px 0px #eee;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 37.4rem;
    height: 53rem;
  }
  @media screen and (max-width: 450px) {
    width: 92rem;
    height: 110rem;
  }
`;

export const ImgHotel = styled.img`
  width: 100%;
  transition: 0.5s;
  object-fit: cover;
  &:hover {
    transform: scale(1.04);
  }
`;

export const BottomHotel = styled.div`
  height: 100%;
  padding: 24px 63px 34px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
  @media screen and (max-width: 450px) {
    padding: 20px 20px 30px 20px;
  }
  h5 {
    color: #0a0a0a;
    font-size: 1.375rem;
    font-weight: bold;
    @media screen and (max-width: 768px) {
      font-size: 2.4rem;
    }
    @media screen and (max-width: 450px) {
      font-size: 20px;
    }
  }
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  div {
    img {
      width: 1.875rem;
      height: 27px;
      @media screen and (max-width: 768px) {
        width: 3.33rem;
      }
      @media screen and (max-width: 450px) {
        width: 30px;
        height: 27px;
      }
    }
  }
  div p {
    font-size: 0.96rem;
    color: #454545;
    @media screen and (max-width: 768px) {
      font-size: 1.67rem;
    }
    @media screen and (max-width: 450px) {
      font-size: 15px;
      line-height: 6rem;
    }
  }
`;

export const GetDirection = styled.a`
  display: inline-block;
  color: white;
  padding: 10px 26px 11px 25px;
  border-radius: 4px 4px 4px 4px;
  background: #fa0368;
  @media screen and (max-width: 768px) {
    font-size: 1.67rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 15px;
    line-height: 6rem;
  }
`;
