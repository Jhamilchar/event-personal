import {
  ContainerCard,
  Numb,
  ListTick,
  ContButt,
  CompButton,
} from "../../css-styled/tickets.components";


export const CardTick = ({ range, number, benefits1, benefits2, benefits3,benefits4, buy }) => {
  return (
    <ContainerCard>
      <div>
        <span>{range}</span>
      </div>
      <div>
        <Numb>{number}</Numb>
      </div>
      <ListTick>
        <ul>
          <li>{benefits1}</li>
          <li>{benefits2}</li>
          <li>{benefits3}</li>
          <li>{benefits4}</li>
        </ul>
      </ListTick>
      <ContButt>
        <CompButton href="#">{buy}</CompButton>
      </ContButt>
    </ContainerCard>
  );
}
