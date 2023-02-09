import { Atext, ContainerCard, ContainerImg, DuoContainer, Img, Ptext } from "../../css-styled/speakers.components";


export const CardSp = ({ imgCard, linkCard, textCard }) => {
  return (
    <ContainerCard>
      <ContainerImg>
        <Img src={imgCard} alt="" />
      </ContainerImg>
      <DuoContainer>
        <h3>
          <Atext href="">{linkCard}</Atext>
        </h3>
        <Ptext>{textCard}</Ptext>
      </DuoContainer>
    </ContainerCard>
  );
};
