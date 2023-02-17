import {
  CardGradient,
  ImgContact,
  TextContent,
} from "../../css-styled/location.components";

export const AsideContact = ({img, info, demos}) => {
  return (
    <CardGradient>
      <div>
        <ImgContact src={img} alt="" />
      </div>
      <TextContent>
        <h5>{info}</h5>
        <p>{demos}</p>
      </TextContent>
    </CardGradient>
  );
};
