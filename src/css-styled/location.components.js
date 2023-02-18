import styled from "styled-components";

export const ContentLocation = styled.div`
  padding-top: 6.875rem;
  padding-bottom: 7.5rem;
  height: 90.1875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LocationWraperTop = styled.div`
  height: 40.31rem;
  width: 75rem;
  margin-top: 4rem;
`;

export const LocationWraperBottom = styled.div`
  height: 31.32rem;
  width: 75rem;
  padding-top: 6.25rem;
`;

export const MiddleTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  width: 41.125rem;
  height: 40.31rem;
`;

export const LocationInfo = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

export const ImgContact = styled.img`
  width: 3.125rem;
  height: 3.125rem;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  gap: .5rem;
  h5 {
    font-size: 1.25rem;
  }
  p {
    font-size: 1rem;
  }
`;

export const WraperHotel = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerCardHotel = styled.div`
  width: 24rem;
  height: 31.37rem;
  box-shadow: 0px 6px 25px 0px #eee;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
  h5 {
    color: #0a0a0a;
    font-size: 1.375rem;
    font-weight: bold;
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
    }
  }
  div p {
    font-size: .96rem;
    color: #454545;
  }
`;

export const GetDirection = styled.a`
  display: inline-block;
  color: white;
  padding: 10px 26px 11px 25px;
  border-radius: 4px 4px 4px 4px;
  background: #fa0368;
`;
