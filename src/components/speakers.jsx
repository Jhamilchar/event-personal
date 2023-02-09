import { GlobalStyle } from "../css-styled/GlobalStyles";
import { Background, Cards } from "../css-styled/speakers.components";
import { Container } from "../css-styled/speakers.components";
import { DataSpeakers } from "../data/speakers";
import { CardSp } from "./min/cardSp";


export const Speakers = () => {
  return (
    <>
      <GlobalStyle />
      <Background id="speakers">
        <Container>
          <div className="top-repeat">
            <span>SPEAKERS</span>
            <h2>Event Speakers</h2>
          </div>
          <Cards>
            {DataSpeakers.map((card) => (
              <CardSp
                key={card.id}
                imgCard={card.img}
                linkCard={card.name}
                textCard={card.position}
              />
            ))}
          </Cards>
        </Container>
      </Background>
    </>
  );
}
