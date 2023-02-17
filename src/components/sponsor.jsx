import {
  Background,
  Content,
  MiddleTop,
  ContentImg,
} from "../css-styled/sponsor.compomponent";
import { CardSpon } from "./min/cardSpon";


import img1 from "../../assets/img/company.png";
import img2 from "../../assets/img/company-2.png";
import img3 from "../../assets/img/company-3.png";
import img4 from "../../assets/img/company-4.png";
import img5 from "../../assets/img/company-5.png";
import img6 from "../../assets/img/company-6.png";
import img7 from "../../assets/img/company-7.png";
import img8 from "../../assets/img/company-8.png";
import { CompButton } from "../css-styled/tickets.components";

const Images = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
  {
    id: 6,
    img: img6,
  },
  {
    id: 7,
    img: img7,
  },
  {
    id: 8,
    img: img8,
  },
];

export const Sponsor = () => {
  return (
    <Background>
      <Content>
        <MiddleTop>
          <span>Our Sponsor</span>
          <h2>Event Sponsorship</h2>
        </MiddleTop>
        <ContentImg>
          {Images.map((card) => (
            <CardSpon key={card.id} imgCard={card.img} />
          ))}
        </ContentImg>
        <div>
            <CompButton>
                Become a Sponsor
            </CompButton>
        </div>
      </Content>
    </Background>
  );
}
