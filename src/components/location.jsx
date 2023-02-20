import {
  ContentLocation,
  LocationWraperTop,
  LocationWraperBottom,
  MiddleTop,
  Img,
  LocationInfo,
  WrapperAside,
} from "../css-styled/location.components";
import { AsideContact } from "./min/cardAside";
import { DirectionHotels } from "./min/cardHotels";
import contact from "../../assets/img/contact.png";

import img1 from "../../assets/img/gps.png";
import img2 from "../../assets/img/chat.png";
import img3 from "../../assets/img/phone.png";

const info = [
  {
    id: 1,
    img: img1,
    info: "Addres",
    info2: "55 Gerad Lane,NY 11201, USA",
  },
  {
    id: 2,
    img: img2,
    info: "Email Us",
    info2: "demo@evenio.org demo2@evenio.org",
  },
  {
    id: 3,
    img: img3,
    info: "Call us",
    info2: "(+088) 589-8745(+088) 222-9999",
  },
];


export const Location = () => {
  return (
    <ContentLocation id="contact">
      <MiddleTop>
        <span>VENUE</span>
        <h2 style={{ color: "black" }}>Event Location</h2>
      </MiddleTop>
      <LocationWraperTop>
        <LocationInfo>
            <Img
              src={contact}
              alt=""
            />
          <WrapperAside>
            {
              info.map((card) => (
                <AsideContact
                  key={card.id}
                  img={card.img}
                  info={card.info}
                  demos={card.info2}
                />
              ))
            }
          </WrapperAside>
        </LocationInfo>
      </LocationWraperTop>
      <LocationWraperBottom>
        <DirectionHotels />
      </LocationWraperBottom>
    </ContentLocation>
  );
};
