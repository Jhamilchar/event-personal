import {
  Background,
  Container,
  H2,
  Cards,
} from "../css-styled/tickets.components";
import { DataTickets } from "../data/tickets";
import { CardTick } from "./min/cardTick";


export const Tickets = () => {
  return (
    <Background>
      <Container>
        <div className="top-repeat">
          <span>SPEAKERS</span>
          <H2>Event Speakers</H2>
        </div>
        <Cards>
          {DataTickets.map((card) => (
            <CardTick
              key={card.id}
              range={card.title}
              number={card.price}
              benefits1={card.benefits1}
              benefits2={card.benefits2}
              benefits3={card.benefits3}
              benefits4={card.benefits4}
              buy={card.buy}
            />
          ))}
        </Cards>
      </Container>
    </Background>
  );
}
